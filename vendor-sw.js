( () => {
    var d = class extends Error {
        constructor(e, n, s={}) {
            super(n),
            this.name = "PaywallError",
            this.code = e,
            this.status = s.status,
            this.cause = s.cause,
            s.originRetryable !== void 0 && (this.originRetryable = s.originRetryable)
        }
    }
    ;
    var l = 1;
    function p(t) {
        if (t.name === "PaywallError") {
            let n = new d(t.code,t.message,{
                status: t.status
            });
            return t.stack && (n.stack = t.stack),
            n
        }
        let e = new Error(t.message);
        return e.name = t.name,
        t.stack && (e.stack = t.stack),
        e
    }
    function g(t) {
        let e = !1
          , n = new Set
          , s = new Set
          , o = a => {
            for (let c of n)
                c(a)
        }
          , i = () => {
            if (!e) {
                e = !0;
                for (let a of s)
                    a();
                t.onMessage.removeListener(o),
                t.onDisconnect.removeListener(i)
            }
        }
        ;
        return t.onMessage.addListener(o),
        t.onDisconnect.addListener(i),
        {
            send(a) {
                if (!e)
                    try {
                        t.postMessage(a)
                    } catch (c) {
                        throw i(),
                        c
                    }
            },
            onMessage(a) {
                return n.add(a),
                () => n.delete(a)
            },
            onDisconnect(a) {
                return e ? (queueMicrotask(a),
                () => {}
                ) : (s.add(a),
                () => s.delete(a))
            },
            close() {
                e || (t.disconnect(),
                i())
            }
        }
    }
    var w = "@monetize.software/sdk-extension"
      , f = "@monetize.software/sdk-extension/relay";
    var u = class {
        constructor(e) {
            this.factory = e,
            this.channel = null,
            this.channelDisposers = [],
            this.pending = new Map,
            this.listeners = new Map,
            this.destroyed = !1,
            this.nextId = 0,
            this.clientId = `c-${Math.random().toString(36).slice(2, 10)}`
        }
        ensureChannel() {
            if (this.destroyed)
                throw new Error("TransportClient destroyed");
            if (this.channel)
                return this.channel;
            let e = this.factory();
            this.channel = e;
            let n = e.onMessage(o => this.handleMessage(o))
              , s = e.onDisconnect( () => this.handleDisconnect());
            return this.channelDisposers = [n, s],
            this.request("handshake", {
                protocolVersion: l,
                clientId: this.clientId
            }).then(o => {
                o.protocolVersion !== l && console.warn(`[sdk-extension] protocol version mismatch: client=${l}, offscreen=${o.protocolVersion}. Update host's @monetize.software/sdk-extension.`)
            }
            ).catch( () => {}
            ),
            e
        }
        handleMessage(e) {
            if (M(e)) {
                if (e.type === "response") {
                    let n = this.pending.get(e.id);
                    if (!n)
                        return;
                    this.pending.delete(e.id),
                    n.signal?.removeEventListener("abort", n.abortListener),
                    e.ok ? n.resolve(e.result) : n.reject(p(e.error));
                    return
                }
                if (e.type === "event") {
                    let n = this.listeners.get(e.kind);
                    if (!n)
                        return;
                    for (let s of [...n])
                        try {
                            s(e.payload)
                        } catch (o) {
                            console.error("[sdk-extension] event handler threw", o)
                        }
                }
            }
        }
        handleDisconnect() {
            for (let n of this.channelDisposers)
                n();
            this.channelDisposers = [],
            this.channel = null;
            let e = Array.from(this.pending.values());
            this.pending.clear();
            for (let n of e)
                n.signal?.removeEventListener("abort", n.abortListener),
                n.reject(new m)
        }
        request(e, n, s={}) {
            if (this.destroyed)
                return Promise.reject(new Error("TransportClient destroyed"));
            if (s.signal?.aborted)
                return Promise.reject(new DOMException("Aborted","AbortError"));
            let o = this.ensureChannel()
              , i = `r${++this.nextId}`;
            return new Promise( (a, c) => {
                let r = {
                    resolve: a,
                    reject: c,
                    signal: s.signal
                };
                s.signal && (r.abortListener = () => {
                    if (this.pending.delete(i)) {
                        c(new DOMException("Aborted","AbortError"));
                        try {
                            o.send({
                                type: "cancel",
                                id: i
                            })
                        } catch {}
                    }
                }
                ,
                s.signal.addEventListener("abort", r.abortListener)),
                this.pending.set(i, r);
                let L = {
                    type: "request",
                    id: i,
                    kind: e,
                    params: n
                };
                try {
                    o.send(L)
                } catch (x) {
                    this.pending.delete(i),
                    s.signal?.removeEventListener("abort", r.abortListener),
                    c(x)
                }
            }
            )
        }
        on(e, n) {
            let s = this.listeners.get(e);
            s || (s = new Set,
            this.listeners.set(e, s));
            let o = n;
            return s.add(o),
            this.ensureChannel(),
            () => {
                s.delete(o)
            }
        }
        destroy() {
            if (this.destroyed)
                return;
            this.destroyed = !0;
            for (let n of this.channelDisposers)
                n();
            this.channelDisposers = [],
            this.listeners.clear();
            let e = Array.from(this.pending.values());
            this.pending.clear();
            for (let n of e)
                n.signal?.removeEventListener("abort", n.abortListener),
                n.reject(new Error("TransportClient destroyed"));
            this.channel?.close(),
            this.channel = null
        }
    }
      , m = class extends Error {
        constructor() {
            super("Transport channel disconnected mid-request"),
            this.code = "transport_disconnected",
            this.name = "TransportDisconnectedError"
        }
    }
    ;
    function M(t) {
        if (typeof t != "object" || t === null)
            return !1;
        let e = t.type;
        return e === "request" || e === "response" || e === "event"
    }
    var h = null;
    async function y(t) {
        return h || (h = D(t).finally( () => {
            h = null
        }
        ),
        h)
    }
    async function D(t) {
        if (!await b(t.url))
            try {
                await chrome.offscreen.createDocument({
                    url: t.url,
                    reasons: t.reasons,
                    justification: t.justification
                })
            } catch (e) {
                if (e instanceof Error && /single offscreen document/i.test(e.message))
                    return;
                throw e
            }
    }
    async function b(t) {
        return typeof chrome.runtime.getContexts == "function" ? (await chrome.runtime.getContexts({
            contextTypes: [chrome.runtime.ContextType.OFFSCREEN_DOCUMENT],
            documentUrls: [t]
        })).length > 0 : !1
    }
    var U = "/paywall/v3/auth/callback"
      , O = /^\/paywall\/[^/]+\/checkout\/(success|error)$/
      , R = 3800
      , T = 700;
    function k(t, e) {
        let n, s;
        try {
            n = new URL(t),
            s = new URL(e)
        } catch {
            return null
        }
        if (n.protocol !== "https:" && n.protocol !== "http:")
            return null;
        let o = n.hostname
          , i = s.hostname;
        return o === i || o === `edge.${i}` || `edge.${o}` === i ? n : null
    }
    function C(t, e) {
        let n = k(t, e);
        return !n || n.pathname !== U ? null : n.searchParams.get("code")
    }
    function v(t, e) {
        let n = k(t, e);
        return !!n && O.test(n.pathname)
    }
    async function q(t) {
        let e;
        try {
            let n = await chrome.windows.getLastFocused();
            if (n?.type === "normal" && n.id != null)
                e = n.id;
            else {
                let s = await chrome.windows.getAll({
                    windowTypes: ["normal"]
                });
                e = s[s.length - 1]?.id ?? void 0
            }
        } catch {}
        try {
            await chrome.tabs.create(e != null ? {
                url: t,
                windowId: e,
                active: !0
            } : {
                url: t,
                active: !0
            })
        } catch {}
    }
    function A(t) {
        if (typeof chrome > "u" || !chrome.tabs?.onUpdated)
            return;
        let e = new Set;
        chrome.tabs.onUpdated.addListener( (n, s) => {
            s.url && j(n, s.url, e, t)
        }
        )
    }
    async function P(t, e) {
        await new Promise(n => setTimeout(n, R));
        try {
            let n = await chrome.tabs.get(t)
              , s = typeof e.apiOrigin == "function" ? await e.apiOrigin() : e.apiOrigin;
            if (!n.url || !s || !v(n.url, s))
                return;
            await chrome.tabs.remove(t)
        } catch {}
    }
    async function j(t, e, n, s) {
        let o;
        try {
            o = typeof s.apiOrigin == "function" ? await s.apiOrigin() : s.apiOrigin
        } catch {
            return
        }
        if (!o)
            return;
        if (v(e, o)) {
            await P(t, s);
            return
        }
        let i = C(e, o);
        if (!i || n.has(i))
            return;
        n.add(i),
        n.size > 32 && n.clear();
        let a = !1;
        try {
            let r = typeof s.offscreenUrl == "function" ? await s.offscreenUrl() : s.offscreenUrl;
            if (a = await b(r),
            !a)
                return;
            await y({
                url: r,
                reasons: s.offscreenReasons,
                justification: s.offscreenJustification
            })
        } catch {
            return
        }
        await new Promise(r => setTimeout(r, T));
        let c = new u( () => {
            let r = chrome.runtime.connect({
                name: f
            });
            return r.onDisconnect.addListener( () => {
                chrome.runtime.lastError
            }
            ),
            g(r)
        }
        );
        try {
            let r = await c.request("auth.oauthAdopt", {
                code: i
            });
            if (!r.adopted)
                return;
            r.checkoutUrl && await q(r.checkoutUrl);
            try {
                await chrome.tabs.remove(t)
            } catch {}
        } catch {} finally {
            c.destroy()
        }
    }
    var S = [chrome.offscreen.Reason.LOCAL_STORAGE]
      , $ = "Persist auth session and bootstrap cache across all extension surfaces via localStorage, which is unavailable in service workers.";
    function I(t) {
        let e = t.offscreenReasons ?? S
          , n = t.offscreenJustification ?? $;
        t.apiOrigin && A({
            apiOrigin: t.apiOrigin,
            offscreenUrl: t.offscreenUrl,
            offscreenReasons: e,
            offscreenJustification: n
        }),
        chrome.runtime.onConnect.addListener(s => {
            s.name === w && _(s, t.offscreenUrl, e, n)
        }
        )
    }
    async function _(t, e, n, s) {
        let o = []
          , i = r => {
            o.push(r)
        }
        ;
        t.onMessage.addListener(i);
        let a = !1;
        t.onDisconnect.addListener( () => {
            a = !0
        }
        );
        try {
            let r = typeof e == "function" ? await e() : e;
            await y({
                url: r,
                reasons: n,
                justification: s
            })
        } catch (r) {
            console.error("[sdk-extension/sw] ensureOffscreen failed", r),
            t.disconnect();
            return
        }
        if (a)
            return;
        let c;
        try {
            c = chrome.runtime.connect({
                name: f
            })
        } catch (r) {
            console.error("[sdk-extension/sw] connect to offscreen failed", r),
            t.disconnect();
            return
        }
        t.onMessage.removeListener(i),
        t.onMessage.addListener(r => {
            try {
                c.postMessage(r)
            } catch {}
        }
        ),
        c.onMessage.addListener(r => {
            try {
                t.postMessage(r)
            } catch {}
        }
        ),
        t.onDisconnect.addListener( () => {
            try {
                c.disconnect()
            } catch {}
        }
        ),
        c.onDisconnect.addListener( () => {
            try {
                t.disconnect()
            } catch {}
        }
        );
        for (let r of o)
            try {
                c.postMessage(r)
            } catch {
                break
            }
    }
    function E(t) {
        if (typeof chrome > "u" || !chrome.runtime)
            throw new Error("@monetize.software/sdk-extension/sw requires chrome.runtime");
        I(t)
    }
    E({
        offscreenUrl: chrome.runtime.getURL("offscreen.html"),
        offscreenJustification: "Persist billing and account session cache across extension pages via localStorage, which is unavailable in service workers."
    });
}
)();
