( () => {
    var on = Object.defineProperty;
    var T = (t, e, a) => () => {
        if (a)
            throw a[0];
        try {
            return t && (e = t(t = 0)),
            e
        } catch (i) {
            throw a = [i],
            i
        }
    }
    ;
    var E = (t, e) => {
        for (var a in e)
            on(t, a, {
                get: e[a],
                enumerable: !0
            })
    }
    ;
    var Ea = {};
    E(Ea, {
        default: () => ar
    });
    var ar, La = T( () => {
        ar = {
            "anon.heading_default": "\u0645\u062A\u0627\u0628\u0639\u0629 \u0643\u0636\u064A\u0641",
            "anon.try_again": "\u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649",
            "auth.back_to_login": "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
            "auth.check_email_message": "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0631\u0645\u0632 \u0627\u0644\u062A\u0623\u0643\u064A\u062F.",
            "auth.check_email_title": "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
            "auth.confirm_email_title": "\u062A\u0623\u0643\u064A\u062F \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
            "auth.confirmation_code": "\u0631\u0645\u0632 \u0627\u0644\u062A\u0623\u0643\u064A\u062F",
            "auth.continue_with_apple": "\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0645\u0639 Apple",
            "auth.continue_with_facebook": "\u0645\u062A\u0627\u0628\u0639\u0629 \u0645\u0639 Facebook",
            "auth.continue_with_github": "\u0645\u062A\u0627\u0628\u0639\u0629 \u0645\u0639 GitHub",
            "auth.continue_with_google": "\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0645\u0639 Google",
            "auth.create_account": "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628",
            "auth.default_subtitle": "\u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0648\u0645\u0632\u0627\u0645\u0646\u0629 \u0628\u064A\u0627\u0646\u0627\u062A\u0643.",
            "auth.email": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
            "auth.email_already_registered": "\u0647\u0630\u0627 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0633\u062C\u0651\u0644 \u0628\u0627\u0644\u0641\u0639\u0644. \u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0623\u062F\u0646\u0627\u0647 \u0628\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0623\u0648 \u0628\u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0630\u064A \u0627\u0633\u062A\u062E\u062F\u0645\u062A\u0647 \u0644\u0644\u062A\u0633\u062C\u064A\u0644.",
            "auth.email_exists": "\u064A\u0648\u062C\u062F \u062D\u0633\u0627\u0628 \u0628\u0647\u0630\u0627 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0628\u0627\u0644\u0641\u0639\u0644.",
            "auth.email_not_confirmed": "\u064A\u0631\u062C\u0649 \u062A\u0623\u0643\u064A\u062F \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648\u0644\u0627\u064B.",
            "auth.forgot_password": "\u0647\u0644 \u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
            "auth.forgot_password_title": "\u0647\u0644 \u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
            "auth.forgot_subtitle": "\u0623\u062F\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0633\u0646\u0631\u0633\u0644 \u0644\u0643 \u0631\u0627\u0628\u0637 \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631.",
            "auth.generic_error": "\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627",
            "auth.have_account": "\u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628\u061F",
            "auth.hide_password": "\u0625\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
            "auth.identity_already_linked": "\u0647\u0630\u0627 \u0627\u0644\u062D\u0633\u0627\u0628 \u0645\u0633\u062C\u0651\u0644 \u0628\u0627\u0644\u0641\u0639\u0644. \u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0647 \u0623\u062F\u0646\u0627\u0647.",
            "auth.invalid_credentials": "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
            "auth.invalid_otp": "\u0627\u0644\u0631\u0645\u0632 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D \u0623\u0648 \u0645\u0646\u062A\u0647\u064A \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629.",
            "auth.last_used": "\u0622\u062E\u0631 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \xB7 {email}",
            "auth.last_used_no_email": "\u0622\u062E\u0631 \u0627\u0633\u062A\u062E\u062F\u0627\u0645",
            "auth.link_purchase_subheading": "\u0633\u0646\u0631\u0628\u0637 \u0627\u0644\u0634\u0631\u0627\u0621 \u0628\u062D\u0633\u0627\u0628\u0643 \u0644\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u0648\u0635\u0648\u0644.",
            "auth.log_in": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
            "auth.log_in_link": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
            "auth.login_continue_purchase": "\u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621",
            "auth.network_error": "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0634\u0628\u0643\u0629. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u062A\u0635\u0627\u0644\u0643 \u0648\u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.",
            "auth.no_account": "\u0644\u064A\u0633 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628\u061F",
            "auth.or": "\u0623\u0648",
            "auth.password": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
            "auth.passwords_mismatch": "\u0643\u0644\u0645\u062A\u0627 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u062A\u064A\u0646",
            "auth.rate_limited": "\u0637\u0644\u0628\u0627\u062A \u0643\u062B\u064A\u0631\u0629 \u062C\u062F\u064B\u0627. \u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0644\u0627\u062D\u0642\u064B\u0627.",
            "auth.repeat_password": "\u0643\u0631\u0651\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
            "auth.reset_link_valid": "\u0627\u0644\u0631\u0627\u0628\u0637 \u0635\u0627\u0644\u062D \u0644\u0645\u062F\u0629 \u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629.",
            "auth.reset_password_title": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
            "auth.reset_sent_message": "\u0625\u0630\u0627 \u0643\u0627\u0646 \u0647\u0630\u0627 \u0627\u0644\u0628\u0631\u064A\u062F \u0645\u0648\u062C\u0648\u062F\u064B\u0627\u060C \u0641\u0642\u062F \u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0645\u0632 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0639\u064A\u064A\u0646.",
            "auth.reset_sent_subtitle": "\u0623\u0631\u0633\u0644\u0646\u0627 \u0631\u0627\u0628\u0637 \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631. \u0627\u062A\u0628\u0639 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0641\u064A \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A.",
            "auth.restore_purchases_heading": "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A",
            "auth.restore_purchases_subheading": "\u064A\u064F\u0631\u062C\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0645\u0634\u062A\u0631\u064A\u0627\u062A\u0643.",
            "auth.send_reset": "\u0625\u0631\u0633\u0627\u0644 \u0628\u0631\u064A\u062F \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0639\u064A\u064A\u0646",
            "auth.service_unavailable": "\u0627\u0644\u062E\u062F\u0645\u0629 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629 \u0645\u0624\u0642\u062A\u064B\u0627. \u062D\u0627\u0648\u0644 \u0644\u0627\u062D\u0642\u064B\u0627.",
            "auth.show_password": "\u0625\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
            "auth.sign_out": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
            "auth.sign_up": "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628",
            "auth.sign_up_link": "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628",
            "auth.signed_in": "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
            "auth.signin_failed": "\u0641\u0634\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
            "auth.signup_failed": "\u0641\u0634\u0644 \u0627\u0644\u062A\u0633\u062C\u064A\u0644",
            "auth.verify": "\u062A\u0623\u0643\u064A\u062F",
            "auth.weak_password": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0636\u0639\u064A\u0641\u0629 \u062C\u062F\u064B\u0627.",
            "auth.welcome": "\u0645\u0631\u062D\u0628\u0627\u064B!",
            "auth.welcome_signup": "\u0645\u0631\u062D\u0628\u064B\u0627!",
            "countdown.d": "\u064A",
            "countdown.h": "\u0633",
            "countdown.m": "\u062F",
            "countdown.s": "\u062B",
            "cta.close": "\u0625\u063A\u0644\u0627\u0642",
            "cta.continue": "\u0645\u062A\u0627\u0628\u0639\u0629",
            "cta.get_lifetime_access": "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0648\u0635\u0648\u0644 \u0645\u062F\u0649 \u0627\u0644\u062D\u064A\u0627\u0629",
            "cta.get_plan_daily": "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062E\u0637\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629",
            "cta.get_plan_monthly": "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062E\u0637\u0629 \u0627\u0644\u0634\u0647\u0631\u064A\u0629",
            "cta.get_plan_weekly": "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062E\u0637\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629",
            "cta.get_plan_yearly": "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062E\u0637\u0629 \u0627\u0644\u0633\u0646\u0648\u064A\u0629",
            "cta.start_trial": "\u0627\u0628\u062F\u0623 \u062A\u062C\u0631\u0628\u0629 \u0645\u062C\u0627\u0646\u064A\u0629 \u0644\u0645\u062F\u0629 {days} \u064A\u0648\u0645",
            "modal.close_aria": "\u0625\u063A\u0644\u0627\u0642",
            "modal.continue": "\u0645\u062A\u0627\u0628\u0639\u0629",
            "modal.error_generic": "\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627",
            "modal.loading": "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0645\u064A\u0644\u2026",
            "modal.purchase_restored_subtitle": "\u0643\u0644 \u0634\u064A\u0621 \u062C\u0627\u0647\u0632 \u2014 \u0627\u0633\u062A\u0645\u062A\u0639!",
            "modal.purchase_restored_title": "\u0645\u0631\u062D\u0628\u064B\u0627 \u0628\u0639\u0648\u062F\u062A\u0643",
            "modal.purchase_success_subtitle": "\u0643\u0644 \u0634\u064A\u0621 \u062C\u0627\u0647\u0632 \u2014 \u0627\u0633\u062A\u0645\u062A\u0639!",
            "modal.purchase_success_title": "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u062F\u0641\u0639",
            "modal.verifying_subscription": "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0634\u062A\u0631\u0627\u0643\u0643\u2026",
            "nav.back": "\u2192 \u0631\u062C\u0648\u0639",
            "nav.back_aria": "\u0631\u062C\u0648\u0639",
            "offer.limited_time": "\u0639\u0631\u0636 \u0644\u0641\u062A\u0631\u0629 \u0645\u062D\u062F\u0648\u062F\u0629",
            "payment.awaiting_title": "\u0623\u0643\u0645\u0644 \u0627\u0644\u062F\u0641\u0639 \u0641\u064A \u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062A\u0628\u0648\u064A\u0628 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
            "payment.checking": "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642\u2026",
            "payment.ive_paid": "\u0644\u0642\u062F \u062F\u0641\u0639\u062A",
            "payment.open_checkout_again": "\u0627\u0641\u062A\u062D \u0627\u0644\u062F\u0641\u0639 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649",
            "payment.open_checkout_button": "\u0627\u0641\u062A\u062D \u0627\u0644\u062F\u0641\u0639",
            "pricing.free_trial_days": "\u062A\u062C\u0631\u0628\u0629 \u0645\u062C\u0627\u0646\u064A\u0629 \u0644\u0645\u062F\u0629 {days} \u064A\u0648\u0645\u064B\u0627",
            "pricing.included_per": "\u0645\u062A\u0636\u0645\u0646 \u0644\u0643\u0644 {interval}:",
            "pricing.interval.day": "\u064A\u0648\u0645",
            "pricing.interval.lifetime_short": "\u0645\u062F\u0649 \u0627\u0644\u062D\u064A\u0627\u0629",
            "pricing.interval.month": "\u0634\u0647\u0631",
            "pricing.interval.period": "\u0641\u062A\u0631\u0629",
            "pricing.interval.week": "\u0623\u0633\u0628\u0648\u0639",
            "pricing.interval.year": "\u0633\u0646\u0629",
            "pricing.money_back": "\u0636\u0645\u0627\u0646 \u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0627\u0644\u0623\u0645\u0648\u0627\u0644 \u0644\u0645\u062F\u0629 30 \u064A\u0648\u0645\u064B\u0627",
            "pricing.most_popular": "\u0627\u0644\u0623\u0643\u062B\u0631 \u0634\u0639\u0628\u064A\u0629",
            "pricing.no_prices": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0633\u0639\u0627\u0631 \u0645\u062A\u0627\u062D\u0629.",
            "pricing.plan_label.daily": "\u0627\u0644\u062E\u0637\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629",
            "pricing.plan_label.lifetime": "\u0645\u062F\u0649 \u0627\u0644\u062D\u064A\u0627\u0629",
            "pricing.plan_label.monthly": "\u062E\u0637\u0629 \u0634\u0647\u0631\u064A\u0629",
            "pricing.plan_label.weekly": "\u062E\u0637\u0629 \u0623\u0633\u0628\u0648\u0639\u064A\u0629",
            "pricing.plan_label.yearly": "\u062E\u0637\u0629 \u0633\u0646\u0648\u064A\u0629",
            "pricing.plans_aria": "\u0627\u0644\u062E\u0637\u0637",
            "session.contact_support": "\u0627\u062A\u0635\u0644 \u0628\u0627\u0644\u062F\u0639\u0645",
            "session.restore_purchases": "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A",
            "session.sign_out": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
            "session.signed_in_as_prefix": "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0627\u0633\u0645",
            "session.signing_out": "\u062C\u0627\u0631\u064D \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C\u2026",
            "support.attachments_label": "\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A",
            "support.close_button": "\u0625\u063A\u0644\u0627\u0642",
            "support.done_button": "\u062A\u0645",
            "support.email_placeholder": "\u0623\u062F\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
            "support.heading": "\u0627\u0644\u062F\u0639\u0645",
            "support.instruction": "\u064A\u064F\u0631\u062C\u0649 \u0645\u0644\u0621 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0623\u062F\u0646\u0627\u0647 \u0644\u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u0627\u0644\u062F\u0639\u0645.",
            "support.invalid_email": "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D",
            "support.message_length": "1-5000 \u062D\u0631\u0641\u0627\u064B",
            "support.message_placeholder": "\u0623\u062F\u062E\u0644 \u0631\u0633\u0627\u0644\u062A\u0643",
            "support.required": "\u0645\u0637\u0644\u0648\u0628",
            "support.send_another": "\u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u0622\u062E\u0631",
            "support.send_button": "\u0625\u0631\u0633\u0627\u0644",
            "support.sending": "\u062C\u0627\u0631\u064D \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026",
            "support.subject_length": "3-200 \u062D\u0631\u0641\u0627\u064B",
            "support.subject_placeholder": "\u0623\u062F\u062E\u0644 \u0627\u0644\u0645\u0648\u0636\u0648\u0639",
            "support.success_heading": "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628",
            "support.success_message_prefix": "\u0644\u0642\u062F \u062A\u0644\u0642\u064A\u0646\u0627 \u0631\u0633\u0627\u0644\u062A\u0643 \u0648\u0633\u0646\u0631\u062F \u0639\u0644\u0649"
        }
    }
    );
    var Oa = {};
    E(Oa, {
        default: () => ir
    });
    var ir, Ua = T( () => {
        ir = {
            "anon.heading_default": "Pokra\u010Dovat jako host",
            "anon.try_again": "Zkusit znovu",
            "auth.back_to_login": "Zp\u011Bt na p\u0159ihl\xE1\u0161en\xED",
            "auth.check_email_message": "Zkontrolujte e-mail \u2014 poslali jsme potvrzovac\xED k\xF3d.",
            "auth.check_email_title": "Zkontrolujte e-mail",
            "auth.confirm_email_title": "Potvr\u010Fte e-mail",
            "auth.confirmation_code": "Potvrzovac\xED k\xF3d",
            "auth.continue_with_apple": "Pokra\u010Dovat p\u0159es Apple",
            "auth.continue_with_facebook": "Pokra\u010Dovat s Facebookem",
            "auth.continue_with_github": "Pokra\u010Dovat s GitHub",
            "auth.continue_with_google": "Pokra\u010Dovat p\u0159es Google",
            "auth.create_account": "Vytvo\u0159it \xFA\u010Det",
            "auth.default_subtitle": "P\u0159ihlaste se pro p\u0159\xEDstup ke v\u0161em funkc\xEDm a synchronizaci dat.",
            "auth.email": "E-mailov\xE1 adresa",
            "auth.email_already_registered": "Tento e-mail je ji\u017E zaregistrov\xE1n. P\u0159ihlaste se n\xED\u017Ee heslem nebo \xFA\u010Dtem, kter\xFD jste pou\u017Eili p\u0159i registraci.",
            "auth.email_exists": "\xDA\u010Det s t\xEDmto e-mailem ji\u017E existuje.",
            "auth.email_not_confirmed": "Nejprve potvr\u010Fte sv\u016Fj e-mail.",
            "auth.forgot_password": "Zapomn\u011Bli jste heslo?",
            "auth.forgot_password_title": "Zapomn\u011Bli jste heslo?",
            "auth.forgot_subtitle": "Zadejte sv\u016Fj e-mail a za\u0161leme v\xE1m odkaz pro obnoven\xED hesla.",
            "auth.generic_error": "N\u011Bco se pokazilo",
            "auth.have_account": "M\xE1te \xFA\u010Det?",
            "auth.hide_password": "Skr\xFDt heslo",
            "auth.identity_already_linked": "Tento \xFA\u010Det je ji\u017E zaregistrov\xE1n. P\u0159ihlaste se j\xEDm n\xED\u017Ee.",
            "auth.invalid_credentials": "Nespr\xE1vn\xFD e-mail nebo heslo",
            "auth.invalid_otp": "K\xF3d je neplatn\xFD nebo vypr\u0161el.",
            "auth.last_used": "Naposledy \xB7 {email}",
            "auth.last_used_no_email": "Naposledy",
            "auth.link_purchase_subheading": "Propoj\xEDme n\xE1kup s va\u0161\xEDm \xFA\u010Dtem, aby p\u0159\xEDstup z\u016Fstal zachov\xE1n.",
            "auth.log_in": "P\u0159ihl\xE1sit se",
            "auth.log_in_link": "P\u0159ihl\xE1sit se",
            "auth.login_continue_purchase": "P\u0159ihlaste se pro pokra\u010Dov\xE1n\xED v n\xE1kupu",
            "auth.network_error": "Chyba s\xEDt\u011B. Zkontrolujte p\u0159ipojen\xED a zkuste znovu.",
            "auth.no_account": "Nem\xE1te \xFA\u010Det?",
            "auth.or": "nebo",
            "auth.password": "Heslo",
            "auth.passwords_mismatch": "Hesla se neshoduj\xED",
            "auth.rate_limited": "P\u0159\xEDli\u0161 mnoho po\u017Eadavk\u016F. Zkuste to pozd\u011Bji.",
            "auth.repeat_password": "Zopakujte heslo",
            "auth.reset_link_valid": "Odkaz je platn\xFD 1 hodinu.",
            "auth.reset_password_title": "Resetovat heslo",
            "auth.reset_sent_message": "Pokud tento e-mail existuje, byl odesl\xE1n k\xF3d pro reset.",
            "auth.reset_sent_subtitle": "Poslali jsme odkaz pro obnoven\xED hesla. Postupujte podle pokyn\u016F v e-mailu.",
            "auth.restore_purchases_heading": "Obnovit n\xE1kupy",
            "auth.restore_purchases_subheading": "P\u0159ihlaste se pro obnoven\xED sv\xFDch n\xE1kup\u016F.",
            "auth.send_reset": "Odeslat obnovovac\xED e-mail",
            "auth.service_unavailable": "Slu\u017Eba je do\u010Dasn\u011B nedostupn\xE1. Zkuste to pozd\u011Bji.",
            "auth.show_password": "Zobrazit heslo",
            "auth.sign_out": "Odhl\xE1sit se",
            "auth.sign_up": "Zaregistrovat se",
            "auth.sign_up_link": "Zaregistrovat se",
            "auth.signed_in": "P\u0159ihl\xE1\u0161en",
            "auth.signin_failed": "P\u0159ihl\xE1\u0161en\xED selhalo",
            "auth.signup_failed": "Registrace selhala",
            "auth.verify": "Ov\u011B\u0159it",
            "auth.weak_password": "Heslo je p\u0159\xEDli\u0161 slab\xE9.",
            "auth.welcome": "V\xEDtejte!",
            "auth.welcome_signup": "V\xEDtejte!",
            "cta.close": "Zav\u0159\xEDt",
            "cta.continue": "Pokra\u010Dovat",
            "cta.get_lifetime_access": "Z\xEDskat do\u017Eivotn\xED p\u0159\xEDstup",
            "cta.get_plan_daily": "Z\xEDskat denn\xED pl\xE1n",
            "cta.get_plan_monthly": "Z\xEDskat m\u011Bs\xED\u010Dn\xED pl\xE1n",
            "cta.get_plan_weekly": "Z\xEDskat t\xFDdenn\xED pl\xE1n",
            "cta.get_plan_yearly": "Z\xEDskat ro\u010Dn\xED pl\xE1n",
            "cta.start_trial": "Za\u010D\xEDt {days}denn\xED bezplatnou zku\u0161ebn\xED dobu",
            "modal.close_aria": "Zav\u0159\xEDt",
            "modal.continue": "Pokra\u010Dovat",
            "modal.error_generic": "N\u011Bco se pokazilo",
            "modal.loading": "Na\u010D\xEDt\xE1n\xED\u2026",
            "modal.purchase_restored_subtitle": "V\u0161e je p\u0159ipraveno \u2014 u\u017E\xEDvejte!",
            "modal.purchase_restored_title": "V\xEDtejte zp\u011Bt",
            "modal.purchase_success_subtitle": "V\u0161e je p\u0159ipraveno \u2014 u\u017E\xEDvejte!",
            "modal.purchase_success_title": "Platba p\u0159ijata",
            "modal.verifying_subscription": "Ov\u011B\u0159ov\xE1n\xED p\u0159edplatn\xE9ho\u2026",
            "nav.back": "\u2190 Zp\u011Bt",
            "nav.back_aria": "Zp\u011Bt",
            "offer.limited_time": "\u010Casov\u011B omezen\xE1 nab\xEDdka",
            "payment.awaiting_title": "Dokon\u010Dete platbu v nov\xE9 kart\u011B",
            "payment.checking": "Ov\u011B\u0159ov\xE1n\xED\u2026",
            "payment.ive_paid": "Zaplatil jsem",
            "payment.open_checkout_again": "Otev\u0159\xEDt platbu znovu",
            "payment.open_checkout_button": "Otev\u0159\xEDt platbu",
            "pricing.free_trial_days": "{days}denn\xED bezplatn\xE1 zku\u0161ebn\xED verze",
            "pricing.included_per": "Zahrnuto za {interval}:",
            "pricing.interval.day": "den",
            "pricing.interval.lifetime_short": "nav\u017Edy",
            "pricing.interval.month": "m\u011Bs\xEDc",
            "pricing.interval.period": "obdob\xED",
            "pricing.interval.week": "t\xFDden",
            "pricing.interval.year": "rok",
            "pricing.money_back": "30denn\xED z\xE1ruka vr\xE1cen\xED pen\u011Bz",
            "pricing.most_popular": "Nejobl\xEDben\u011Bj\u0161\xED",
            "pricing.no_prices": "\u017D\xE1dn\xE9 ceny nejsou k dispozici.",
            "pricing.plan_label.daily": "DENN\xCD PL\xC1N",
            "pricing.plan_label.lifetime": "do\u017Eivotn\xED",
            "pricing.plan_label.monthly": "m\u011Bs\xED\u010Dn\xED pl\xE1n",
            "pricing.plan_label.weekly": "t\xFDdenn\xED pl\xE1n",
            "pricing.plan_label.yearly": "ro\u010Dn\xED pl\xE1n",
            "pricing.plans_aria": "Pl\xE1ny",
            "session.contact_support": "Kontaktovat podporu",
            "session.restore_purchases": "Obnovit n\xE1kupy",
            "session.sign_out": "Odhl\xE1sit se",
            "session.signed_in_as_prefix": "P\u0159ihl\xE1\u0161en jako",
            "session.signing_out": "Odhla\u0161ov\xE1n\xED\u2026",
            "support.attachments_label": "P\u0159\xEDlohy",
            "support.close_button": "Zav\u0159\xEDt",
            "support.done_button": "Hotovo",
            "support.email_placeholder": "Zadejte sv\u016Fj e-mail",
            "support.heading": "Podpora",
            "support.instruction": "Vypl\u0148te pros\xEDm formul\xE1\u0159 n\xED\u017Ee pro odesl\xE1n\xED \u017E\xE1dosti o podporu.",
            "support.invalid_email": "Neplatn\xFD e-mail",
            "support.message_length": "1\u20135000 znak\u016F",
            "support.message_placeholder": "Zadejte zpr\xE1vu",
            "support.required": "Povinn\xE9",
            "support.send_another": "Odeslat dal\u0161\xED \u017E\xE1dost",
            "support.send_button": "Odeslat",
            "support.sending": "Odes\xEDl\xE1n\xED\u2026",
            "support.subject_length": "3\u2013200 znak\u016F",
            "support.subject_placeholder": "Zadejte p\u0159edm\u011Bt",
            "support.success_heading": "\u017D\xE1dost odesl\xE1na",
            "support.success_message_prefix": "Obdr\u017Eeli jsme va\u0161i zpr\xE1vu a odpov\xEDme na"
        }
    }
    );
    var Ma = {};
    E(Ma, {
        default: () => nr
    });
    var nr, Na = T( () => {
        nr = {
            "anon.heading_default": "Forts\xE6t som g\xE6st",
            "anon.try_again": "Pr\xF8v igen",
            "auth.back_to_login": "Tilbage til login",
            "auth.check_email_message": "Tjek din e-mail \u2014 vi har sendt en bekr\xE6ftelseskode.",
            "auth.check_email_title": "Tjek din e-mail",
            "auth.confirm_email_title": "Bekr\xE6ft din e-mail",
            "auth.confirmation_code": "Bekr\xE6ftelseskode",
            "auth.continue_with_apple": "Forts\xE6t med Apple",
            "auth.continue_with_facebook": "Forts\xE6t med Facebook",
            "auth.continue_with_github": "Forts\xE6t med GitHub",
            "auth.continue_with_google": "Forts\xE6t med Google",
            "auth.create_account": "Opret konto",
            "auth.default_subtitle": "Log ind for at f\xE5 adgang til alle funktioner og synkronisere dine data.",
            "auth.email": "E-mailadresse",
            "auth.email_already_registered": "Denne e-mail er allerede registreret. Log ind nedenfor med din adgangskode eller den konto, du oprettede dig med.",
            "auth.email_exists": "En konto med denne e-mail findes allerede.",
            "auth.email_not_confirmed": "Bekr\xE6ft venligst din e-mail f\xF8rst.",
            "auth.forgot_password": "Glemt adgangskode?",
            "auth.forgot_password_title": "Glemt adgangskode?",
            "auth.forgot_subtitle": "Indtast din e-mail, s\xE5 sender vi dig et link til nulstilling af adgangskode.",
            "auth.generic_error": "Noget gik galt",
            "auth.have_account": "Har du allerede en konto?",
            "auth.hide_password": "Skjul adgangskode",
            "auth.identity_already_linked": "Denne konto er allerede registreret. Log ind med den nedenfor.",
            "auth.invalid_credentials": "Forkert e-mail eller adgangskode",
            "auth.invalid_otp": "Koden er ugyldig eller udl\xF8bet.",
            "auth.last_used": "Sidst brugt \xB7 {email}",
            "auth.last_used_no_email": "Sidst brugt",
            "auth.link_purchase_subheading": "Vi knytter k\xF8bet til din konto, s\xE5 adgangen bevares.",
            "auth.log_in": "Log Ind",
            "auth.log_in_link": "Log Ind",
            "auth.login_continue_purchase": "Log ind for at forts\xE6tte dit k\xF8b",
            "auth.network_error": "Netv\xE6rksfejl. Tjek forbindelsen, og pr\xF8v igen.",
            "auth.no_account": "Har du ingen konto?",
            "auth.or": "eller",
            "auth.password": "Adgangskode",
            "auth.passwords_mismatch": "Adgangskoder matcher ikke",
            "auth.rate_limited": "For mange anmodninger. Pr\xF8v igen senere.",
            "auth.repeat_password": "Gentag adgangskode",
            "auth.reset_link_valid": "Linket er gyldigt i 1 time.",
            "auth.reset_password_title": "Nulstil adgangskode",
            "auth.reset_sent_message": "Hvis den e-mail findes, er der sendt en nulstillingskode.",
            "auth.reset_sent_subtitle": "Vi har sendt et link til at nulstille adgangskoden. F\xF8lg instruktionerne i e-mailen.",
            "auth.restore_purchases_heading": "Gendan K\xF8b",
            "auth.restore_purchases_subheading": "Log ind for at gendanne dine k\xF8b.",
            "auth.send_reset": "Send Nulstillingsmail",
            "auth.service_unavailable": "Tjenesten er midlertidigt utilg\xE6ngelig. Pr\xF8v igen senere.",
            "auth.show_password": "Vis adgangskode",
            "auth.sign_out": "Log ud",
            "auth.sign_up": "Tilmeld",
            "auth.sign_up_link": "Tilmeld",
            "auth.signed_in": "Logget ind",
            "auth.signin_failed": "Login mislykkedes",
            "auth.signup_failed": "Registrering mislykkedes",
            "auth.verify": "Bekr\xE6ft",
            "auth.weak_password": "Adgangskoden er for svag.",
            "auth.welcome": "Velkommen!",
            "auth.welcome_signup": "Velkommen!",
            "cta.close": "Luk",
            "cta.continue": "Forts\xE6t",
            "cta.get_lifetime_access": "F\xE5 livstidsadgang",
            "cta.get_plan_daily": "F\xE5 daglig plan",
            "cta.get_plan_monthly": "F\xE5 m\xE5nedlig plan",
            "cta.get_plan_weekly": "F\xE5 ugentlig plan",
            "cta.get_plan_yearly": "F\xE5 \xE5rlig plan",
            "cta.start_trial": "Start {days} Dages Gratis Pr\xF8veperiode",
            "modal.close_aria": "Luk",
            "modal.continue": "Forts\xE6t",
            "modal.error_generic": "Noget gik galt",
            "modal.loading": "Indl\xE6ser\u2026",
            "modal.purchase_restored_subtitle": "Alt er klar \u2014 god forn\xF8jelse!",
            "modal.purchase_restored_title": "Velkommen tilbage",
            "modal.purchase_success_subtitle": "Alt er klar \u2014 god forn\xF8jelse!",
            "modal.purchase_success_title": "Betaling modtaget",
            "modal.verifying_subscription": "Kontrollerer abonnement\u2026",
            "nav.back": "\u2190 Tilbage",
            "nav.back_aria": "Tilbage",
            "offer.limited_time": "Tidsbegr\xE6nset tilbud",
            "payment.awaiting_title": "Afslut betalingen i den nye fane",
            "payment.checking": "Kontrollerer\u2026",
            "payment.ive_paid": "Jeg har betalt",
            "payment.open_checkout_again": "\xC5bn betaling igen",
            "payment.open_checkout_button": "\xC5bn betaling",
            "pricing.free_trial_days": "{days}-dages gratis pr\xF8veperiode",
            "pricing.included_per": "Inkluderet pr. {interval}:",
            "pricing.interval.day": "dag",
            "pricing.interval.lifetime_short": "livstid",
            "pricing.interval.month": "m\xE5ned",
            "pricing.interval.period": "periode",
            "pricing.interval.week": "uge",
            "pricing.interval.year": "\xE5r",
            "pricing.money_back": "30 dages pengene-tilbage-garanti",
            "pricing.most_popular": "Mest popul\xE6r",
            "pricing.no_prices": "Ingen priser tilg\xE6ngelige.",
            "pricing.plan_label.daily": "DAGLIG PLAN",
            "pricing.plan_label.lifetime": "livstid",
            "pricing.plan_label.monthly": "m\xE5nedlig plan",
            "pricing.plan_label.weekly": "ugentlig plan",
            "pricing.plan_label.yearly": "\xE5rlig plan",
            "pricing.plans_aria": "Planer",
            "session.contact_support": "Kontakt support",
            "session.restore_purchases": "Gendan k\xF8b",
            "session.sign_out": "Log ud",
            "session.signed_in_as_prefix": "Logget ind som",
            "session.signing_out": "Logger ud\u2026",
            "support.attachments_label": "Vedh\xE6ftninger",
            "support.close_button": "Luk",
            "support.done_button": "F\xE6rdig",
            "support.email_placeholder": "Indtast din e-mail",
            "support.heading": "Support",
            "support.instruction": "Udfyld venligst formularen nedenfor for at indsende din supportanmodning.",
            "support.invalid_email": "Ugyldig e-mail",
            "support.message_length": "1\u20135000 tegn",
            "support.message_placeholder": "Indtast din besked",
            "support.required": "P\xE5kr\xE6vet",
            "support.send_another": "Send endnu en anmodning",
            "support.send_button": "Send",
            "support.sending": "Sender\u2026",
            "support.subject_length": "3\u2013200 tegn",
            "support.subject_placeholder": "Indtast dit emne",
            "support.success_heading": "Anmodning sendt",
            "support.success_message_prefix": "Vi har modtaget din besked og vil svare p\xE5"
        }
    }
    );
    var qa = {};
    E(qa, {
        default: () => rr
    });
    var rr, Da = T( () => {
        rr = {
            "anon.description_default": "Gast-Sitzung wird eingerichtet\u2026",
            "anon.heading_default": "Als Gast fortfahren",
            "anon.try_again": "Erneut versuchen",
            "auth.back_to_login": "Zur\xFCck zum Login",
            "auth.check_email_message": "Sehen Sie in Ihren E-Mails nach einem Best\xE4tigungscode.",
            "auth.check_email_title": "Pr\xFCfen Sie Ihre E-Mails",
            "auth.confirm_email_subtitle": "Geben Sie den Code ein, den wir an Ihre E-Mail gesendet haben, um die Registrierung abzuschlie\xDFen.",
            "auth.confirm_email_title": "Best\xE4tigen Sie Ihre E-Mail",
            "auth.confirmation_code": "Best\xE4tigungscode",
            "auth.continue_with_apple": "Weiter mit Apple",
            "auth.continue_with_facebook": "Mit Facebook fortfahren",
            "auth.continue_with_github": "Mit GitHub fortfahren",
            "auth.continue_with_google": "Weiter mit Google",
            "auth.create_account": "Konto erstellen",
            "auth.default_subtitle": "Bitte melden Sie sich an, um alle Funktionen zu nutzen und Ihre Daten zu synchronisieren.",
            "auth.email": "E-Mail-Adresse",
            "auth.email_already_registered": "Diese E-Mail ist bereits registriert. Melden Sie sich unten mit Ihrem Passwort oder dem Konto an, mit dem Sie sich registriert haben.",
            "auth.email_exists": "Ein Konto mit dieser E-Mail existiert bereits.",
            "auth.email_not_confirmed": "Bitte best\xE4tigen Sie zuerst Ihre E-Mail.",
            "auth.forgot_password": "Passwort vergessen?",
            "auth.forgot_password_title": "Passwort vergessen?",
            "auth.forgot_subtitle": "Geben Sie Ihre E-Mail ein, wir senden Ihnen einen Link zum Zur\xFCcksetzen des Passworts.",
            "auth.generic_error": "Etwas ist schiefgelaufen",
            "auth.have_account": "Haben Sie ein Konto?",
            "auth.hide_password": "Passwort verbergen",
            "auth.identity_already_linked": "Dieses Konto ist bereits registriert. Melden Sie sich unten damit an.",
            "auth.invalid_credentials": "Ung\xFCltige E-Mail oder Passwort",
            "auth.invalid_otp": "Der Code ist ung\xFCltig oder abgelaufen.",
            "auth.last_used": "Zuletzt genutzt \xB7 {email}",
            "auth.last_used_no_email": "Zuletzt genutzt",
            "auth.link_purchase_subheading": "Wir verkn\xFCpfen den Kauf mit Ihrem Konto, damit der Zugriff erhalten bleibt.",
            "auth.log_in": "Anmelden",
            "auth.log_in_link": "Anmelden",
            "auth.login_continue_purchase": "Einloggen, um den Kauf fortzusetzen",
            "auth.network_error": "Netzwerkfehler. Bitte pr\xFCfen Sie Ihre Verbindung und versuchen Sie es erneut.",
            "auth.new_password_optional": "Neues Passwort (optional \u2014 nur f\xFCr Passwort-Reset)",
            "auth.no_account": "Kein Konto?",
            "auth.or": "oder",
            "auth.password": "Passwort",
            "auth.passwords_mismatch": "Passw\xF6rter stimmen nicht \xFCberein",
            "auth.rate_limited": "Zu viele Anfragen. Bitte versuchen Sie es sp\xE4ter erneut.",
            "auth.repeat_password": "Passwort wiederholen",
            "auth.reset_link_valid": "Der Link ist 1 Stunde g\xFCltig.",
            "auth.reset_password_subtitle": "Geben Sie den Code aus Ihrer E-Mail und ein neues Passwort ein.",
            "auth.reset_password_title": "Passwort zur\xFCcksetzen",
            "auth.reset_sent_message": "Wenn diese E-Mail existiert, wurde ein Reset-Code gesendet.",
            "auth.reset_sent_subtitle": "Wir haben einen Link zum Zur\xFCcksetzen des Passworts gesendet. Folgen Sie den Anweisungen in der E-Mail.",
            "auth.restore_purchases_heading": "K\xE4ufe wiederherstellen",
            "auth.restore_purchases_subheading": "Bitte melden Sie sich an, um Ihre K\xE4ufe wiederherzustellen.",
            "auth.send_reset": "Zur\xFCcksetzungs-E-Mail senden",
            "auth.service_unavailable": "Dienst vor\xFCbergehend nicht verf\xFCgbar. Bitte sp\xE4ter erneut versuchen.",
            "auth.show_password": "Passwort anzeigen",
            "auth.sign_out": "Abmelden",
            "auth.sign_up": "Registrieren",
            "auth.sign_up_link": "Registrieren",
            "auth.signed_in": "Angemeldet",
            "auth.signin_failed": "Anmeldung fehlgeschlagen",
            "auth.signup_failed": "Registrierung fehlgeschlagen",
            "auth.verify": "Best\xE4tigen",
            "auth.weak_password": "Das Passwort ist zu schwach.",
            "auth.welcome": "Willkommen!",
            "auth.welcome_signup": "Willkommen!",
            "cta.close": "Schlie\xDFen",
            "cta.continue": "Weiter",
            "cta.get_lifetime_access": "Lebenslangen Zugang erhalten",
            "cta.get_plan_daily": "Tagesplan erhalten",
            "cta.get_plan_generic": "{interval} Plan erhalten",
            "cta.get_plan_monthly": "Monatsplan erhalten",
            "cta.get_plan_weekly": "Wochenplan erhalten",
            "cta.get_plan_yearly": "Jahresplan erhalten",
            "cta.start_trial": "{days}-t\xE4gige kostenlose Testversion starten",
            "modal.close_aria": "Schlie\xDFen",
            "modal.continue": "Weiter",
            "modal.error_generic": "Etwas ist schiefgelaufen",
            "modal.loading": "Wird geladen\u2026",
            "modal.purchase_restored_subtitle": "Alles bereit \u2014 viel Spa\xDF!",
            "modal.purchase_restored_title": "Willkommen zur\xFCck",
            "modal.purchase_success_subtitle": "Alles bereit \u2014 viel Spa\xDF!",
            "modal.purchase_success_title": "Zahlung erhalten",
            "modal.verifying_subscription": "Abonnement wird gepr\xFCft\u2026",
            "nav.back": "\u2190 Zur\xFCck",
            "nav.back_aria": "Zur\xFCck",
            "offer.limited_time": "Zeitlich begrenztes Angebot",
            "payment.awaiting_subtitle": "Wir erkennen Ihre Zahlung automatisch \u2014 oder klicken Sie unten, sobald Sie fertig sind.",
            "payment.awaiting_title": "Zahlung im neuen Tab abschlie\xDFen",
            "payment.checking": "Wird gepr\xFCft\u2026",
            "payment.ive_paid": "Ich habe bezahlt",
            "payment.open_checkout_again": "Checkout erneut \xF6ffnen",
            "payment.open_checkout_button": "Checkout \xF6ffnen",
            "payment.popup_blocked_message": "Ihr Browser hat den Checkout-Tab blockiert. Klicken Sie unten, um ihn zu \xF6ffnen.",
            "payment.popup_blocked_title": "Pop-ups erlauben, um fortzufahren",
            "payment.popup_help_text": "Hat sich das Checkout-Fenster nicht ge\xF6ffnet oder wurde es blockiert? Klicken Sie hier, um es erneut zu \xF6ffnen.",
            "payment.still_processing": "Die Zahlung wird noch verarbeitet. Bitte versuchen Sie es gleich erneut.",
            "payment.tab_closed_retry": "Tab geschlossen? Erneut versuchen",
            "pricing.free_trial_days": "{days}-t\xE4gige kostenlose Testversion",
            "pricing.included_per": "Enthalten pro {interval}:",
            "pricing.interval.day": "Tag",
            "pricing.interval.lifetime_short": "lebenslang",
            "pricing.interval.month": "Monat",
            "pricing.interval.period": "Zeitraum",
            "pricing.interval.week": "Woche",
            "pricing.interval.year": "Jahr",
            "pricing.money_back": "30-Tage-Geld-zur\xFCck-Garantie",
            "pricing.most_popular": "Beliebt",
            "pricing.no_prices": "Keine Preise verf\xFCgbar.",
            "pricing.plan_label.daily": "T\xC4GLICHER PLAN",
            "pricing.plan_label.lifetime": "lebenslang",
            "pricing.plan_label.monthly": "Monatstarif",
            "pricing.plan_label.weekly": "Wochentarif",
            "pricing.plan_label.yearly": "Jahrestarif",
            "pricing.plans_aria": "Pl\xE4ne",
            "session.contact_support": "Support kontaktieren",
            "session.restore_purchases": "K\xE4ufe wiederherstellen",
            "session.sign_out": "Abmelden",
            "session.signed_in_as_prefix": "Angemeldet als",
            "session.signing_out": "Abmelden\u2026",
            "support.attachments_aria": "Anh\xE4nge hochladen",
            "support.attachments_label": "Anh\xE4nge",
            "support.close_button": "Schlie\xDFen",
            "support.done_button": "Fertig",
            "support.dropzone_text": "Bilder hier ablegen oder zum Ausw\xE4hlen klicken",
            "support.email_placeholder": "E-Mail eingeben",
            "support.file_requirements": "JPEG/PNG/WebP, bis zu {max} Dateien, \u2264 {size} MB pro Datei",
            "support.heading": "Support",
            "support.instruction": "Bitte f\xFCllen Sie das Formular aus, um eine Support-Anfrage zu senden.",
            "support.invalid_email": "Ung\xFCltige E-Mail",
            "support.invalid_file": "Nur JPEG/PNG/WebP, \u2264 {size} MB pro Datei",
            "support.message_length": "1\u20135000 Zeichen",
            "support.message_placeholder": "Nachricht eingeben",
            "support.remove_file_aria": "{filename} entfernen",
            "support.required": "Pflichtfeld",
            "support.send_another": "Weitere Anfrage senden",
            "support.send_button": "Senden",
            "support.sending": "Senden\u2026",
            "support.sending_as": "Senden als",
            "support.subject_length": "3\u2013200 Zeichen",
            "support.subject_placeholder": "Betreff eingeben",
            "support.success_heading": "Anfrage gesendet",
            "support.success_message_prefix": "Wir haben Ihre Nachricht erhalten und antworten an",
            "support.too_many_files": "Bis zu {max} Dateien"
        }
    }
    );
    var Ga = {};
    E(Ga, {
        default: () => sr
    });
    var sr, Fa = T( () => {
        sr = {
            "anon.heading_default": "\u03A3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03C9\u03C2 \u03B5\u03C0\u03B9\u03C3\u03BA\u03AD\u03C0\u03C4\u03B7\u03C2",
            "anon.try_again": "\u0394\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC",
            "auth.back_to_login": "\u03A0\u03AF\u03C3\u03C9 \u03C3\u03C4\u03B7 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7",
            "auth.check_email_message": "\u0395\u03BB\u03AD\u03B3\u03BE\u03C4\u03B5 \u03C4\u03BF email \u03C3\u03B1\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC \u03B5\u03C0\u03B9\u03B2\u03B5\u03B2\u03B1\u03AF\u03C9\u03C3\u03B7\u03C2.",
            "auth.check_email_title": "\u0395\u03BB\u03AD\u03B3\u03BE\u03C4\u03B5 \u03C4\u03BF email \u03C3\u03B1\u03C2",
            "auth.confirm_email_title": "\u0395\u03C0\u03B9\u03B2\u03B5\u03B2\u03B1\u03B9\u03CE\u03C3\u03C4\u03B5 \u03C4\u03BF email \u03C3\u03B1\u03C2",
            "auth.confirmation_code": "\u039A\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03B5\u03C0\u03B9\u03B2\u03B5\u03B2\u03B1\u03AF\u03C9\u03C3\u03B7\u03C2",
            "auth.continue_with_apple": "\u03A3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03BC\u03B5 Apple",
            "auth.continue_with_facebook": "\u03A3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03BC\u03B5 Facebook",
            "auth.continue_with_github": "\u03A3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03BC\u03B5 GitHub",
            "auth.continue_with_google": "\u03A3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03BC\u03B5 Google",
            "auth.create_account": "\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD",
            "auth.default_subtitle": "\u03A3\u03C5\u03BD\u03B4\u03B5\u03B8\u03B5\u03AF\u03C4\u03B5 \u03B3\u03B9\u03B1 \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03B5 \u03CC\u03BB\u03B5\u03C2 \u03C4\u03B9\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B5\u03C2 \u03BA\u03B1\u03B9 \u03C3\u03C5\u03B3\u03C7\u03C1\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC \u03C4\u03C9\u03BD \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u03C3\u03B1\u03C2.",
            "auth.email": "\u0394\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email",
            "auth.email_already_registered": "\u0391\u03C5\u03C4\u03CC \u03C4\u03BF email \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AE\u03B4\u03B7 \u03B5\u03B3\u03B3\u03B5\u03B3\u03C1\u03B1\u03BC\u03BC\u03AD\u03BD\u03BF. \u03A3\u03C5\u03BD\u03B4\u03B5\u03B8\u03B5\u03AF\u03C4\u03B5 \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9 \u03BC\u03B5 \u03C4\u03BF\u03BD \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC \u03C3\u03B1\u03C2 \u03AE \u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC \u03BC\u03B5 \u03C4\u03BF\u03BD \u03BF\u03C0\u03BF\u03AF\u03BF \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE\u03BA\u03B1\u03C4\u03B5.",
            "auth.email_exists": "\u03A5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03AE\u03B4\u03B7 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC\u03C2 \u03BC\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF email.",
            "auth.email_not_confirmed": "\u0395\u03C0\u03B9\u03B2\u03B5\u03B2\u03B1\u03B9\u03CE\u03C3\u03C4\u03B5 \u03C0\u03C1\u03CE\u03C4\u03B1 \u03C4\u03BF email \u03C3\u03B1\u03C2.",
            "auth.forgot_password": "\u039E\u03B5\u03C7\u03AC\u03C3\u03B1\u03C4\u03B5 \u03C4\u03BF\u03BD \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC;",
            "auth.forgot_password_title": "\u039E\u03B5\u03C7\u03AC\u03C3\u03B1\u03C4\u03B5 \u03C4\u03BF\u03BD \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC;",
            "auth.forgot_subtitle": "\u0395\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF email \u03C3\u03B1\u03C2 \u03BA\u03B1\u03B9 \u03B8\u03B1 \u03C3\u03B1\u03C2 \u03C3\u03C4\u03B5\u03AF\u03BB\u03BF\u03C5\u03BC\u03B5 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD.",
            "auth.generic_error": "\u039A\u03AC\u03C4\u03B9 \u03C0\u03AE\u03B3\u03B5 \u03C3\u03C4\u03C1\u03B1\u03B2\u03AC",
            "auth.have_account": "\u0388\u03C7\u03B5\u03C4\u03B5 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC;",
            "auth.hide_password": "\u0391\u03C0\u03CC\u03BA\u03C1\u03C5\u03C8\u03B7 \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD",
            "auth.identity_already_linked": "\u0391\u03C5\u03C4\u03CC\u03C2 \u03BF \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AE\u03B4\u03B7 \u03B5\u03B3\u03B3\u03B5\u03B3\u03C1\u03B1\u03BC\u03BC\u03AD\u03BD\u03BF\u03C2. \u03A3\u03C5\u03BD\u03B4\u03B5\u03B8\u03B5\u03AF\u03C4\u03B5 \u03BC\u03B5 \u03B1\u03C5\u03C4\u03CC\u03BD \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9.",
            "auth.invalid_credentials": "\u039B\u03AC\u03B8\u03BF\u03C2 email \u03AE \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2",
            "auth.invalid_otp": "\u039F \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AC\u03BA\u03C5\u03C1\u03BF\u03C2 \u03AE \u03AD\u03BB\u03B7\u03BE\u03B5.",
            "auth.last_used": "\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B1 \u03C7\u03C1\u03AE\u03C3\u03B7 \xB7 {email}",
            "auth.last_used_no_email": "\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B1 \u03C7\u03C1\u03AE\u03C3\u03B7",
            "auth.link_purchase_subheading": "\u0398\u03B1 \u03C3\u03C5\u03BD\u03B4\u03AD\u03C3\u03BF\u03C5\u03BC\u03B5 \u03C4\u03B7\u03BD \u03B1\u03B3\u03BF\u03C1\u03AC \u03BC\u03B5 \u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC \u03C3\u03B1\u03C2 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B4\u03B9\u03B1\u03C4\u03B7\u03C1\u03B7\u03B8\u03B5\u03AF \u03B7 \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7.",
            "auth.log_in": "\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7",
            "auth.log_in_link": "\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7",
            "auth.login_continue_purchase": "\u03A3\u03C5\u03BD\u03B4\u03B5\u03B8\u03B5\u03AF\u03C4\u03B5 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B1\u03B3\u03BF\u03C1\u03AC \u03C3\u03B1\u03C2",
            "auth.network_error": "\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03B4\u03B9\u03BA\u03C4\u03CD\u03BF\u03C5. \u0395\u03BB\u03AD\u03B3\u03BE\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC.",
            "auth.no_account": "\u0394\u03B5\u03BD \u03AD\u03C7\u03B5\u03C4\u03B5 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC;",
            "auth.or": "\u03AE",
            "auth.password": "\u039A\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2",
            "auth.passwords_mismatch": "\u039F\u03B9 \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03AF \u03B4\u03B5\u03BD \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03BF\u03C5\u03BD",
            "auth.rate_limited": "\u03A0\u03BF\u03BB\u03BB\u03AC \u03B1\u03B9\u03C4\u03AE\u03BC\u03B1\u03C4\u03B1. \u0394\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03B1\u03C1\u03B3\u03CC\u03C4\u03B5\u03C1\u03B1.",
            "auth.repeat_password": "\u0395\u03C0\u03B1\u03BD\u03AC\u03BB\u03B7\u03C8\u03B7 \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD",
            "auth.reset_link_valid": "\u039F \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF\u03C2 \u03B9\u03C3\u03C7\u03CD\u03B5\u03B9 \u03B3\u03B9\u03B1 1 \u03CE\u03C1\u03B1.",
            "auth.reset_password_title": "\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD",
            "auth.reset_sent_message": "\u0391\u03BD \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF email \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9, \u03B5\u03C3\u03C4\u03AC\u03BB\u03B7 \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2.",
            "auth.reset_sent_subtitle": "\u03A3\u03C4\u03B5\u03AF\u03BB\u03B1\u03BC\u03B5 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD. \u0391\u03BA\u03BF\u03BB\u03BF\u03C5\u03B8\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B9\u03C2 \u03BF\u03B4\u03B7\u03B3\u03AF\u03B5\u03C2 \u03C3\u03C4\u03BF email.",
            "auth.restore_purchases_heading": "\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03B1\u03B3\u03BF\u03C1\u03CE\u03BD",
            "auth.restore_purchases_subheading": "\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03C3\u03C5\u03BD\u03B4\u03B5\u03B8\u03B5\u03AF\u03C4\u03B5 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5 \u03C4\u03B9\u03C2 \u03B1\u03B3\u03BF\u03C1\u03AD\u03C2 \u03C3\u03B1\u03C2.",
            "auth.send_reset": "\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE email \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2",
            "auth.service_unavailable": "\u0397 \u03C5\u03C0\u03B7\u03C1\u03B5\u03C3\u03AF\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03C1\u03BF\u03C3\u03C9\u03C1\u03B9\u03BD\u03AC \u03BC\u03B7 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B7. \u0394\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03B1\u03C1\u03B3\u03CC\u03C4\u03B5\u03C1\u03B1.",
            "auth.show_password": "\u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7 \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD",
            "auth.sign_out": "\u0391\u03C0\u03BF\u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7",
            "auth.sign_up": "\u0395\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE",
            "auth.sign_up_link": "\u0395\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE",
            "auth.signed_in": "\u03A3\u03C5\u03BD\u03B4\u03B5\u03B4\u03B5\u03BC\u03AD\u03BD\u03BF\u03C2",
            "auth.signin_failed": "\u0397 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03B1\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5",
            "auth.signup_failed": "\u0397 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE \u03B1\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5",
            "auth.verify": "\u0395\u03C0\u03B9\u03B2\u03B5\u03B2\u03B1\u03AF\u03C9\u03C3\u03B7",
            "auth.weak_password": "\u039F \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03CD \u03B1\u03B4\u03CD\u03BD\u03B1\u03BC\u03BF\u03C2.",
            "auth.welcome": "\u039A\u03B1\u03BB\u03CE\u03C2 \u03AE\u03C1\u03B8\u03B1\u03C4\u03B5!",
            "auth.welcome_signup": "\u039A\u03B1\u03BB\u03CE\u03C2 \u03AE\u03C1\u03B8\u03B1\u03C4\u03B5!",
            "countdown.d": "\u03B7",
            "countdown.h": "\u03C9",
            "countdown.m": "\u03BB",
            "countdown.s": "\u03B4",
            "cta.close": "\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF",
            "cta.continue": "\u03A3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1",
            "cta.get_lifetime_access": "\u0391\u03C0\u03CC\u03BA\u03C4\u03B7\u03C3\u03B7 \u03B9\u03C3\u03CC\u03B2\u03B9\u03B1\u03C2 \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7\u03C2",
            "cta.get_plan_daily": "\u039B\u03AE\u03C8\u03B7 \u03B7\u03BC\u03B5\u03C1\u03AE\u03C3\u03B9\u03BF\u03C5 \u03C0\u03BB\u03AC\u03BD\u03BF\u03C5",
            "cta.get_plan_monthly": "\u039B\u03AE\u03C8\u03B7 \u03BC\u03B7\u03BD\u03B9\u03B1\u03AF\u03BF\u03C5 \u03C0\u03BB\u03AC\u03BD\u03BF\u03C5",
            "cta.get_plan_weekly": "\u039B\u03AE\u03C8\u03B7 \u03B5\u03B2\u03B4\u03BF\u03BC\u03B1\u03B4\u03B9\u03B1\u03AF\u03BF\u03C5 \u03C0\u03BB\u03AC\u03BD\u03BF\u03C5",
            "cta.get_plan_yearly": "\u039B\u03AE\u03C8\u03B7 \u03B5\u03C4\u03AE\u03C3\u03B9\u03BF\u03C5 \u03C0\u03BB\u03AC\u03BD\u03BF\u03C5",
            "cta.start_trial": "\u039E\u03B5\u03BA\u03B9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03B4\u03C9\u03C1\u03B5\u03AC\u03BD \u03B4\u03BF\u03BA\u03B9\u03BC\u03AE {days} \u03B7\u03BC\u03B5\u03C1\u03CE\u03BD",
            "modal.close_aria": "\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF",
            "modal.continue": "\u03A3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1",
            "modal.error_generic": "\u039A\u03AC\u03C4\u03B9 \u03C0\u03AE\u03B3\u03B5 \u03C3\u03C4\u03C1\u03B1\u03B2\u03AC",
            "modal.loading": "\u03A6\u03CC\u03C1\u03C4\u03C9\u03C3\u03B7\u2026",
            "modal.purchase_restored_subtitle": "\u038C\u03BB\u03B1 \u03AD\u03C4\u03BF\u03B9\u03BC\u03B1 \u2014 \u03B1\u03C0\u03CC\u03BB\u03B1\u03C5\u03C3\u03AD \u03C4\u03BF!",
            "modal.purchase_restored_title": "\u039A\u03B1\u03BB\u03CE\u03C2 \u03AE\u03C1\u03B8\u03B1\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC",
            "modal.purchase_success_subtitle": "\u038C\u03BB\u03B1 \u03AD\u03C4\u03BF\u03B9\u03BC\u03B1 \u2014 \u03B1\u03C0\u03CC\u03BB\u03B1\u03C5\u03C3\u03AD \u03C4\u03BF!",
            "modal.purchase_success_title": "\u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE \u03B5\u03BB\u03AE\u03C6\u03B8\u03B7",
            "modal.verifying_subscription": "\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03C3\u03C5\u03BD\u03B4\u03C1\u03BF\u03BC\u03AE\u03C2\u2026",
            "nav.back": "\u2190 \u03A0\u03AF\u03C3\u03C9",
            "nav.back_aria": "\u03A0\u03AF\u03C3\u03C9",
            "offer.limited_time": "\u03A0\u03C1\u03BF\u03C3\u03C6\u03BF\u03C1\u03AC \u03C0\u03B5\u03C1\u03B9\u03BF\u03C1\u03B9\u03C3\u03BC\u03AD\u03BD\u03BF\u03C5 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C5",
            "payment.awaiting_title": "\u039F\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE \u03C3\u03C4\u03B7 \u03BD\u03AD\u03B1 \u03BA\u03B1\u03C1\u03C4\u03AD\u03BB\u03B1",
            "payment.checking": "\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2\u2026",
            "payment.ive_paid": "\u0388\u03C7\u03C9 \u03C0\u03BB\u03B7\u03C1\u03CE\u03C3\u03B5\u03B9",
            "payment.open_checkout_again": "\u0386\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1 \u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE\u03C2 \u03BE\u03B1\u03BD\u03AC",
            "payment.open_checkout_button": "\u0386\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1 \u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE\u03C2",
            "pricing.free_trial_days": "\u0394\u03C9\u03C1\u03B5\u03AC\u03BD \u03B4\u03BF\u03BA\u03B9\u03BC\u03AE {days} \u03B7\u03BC\u03B5\u03C1\u03CE\u03BD",
            "pricing.included_per": "\u03A0\u03B5\u03C1\u03B9\u03BB\u03B1\u03BC\u03B2\u03AC\u03BD\u03B5\u03C4\u03B1\u03B9 \u03B1\u03BD\u03AC {interval}:",
            "pricing.interval.day": "\u03B7\u03BC\u03AD\u03C1\u03B1",
            "pricing.interval.lifetime_short": "\u03B9\u03C3\u03CC\u03B2\u03B9\u03BF",
            "pricing.interval.month": "\u03BC\u03AE\u03BD\u03B1\u03C2",
            "pricing.interval.period": "\u03C0\u03B5\u03C1\u03AF\u03BF\u03B4\u03BF\u03C2",
            "pricing.interval.week": "\u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1",
            "pricing.interval.year": "\u03AD\u03C4\u03BF\u03C2",
            "pricing.money_back": "\u0395\u03B3\u03B3\u03CD\u03B7\u03C3\u03B7 \u03B5\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE\u03C2 \u03C7\u03C1\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD 30 \u03B7\u03BC\u03B5\u03C1\u03CE\u03BD",
            "pricing.most_popular": "\u0394\u03B7\u03BC\u03BF\u03C6\u03B9\u03BB\u03AD\u03C3\u03C4\u03B5\u03C1\u03BF",
            "pricing.no_prices": "\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B5\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2.",
            "pricing.plan_label.daily": "\u0397\u039C\u0395\u03A1\u0397\u03A3\u0399\u039F \u03A0\u039B\u0391\u039D\u039F",
            "pricing.plan_label.lifetime": "\u03B5\u03C6' \u03CC\u03C1\u03BF\u03C5 \u03B6\u03C9\u03AE\u03C2",
            "pricing.plan_label.monthly": "\u03BC\u03B7\u03BD\u03B9\u03B1\u03AF\u03BF \u03C0\u03BB\u03AC\u03BD\u03BF",
            "pricing.plan_label.weekly": "\u03B5\u03B2\u03B4\u03BF\u03BC\u03B1\u03B4\u03B9\u03B1\u03AF\u03BF \u03C0\u03BB\u03AC\u03BD\u03BF",
            "pricing.plan_label.yearly": "\u03B5\u03C4\u03AE\u03C3\u03B9\u03BF \u03C0\u03BB\u03AC\u03BD\u03BF",
            "pricing.plans_aria": "\u03A0\u03BB\u03AC\u03BD\u03B1",
            "session.contact_support": "\u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AF\u03B1 \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7\u03C2",
            "session.restore_purchases": "\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03B1\u03B3\u03BF\u03C1\u03CE\u03BD",
            "session.sign_out": "\u0391\u03C0\u03BF\u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7",
            "session.signed_in_as_prefix": "\u03A3\u03C5\u03BD\u03B4\u03B5\u03B4\u03B5\u03BC\u03AD\u03BD\u03BF\u03C2 \u03C9\u03C2",
            "session.signing_out": "\u0391\u03C0\u03BF\u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7\u2026",
            "support.attachments_label": "\u03A3\u03C5\u03BD\u03B7\u03BC\u03BC\u03AD\u03BD\u03B1",
            "support.close_button": "\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF",
            "support.done_button": "\u0388\u03C4\u03BF\u03B9\u03BC\u03BF",
            "support.email_placeholder": "\u0395\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF email \u03C3\u03B1\u03C2",
            "support.heading": "\u03A5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7",
            "support.instruction": "\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03C3\u03C5\u03BC\u03C0\u03BB\u03B7\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9 \u03C6\u03CC\u03C1\u03BC\u03B1 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C5\u03C0\u03BF\u03B2\u03AC\u03BB\u03B5\u03C4\u03B5 \u03C4\u03BF \u03B1\u03AF\u03C4\u03B7\u03BC\u03B1 \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7\u03C2.",
            "support.invalid_email": "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF email",
            "support.message_length": "1\u20135000 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2",
            "support.message_placeholder": "\u0395\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03AC \u03C3\u03B1\u03C2",
            "support.required": "\u03A5\u03C0\u03BF\u03C7\u03C1\u03B5\u03C9\u03C4\u03B9\u03BA\u03CC",
            "support.send_another": "\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE \u03AC\u03BB\u03BB\u03BF\u03C5 \u03B1\u03B9\u03C4\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2",
            "support.send_button": "\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE",
            "support.sending": "\u0391\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\u2026",
            "support.subject_length": "3\u2013200 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2",
            "support.subject_placeholder": "\u0395\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03B8\u03AD\u03BC\u03B1",
            "support.success_heading": "\u03A4\u03BF \u03B1\u03AF\u03C4\u03B7\u03BC\u03B1 \u03C5\u03C0\u03BF\u03B2\u03BB\u03AE\u03B8\u03B7\u03BA\u03B5",
            "support.success_message_prefix": "\u039B\u03AC\u03B2\u03B1\u03BC\u03B5 \u03C4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03AC \u03C3\u03B1\u03C2 \u03BA\u03B1\u03B9 \u03B8\u03B1 \u03B1\u03C0\u03B1\u03BD\u03C4\u03AE\u03C3\u03BF\u03C5\u03BC\u03B5 \u03C3\u03C4\u03BF"
        }
    }
    );
    var Va = {};
    E(Va, {
        default: () => or
    });
    var or, Ra = T( () => {
        or = {
            "anon.description_default": "Configurando tu sesi\xF3n de invitado\u2026",
            "anon.heading_default": "Continuar como invitado",
            "anon.try_again": "Intentar de nuevo",
            "auth.back_to_login": "Volver al inicio de sesi\xF3n",
            "auth.check_email_message": "Revisa tu correo electr\xF3nico para el c\xF3digo de confirmaci\xF3n.",
            "auth.check_email_title": "Revisa tu correo",
            "auth.confirm_email_subtitle": "Ingresa el c\xF3digo que enviamos a tu correo para terminar de crear tu cuenta.",
            "auth.confirm_email_title": "Confirma tu correo",
            "auth.confirmation_code": "C\xF3digo de confirmaci\xF3n",
            "auth.continue_with_apple": "Continuar con Apple",
            "auth.continue_with_facebook": "Continuar con Facebook",
            "auth.continue_with_github": "Continuar con GitHub",
            "auth.continue_with_google": "Continuar con Google",
            "auth.create_account": "Crear cuenta",
            "auth.default_subtitle": "Inicie sesi\xF3n para acceder a todas las funciones y sincronizar sus datos.",
            "auth.email": "Correo electr\xF3nico",
            "auth.email_already_registered": "Este correo ya est\xE1 registrado. Inicia sesi\xF3n abajo con tu contrase\xF1a o la cuenta que usaste para registrarte.",
            "auth.email_exists": "Ya existe una cuenta con este correo.",
            "auth.email_not_confirmed": "Por favor, confirma tu correo primero.",
            "auth.forgot_password": "\xBFOlvid\xF3 su contrase\xF1a?",
            "auth.forgot_password_title": "\xBFOlvid\xF3 su contrase\xF1a?",
            "auth.forgot_subtitle": "Ingrese su correo electr\xF3nico y le enviaremos un enlace para restablecer la contrase\xF1a.",
            "auth.generic_error": "Algo sali\xF3 mal",
            "auth.have_account": "\xBFTiene una cuenta?",
            "auth.hide_password": "Ocultar contrase\xF1a",
            "auth.identity_already_linked": "Esta cuenta ya est\xE1 registrada. Inicia sesi\xF3n con ella abajo.",
            "auth.invalid_credentials": "Correo o contrase\xF1a incorrectos",
            "auth.invalid_otp": "El c\xF3digo no es v\xE1lido o ha expirado.",
            "auth.last_used": "\xDAltima vez \xB7 {email}",
            "auth.last_used_no_email": "\xDAltima vez",
            "auth.link_purchase_subheading": "Vincularemos la compra a tu cuenta para conservar el acceso.",
            "auth.log_in": "Iniciar Sesi\xF3n",
            "auth.log_in_link": "Iniciar Sesi\xF3n",
            "auth.login_continue_purchase": "Inicie sesi\xF3n para continuar con su compra",
            "auth.network_error": "Error de red. Comprueba tu conexi\xF3n y vuelve a intentarlo.",
            "auth.new_password_optional": "Nueva contrase\xF1a (opcional \u2014 solo para restablecer)",
            "auth.no_account": "\xBFNo tiene una cuenta?",
            "auth.or": "o",
            "auth.password": "Contrase\xF1a",
            "auth.passwords_mismatch": "Las contrase\xF1as no coinciden",
            "auth.rate_limited": "Demasiadas solicitudes. Int\xE9ntalo m\xE1s tarde.",
            "auth.repeat_password": "Repetir contrase\xF1a",
            "auth.reset_link_valid": "El enlace es v\xE1lido durante 1 hora.",
            "auth.reset_password_subtitle": "Ingresa el c\xF3digo de tu correo y una nueva contrase\xF1a.",
            "auth.reset_password_title": "Restablecer contrase\xF1a",
            "auth.reset_sent_message": "Si ese correo existe, hemos enviado un c\xF3digo de restablecimiento.",
            "auth.reset_sent_subtitle": "Te enviamos un enlace para restablecer tu contrase\xF1a. Sigue las instrucciones del correo.",
            "auth.restore_purchases_heading": "Restaurar Compras",
            "auth.restore_purchases_subheading": "Por favor, inicie sesi\xF3n para restaurar sus compras.",
            "auth.send_reset": "Enviar Correo de Restablecimiento",
            "auth.service_unavailable": "Servicio no disponible temporalmente. Int\xE9ntalo m\xE1s tarde.",
            "auth.show_password": "Mostrar contrase\xF1a",
            "auth.sign_out": "Cerrar sesi\xF3n",
            "auth.sign_up": "Registrarse",
            "auth.sign_up_link": "Registrarse",
            "auth.signed_in": "Sesi\xF3n iniciada",
            "auth.signin_failed": "Error al iniciar sesi\xF3n",
            "auth.signup_failed": "Error al registrarse",
            "auth.verify": "Verificar",
            "auth.weak_password": "La contrase\xF1a es demasiado d\xE9bil.",
            "auth.welcome": "\xA1Bienvenido!",
            "auth.welcome_signup": "\xA1Bienvenido!",
            "cta.close": "Cerrar",
            "cta.continue": "Continuar",
            "cta.get_lifetime_access": "Obtener acceso de por vida",
            "cta.get_plan_daily": "Obtener plan diario",
            "cta.get_plan_generic": "Obtener plan {interval}",
            "cta.get_plan_monthly": "Obtener plan mensual",
            "cta.get_plan_weekly": "Obtener plan semanal",
            "cta.get_plan_yearly": "Obtener plan anual",
            "cta.start_trial": "Iniciar Prueba Gratuita de {days} D\xEDas",
            "modal.close_aria": "Cerrar",
            "modal.continue": "Continuar",
            "modal.error_generic": "Algo sali\xF3 mal",
            "modal.loading": "Cargando\u2026",
            "modal.purchase_restored_subtitle": "\xA1Todo listo \u2014 que lo disfrutes!",
            "modal.purchase_restored_title": "Bienvenido de nuevo",
            "modal.purchase_success_subtitle": "\xA1Todo listo \u2014 que lo disfrutes!",
            "modal.purchase_success_title": "Pago recibido",
            "modal.verifying_subscription": "Verificando tu suscripci\xF3n\u2026",
            "nav.back": "\u2190 Atr\xE1s",
            "nav.back_aria": "Volver",
            "offer.limited_time": "Oferta por tiempo limitado",
            "payment.awaiting_subtitle": "Detectaremos tu pago autom\xE1ticamente \u2014 o haz clic abajo cuando termines.",
            "payment.awaiting_title": "Completa el pago en la nueva pesta\xF1a",
            "payment.checking": "Verificando\u2026",
            "payment.ive_paid": "He pagado",
            "payment.open_checkout_again": "Abrir pago de nuevo",
            "payment.open_checkout_button": "Abrir pago",
            "payment.popup_blocked_message": "Tu navegador bloque\xF3 la pesta\xF1a de pago. Haz clic abajo para abrirla.",
            "payment.popup_blocked_title": "Permite ventanas emergentes para continuar",
            "payment.popup_help_text": "\xBFLa ventana de pago no se abri\xF3 o fue bloqueada? Haz clic aqu\xED para abrirla de nuevo.",
            "payment.still_processing": "El pago todav\xEDa se est\xE1 procesando. Int\xE9ntalo de nuevo en un momento.",
            "payment.tab_closed_retry": "\xBFPesta\xF1a cerrada? Int\xE9ntalo de nuevo",
            "pricing.free_trial_days": "Prueba gratuita de {days} d\xEDas",
            "pricing.included_per": "Incluido por {interval}:",
            "pricing.interval.day": "d\xEDa",
            "pricing.interval.lifetime_short": "de por vida",
            "pricing.interval.month": "mes",
            "pricing.interval.period": "per\xEDodo",
            "pricing.interval.week": "semana",
            "pricing.interval.year": "a\xF1o",
            "pricing.money_back": "Garant\xEDa de devoluci\xF3n de 30 d\xEDas",
            "pricing.most_popular": "M\xE1s popular",
            "pricing.no_prices": "No hay precios disponibles.",
            "pricing.plan_label.daily": "PLAN DIARIO",
            "pricing.plan_label.lifetime": "de por vida",
            "pricing.plan_label.monthly": "plan mensual",
            "pricing.plan_label.weekly": "plan semanal",
            "pricing.plan_label.yearly": "plan anual",
            "pricing.plans_aria": "Planes",
            "session.contact_support": "Contactar con soporte",
            "session.restore_purchases": "Restaurar compras",
            "session.sign_out": "Cerrar sesi\xF3n",
            "session.signed_in_as_prefix": "Sesi\xF3n iniciada como",
            "session.signing_out": "Cerrando sesi\xF3n\u2026",
            "support.attachments_aria": "Subir adjuntos",
            "support.attachments_label": "Archivos adjuntos",
            "support.close_button": "Cerrar",
            "support.done_button": "Listo",
            "support.dropzone_text": "Suelta im\xE1genes aqu\xED o haz clic para seleccionar",
            "support.email_placeholder": "Ingrese su correo electr\xF3nico",
            "support.file_requirements": "JPEG/PNG/WebP, hasta {max} archivos, \u2264 {size} MB cada uno",
            "support.heading": "Soporte",
            "support.instruction": "Por favor, complete el formulario a continuaci\xF3n para enviar su solicitud de soporte.",
            "support.invalid_email": "Correo electr\xF3nico inv\xE1lido",
            "support.invalid_file": "Solo JPEG/PNG/WebP, \u2264 {size} MB cada uno",
            "support.message_length": "1\u20135000 caracteres",
            "support.message_placeholder": "Ingrese su mensaje",
            "support.remove_file_aria": "Eliminar {filename}",
            "support.required": "Requerido",
            "support.send_another": "Enviar otra solicitud",
            "support.send_button": "Enviar",
            "support.sending": "Enviando\u2026",
            "support.sending_as": "Enviando como",
            "support.subject_length": "3\u2013200 caracteres",
            "support.subject_placeholder": "Ingrese el asunto",
            "support.success_heading": "Solicitud enviada",
            "support.success_message_prefix": "Hemos recibido su mensaje y responderemos a",
            "support.too_many_files": "Hasta {max} archivos"
        }
    }
    );
    var Ka = {};
    E(Ka, {
        default: () => lr
    });
    var lr, Ha = T( () => {
        lr = {
            "anon.heading_default": "Jatka vieraana",
            "anon.try_again": "Yrit\xE4 uudelleen",
            "auth.back_to_login": "Takaisin kirjautumiseen",
            "auth.check_email_message": "Tarkista s\xE4hk\xF6postisi \u2014 l\xE4hetimme vahvistuskoodin.",
            "auth.check_email_title": "Tarkista s\xE4hk\xF6postisi",
            "auth.confirm_email_title": "Vahvista s\xE4hk\xF6postisi",
            "auth.confirmation_code": "Vahvistuskoodi",
            "auth.continue_with_apple": "Jatka Applella",
            "auth.continue_with_facebook": "Jatka Facebookilla",
            "auth.continue_with_github": "Jatka GitHubilla",
            "auth.continue_with_google": "Jatka Googlella",
            "auth.create_account": "Luo tili",
            "auth.default_subtitle": "Kirjaudu k\xE4ytt\xE4\xE4ksesi kaikkia ominaisuuksia ja synkronoidaksesi tietosi.",
            "auth.email": "S\xE4hk\xF6postiosoite",
            "auth.email_already_registered": "T\xE4m\xE4 s\xE4hk\xF6posti on jo rekister\xF6ity. Kirjaudu alta salasanallasi tai tilill\xE4, jolla rekister\xF6idyit.",
            "auth.email_exists": "Tilill\xE4 t\xE4ll\xE4 s\xE4hk\xF6postilla on jo olemassa.",
            "auth.email_not_confirmed": "Vahvista ensin s\xE4hk\xF6postiosoitteesi.",
            "auth.forgot_password": "Unohditko salasanan?",
            "auth.forgot_password_title": "Unohditko salasanan?",
            "auth.forgot_subtitle": "Sy\xF6t\xE4 s\xE4hk\xF6postiosoitteesi, niin l\xE4het\xE4mme sinulle salasanan palautuslinkkin.",
            "auth.generic_error": "Jokin meni pieleen",
            "auth.have_account": "Onko sinulla tili?",
            "auth.hide_password": "Piilota salasana",
            "auth.identity_already_linked": "T\xE4m\xE4 tili on jo rekister\xF6ity. Kirjaudu sill\xE4 sis\xE4\xE4n alta.",
            "auth.invalid_credentials": "Virheellinen s\xE4hk\xF6posti tai salasana",
            "auth.invalid_otp": "Koodi on virheellinen tai vanhentunut.",
            "auth.last_used": "Viimeksi k\xE4ytetty \xB7 {email}",
            "auth.last_used_no_email": "Viimeksi k\xE4ytetty",
            "auth.link_purchase_subheading": "Yhdist\xE4mme oston tiliisi, jotta k\xE4ytt\xF6oikeus s\xE4ilyy.",
            "auth.log_in": "Kirjaudu",
            "auth.log_in_link": "Kirjaudu",
            "auth.login_continue_purchase": "Kirjaudu jatkaaksesi ostoa",
            "auth.network_error": "Verkkovirhe. Tarkista yhteys ja yrit\xE4 uudelleen.",
            "auth.no_account": "Eik\xF6 sinulla ole tili\xE4?",
            "auth.or": "tai",
            "auth.password": "Salasana",
            "auth.passwords_mismatch": "Salasanat eiv\xE4t t\xE4sm\xE4\xE4",
            "auth.rate_limited": "Liian monta pyynt\xF6\xE4. Yrit\xE4 my\xF6hemmin uudelleen.",
            "auth.repeat_password": "Toista salasana",
            "auth.reset_link_valid": "Linkki on voimassa 1 tunnin.",
            "auth.reset_password_title": "Nollaa salasana",
            "auth.reset_sent_message": "Jos s\xE4hk\xF6posti on olemassa, l\xE4hetimme palautuskoodin.",
            "auth.reset_sent_subtitle": "L\xE4hetimme salasanan palautuslinkin. Noudata s\xE4hk\xF6postin ohjeita.",
            "auth.restore_purchases_heading": "Palauta ostot",
            "auth.restore_purchases_subheading": "Kirjaudu palauttaaksesi ostoksesi.",
            "auth.send_reset": "L\xE4het\xE4 palautuslinkki",
            "auth.service_unavailable": "Palvelu ei ole tilap\xE4isesti k\xE4ytett\xE4viss\xE4. Yrit\xE4 my\xF6hemmin.",
            "auth.show_password": "N\xE4yt\xE4 salasana",
            "auth.sign_out": "Kirjaudu ulos",
            "auth.sign_up": "Rekister\xF6idy",
            "auth.sign_up_link": "Rekister\xF6idy",
            "auth.signed_in": "Kirjautunut",
            "auth.signin_failed": "Kirjautuminen ep\xE4onnistui",
            "auth.signup_failed": "Rekister\xF6inti ep\xE4onnistui",
            "auth.verify": "Vahvista",
            "auth.weak_password": "Salasana on liian heikko.",
            "auth.welcome": "Tervetuloa!",
            "auth.welcome_signup": "Tervetuloa!",
            "cta.close": "Sulje",
            "cta.continue": "Jatka",
            "cta.get_lifetime_access": "Hanki elinik\xE4inen k\xE4ytt\xF6oikeus",
            "cta.get_plan_daily": "Hanki p\xE4iv\xE4paketti",
            "cta.get_plan_monthly": "Hanki kuukausipaketti",
            "cta.get_plan_weekly": "Hanki viikkopaketti",
            "cta.get_plan_yearly": "Hanki vuosipaketti",
            "cta.start_trial": "Aloita {days} p\xE4iv\xE4n ilmainen kokeilu",
            "modal.close_aria": "Sulje",
            "modal.continue": "Jatka",
            "modal.error_generic": "Jokin meni pieleen",
            "modal.loading": "Ladataan\u2026",
            "modal.purchase_restored_subtitle": "Kaikki valmista \u2014 nauti!",
            "modal.purchase_restored_title": "Tervetuloa takaisin",
            "modal.purchase_success_subtitle": "Kaikki valmista \u2014 nauti!",
            "modal.purchase_success_title": "Maksu vastaanotettu",
            "modal.verifying_subscription": "Tarkistetaan tilausta\u2026",
            "nav.back": "\u2190 Takaisin",
            "nav.back_aria": "Takaisin",
            "offer.limited_time": "Rajoitetun ajan tarjous",
            "payment.awaiting_title": "Suorita maksu uudessa v\xE4lilehdess\xE4",
            "payment.checking": "Tarkistetaan\u2026",
            "payment.ive_paid": "Olen maksanut",
            "payment.open_checkout_again": "Avaa maksu uudelleen",
            "payment.open_checkout_button": "Avaa maksu",
            "pricing.free_trial_days": "{days}-p\xE4iv\xE4n ilmainen kokeilu",
            "pricing.included_per": "Sis\xE4ltyy per {interval}:",
            "pricing.interval.day": "p\xE4iv\xE4",
            "pricing.interval.lifetime_short": "elinik\xE4inen",
            "pricing.interval.month": "kuukausi",
            "pricing.interval.period": "jakso",
            "pricing.interval.week": "viikko",
            "pricing.interval.year": "vuosi",
            "pricing.money_back": "30 p\xE4iv\xE4n rahat-takaisin-takuu",
            "pricing.most_popular": "Suosituin",
            "pricing.no_prices": "Ei hintoja saatavilla.",
            "pricing.plan_label.daily": "P\xC4IVITT\xC4INEN PAKETTI",
            "pricing.plan_label.lifetime": "elinik\xE4inen",
            "pricing.plan_label.monthly": "kuukausitilaus",
            "pricing.plan_label.weekly": "viikkotilaus",
            "pricing.plan_label.yearly": "vuositilaus",
            "pricing.plans_aria": "Paketit",
            "session.contact_support": "Ota yhteytt\xE4 tukeen",
            "session.restore_purchases": "Palauta ostot",
            "session.sign_out": "Kirjaudu ulos",
            "session.signed_in_as_prefix": "Kirjautunut nimell\xE4",
            "session.signing_out": "Kirjaudutaan ulos\u2026",
            "support.attachments_label": "Liitteet",
            "support.close_button": "Sulje",
            "support.done_button": "Valmis",
            "support.email_placeholder": "Sy\xF6t\xE4 s\xE4hk\xF6postiosoitteesi",
            "support.heading": "Tuki",
            "support.instruction": "T\xE4yt\xE4 alla oleva lomake l\xE4hett\xE4\xE4ksesi tukipyynn\xF6n.",
            "support.invalid_email": "Virheellinen s\xE4hk\xF6postiosoite",
            "support.message_length": "1\u20135000 merkki\xE4",
            "support.message_placeholder": "Sy\xF6t\xE4 viestisi",
            "support.required": "Pakollinen",
            "support.send_another": "L\xE4het\xE4 uusi pyynt\xF6",
            "support.send_button": "L\xE4het\xE4",
            "support.sending": "L\xE4hetet\xE4\xE4n\u2026",
            "support.subject_length": "3\u2013200 merkki\xE4",
            "support.subject_placeholder": "Sy\xF6t\xE4 aihe",
            "support.success_heading": "Pyynt\xF6 l\xE4hetetty",
            "support.success_message_prefix": "Olemme vastaanottaneet viestisi ja vastaamme osoitteeseen"
        }
    }
    );
    var $a = {};
    E($a, {
        default: () => cr
    });
    var cr, Wa = T( () => {
        cr = {
            "anon.description_default": "Configuration de votre session invit\xE9\u2026",
            "anon.heading_default": "Continuer en tant qu'invit\xE9",
            "anon.try_again": "R\xE9essayer",
            "auth.back_to_login": "Retour \xE0 la connexion",
            "auth.check_email_message": "V\xE9rifiez votre e-mail pour le code de confirmation.",
            "auth.check_email_title": "V\xE9rifiez votre e-mail",
            "auth.confirm_email_subtitle": "Entrez le code que nous avons envoy\xE9 \xE0 votre e-mail pour finaliser votre compte.",
            "auth.confirm_email_title": "Confirmez votre e-mail",
            "auth.confirmation_code": "Code de confirmation",
            "auth.continue_with_apple": "Continuer avec Apple",
            "auth.continue_with_facebook": "Continuer avec Facebook",
            "auth.continue_with_github": "Continuer avec GitHub",
            "auth.continue_with_google": "Continuer avec Google",
            "auth.create_account": "Cr\xE9er un compte",
            "auth.default_subtitle": "Connectez-vous pour acc\xE9der \xE0 toutes les fonctionnalit\xE9s et synchroniser vos donn\xE9es.",
            "auth.email": "Adresse e-mail",
            "auth.email_already_registered": "Cet e-mail est d\xE9j\xE0 enregistr\xE9. Connectez-vous ci-dessous avec votre mot de passe ou le compte utilis\xE9 lors de l'inscription.",
            "auth.email_exists": "Un compte avec cet e-mail existe d\xE9j\xE0.",
            "auth.email_not_confirmed": "Veuillez d'abord confirmer votre e-mail.",
            "auth.forgot_password": "Mot de passe oubli\xE9 ?",
            "auth.forgot_password_title": "Mot de passe oubli\xE9 ?",
            "auth.forgot_subtitle": "Entrez votre adresse e-mail et nous vous enverrons un lien de r\xE9initialisation du mot de passe.",
            "auth.generic_error": "Une erreur s'est produite",
            "auth.have_account": "Vous avez un compte ?",
            "auth.hide_password": "Masquer le mot de passe",
            "auth.identity_already_linked": "Ce compte est d\xE9j\xE0 enregistr\xE9. Connectez-vous avec ci-dessous.",
            "auth.invalid_credentials": "E-mail ou mot de passe invalide",
            "auth.invalid_otp": "Le code est invalide ou a expir\xE9.",
            "auth.last_used": "Derni\xE8re fois \xB7 {email}",
            "auth.last_used_no_email": "Derni\xE8re fois",
            "auth.link_purchase_subheading": "Nous lierons l'achat \xE0 votre compte pour conserver l'acc\xE8s.",
            "auth.log_in": "Se Connecter",
            "auth.log_in_link": "Se Connecter",
            "auth.login_continue_purchase": "Connectez-vous pour continuer votre achat",
            "auth.network_error": "Erreur r\xE9seau. V\xE9rifiez votre connexion et r\xE9essayez.",
            "auth.new_password_optional": "Nouveau mot de passe (optionnel \u2014 uniquement pour r\xE9initialisation)",
            "auth.no_account": "Vous n'avez pas de compte ?",
            "auth.or": "ou",
            "auth.password": "Mot de passe",
            "auth.passwords_mismatch": "Les mots de passe ne correspondent pas",
            "auth.rate_limited": "Trop de requ\xEAtes. R\xE9essayez plus tard.",
            "auth.repeat_password": "R\xE9p\xE9ter le mot de passe",
            "auth.reset_link_valid": "Le lien est valide pendant 1 heure.",
            "auth.reset_password_subtitle": "Entrez le code de votre e-mail et un nouveau mot de passe.",
            "auth.reset_password_title": "R\xE9initialiser le mot de passe",
            "auth.reset_sent_message": "Si cet e-mail existe, un code de r\xE9initialisation a \xE9t\xE9 envoy\xE9.",
            "auth.reset_sent_subtitle": "Nous avons envoy\xE9 un lien de r\xE9initialisation. Suivez les instructions de l'e-mail.",
            "auth.restore_purchases_heading": "Restaurer les Achats",
            "auth.restore_purchases_subheading": "Veuillez vous connecter pour restaurer vos achats.",
            "auth.send_reset": "Envoyer l'E-mail de R\xE9initialisation",
            "auth.service_unavailable": "Service temporairement indisponible. R\xE9essayez plus tard.",
            "auth.show_password": "Afficher le mot de passe",
            "auth.sign_out": "Se d\xE9connecter",
            "auth.sign_up": "S'inscrire",
            "auth.sign_up_link": "S'inscrire",
            "auth.signed_in": "Connect\xE9",
            "auth.signin_failed": "\xC9chec de la connexion",
            "auth.signup_failed": "\xC9chec de l'inscription",
            "auth.verify": "V\xE9rifier",
            "auth.weak_password": "Le mot de passe est trop faible.",
            "auth.welcome": "Bienvenue !",
            "auth.welcome_signup": "Bienvenue !",
            "cta.close": "Fermer",
            "cta.continue": "Continuer",
            "cta.get_lifetime_access": "Obtenir un acc\xE8s \xE0 vie",
            "cta.get_plan_daily": "Obtenir le plan quotidien",
            "cta.get_plan_generic": "Obtenir le plan {interval}",
            "cta.get_plan_monthly": "Obtenir le plan mensuel",
            "cta.get_plan_weekly": "Obtenir le plan hebdomadaire",
            "cta.get_plan_yearly": "Obtenir le plan annuel",
            "cta.start_trial": "Commencer l'Essai Gratuit de {days} Jours",
            "modal.close_aria": "Fermer",
            "modal.continue": "Continuer",
            "modal.error_generic": "Une erreur s'est produite",
            "modal.loading": "Chargement\u2026",
            "modal.purchase_restored_subtitle": "Tout est pr\xEAt \u2014 profitez-en !",
            "modal.purchase_restored_title": "Bon retour",
            "modal.purchase_success_subtitle": "Tout est pr\xEAt \u2014 profitez-en !",
            "modal.purchase_success_title": "Paiement re\xE7u",
            "modal.verifying_subscription": "V\xE9rification de votre abonnement\u2026",
            "nav.back": "\u2190 Retour",
            "nav.back_aria": "Retour",
            "offer.limited_time": "Offre \xE0 dur\xE9e limit\xE9e",
            "payment.awaiting_subtitle": "Nous d\xE9tecterons votre paiement automatiquement \u2014 ou cliquez ci-dessous une fois termin\xE9.",
            "payment.awaiting_title": "Finalisez le paiement dans le nouvel onglet",
            "payment.checking": "V\xE9rification\u2026",
            "payment.ive_paid": "J'ai pay\xE9",
            "payment.open_checkout_again": "Rouvrir le paiement",
            "payment.open_checkout_button": "Ouvrir le paiement",
            "payment.popup_blocked_message": "Votre navigateur a bloqu\xE9 l'onglet de paiement. Cliquez ci-dessous pour l'ouvrir.",
            "payment.popup_blocked_title": "Autorisez les pop-ups pour continuer",
            "payment.popup_help_text": "La fen\xEAtre de paiement ne s'est pas ouverte ou a \xE9t\xE9 bloqu\xE9e ? Cliquez ici pour la rouvrir.",
            "payment.still_processing": "Le paiement est toujours en cours de traitement. R\xE9essayez dans un instant.",
            "payment.tab_closed_retry": "Onglet ferm\xE9 ? R\xE9essayer",
            "pricing.free_trial_days": "Essai gratuit de {days} jours",
            "pricing.included_per": "Inclus par {interval}:",
            "pricing.interval.day": "jour",
            "pricing.interval.lifetime_short": "\xE0 vie",
            "pricing.interval.month": "mois",
            "pricing.interval.period": "p\xE9riode",
            "pricing.interval.week": "semaine",
            "pricing.interval.year": "an",
            "pricing.money_back": "Garantie de remboursement de 30 jours",
            "pricing.most_popular": "Le plus populaire",
            "pricing.no_prices": "Aucun tarif disponible.",
            "pricing.plan_label.daily": "PLAN QUOTIDIEN",
            "pricing.plan_label.lifetime": "\xE0 vie",
            "pricing.plan_label.monthly": "forfait mensuel",
            "pricing.plan_label.weekly": "forfait hebdomadaire",
            "pricing.plan_label.yearly": "forfait annuel",
            "pricing.plans_aria": "Plans",
            "session.contact_support": "Contacter le support",
            "session.restore_purchases": "Restaurer les achats",
            "session.sign_out": "Se d\xE9connecter",
            "session.signed_in_as_prefix": "Connect\xE9 en tant que",
            "session.signing_out": "D\xE9connexion\u2026",
            "support.attachments_aria": "T\xE9l\xE9verser des pi\xE8ces jointes",
            "support.attachments_label": "Pi\xE8ces jointes",
            "support.close_button": "Fermer",
            "support.done_button": "Termin\xE9",
            "support.dropzone_text": "D\xE9posez les images ici ou cliquez pour s\xE9lectionner",
            "support.email_placeholder": "Entrez votre adresse e-mail",
            "support.file_requirements": "JPEG/PNG/WebP, jusqu'\xE0 {max} fichiers, \u2264 {size} Mo chacun",
            "support.heading": "Support",
            "support.instruction": "Veuillez remplir le formulaire ci-dessous pour soumettre votre demande de support.",
            "support.invalid_email": "Adresse e-mail invalide",
            "support.invalid_file": "JPEG/PNG/WebP uniquement, \u2264 {size} Mo chacun",
            "support.message_length": "1\u20135000 caract\xE8res",
            "support.message_placeholder": "Entrez votre message",
            "support.remove_file_aria": "Supprimer {filename}",
            "support.required": "Requis",
            "support.send_another": "Envoyer une autre demande",
            "support.send_button": "Envoyer",
            "support.sending": "Envoi en cours\u2026",
            "support.sending_as": "Envoi en tant que",
            "support.subject_length": "3\u2013200 caract\xE8res",
            "support.subject_placeholder": "Entrez votre sujet",
            "support.success_heading": "Demande soumise",
            "support.success_message_prefix": "Nous avons re\xE7u votre message et r\xE9pondrons \xE0",
            "support.too_many_files": "Jusqu'\xE0 {max} fichiers"
        }
    }
    );
    var Ja = {};
    E(Ja, {
        default: () => ur
    });
    var ur, Za = T( () => {
        ur = {
            "anon.heading_default": "\u05D4\u05DE\u05E9\u05DA \u05DB\u05D0\u05D5\u05E8\u05D7",
            "anon.try_again": "\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1",
            "auth.back_to_login": "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA",
            "auth.check_email_message": "\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05D3\u05D5\u05D0\u05E8 \u05E9\u05DC\u05DA \u05DC\u05E7\u05D1\u05DC\u05EA \u05E7\u05D5\u05D3 \u05D4\u05D0\u05D9\u05E9\u05D5\u05E8.",
            "auth.check_email_title": "\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05D3\u05D5\u05D0\u05E8 \u05E9\u05DC\u05DA",
            "auth.confirm_email_title": "\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05D3\u05D5\u05D0\u05E8 \u05D4\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9",
            "auth.confirmation_code": "\u05E7\u05D5\u05D3 \u05D0\u05D9\u05E9\u05D5\u05E8",
            "auth.continue_with_apple": "\u05D4\u05DE\u05E9\u05DA \u05E2\u05DD Apple",
            "auth.continue_with_facebook": "\u05D4\u05DE\u05E9\u05DA \u05E2\u05DD Facebook",
            "auth.continue_with_github": "\u05D4\u05DE\u05E9\u05DA \u05E2\u05DD GitHub",
            "auth.continue_with_google": "\u05D4\u05DE\u05E9\u05DA \u05E2\u05DD Google",
            "auth.create_account": "\u05E6\u05D5\u05E8 \u05D7\u05E9\u05D1\u05D5\u05DF",
            "auth.default_subtitle": "\u05D4\u05EA\u05D7\u05D1\u05E8 \u05DB\u05D3\u05D9 \u05DC\u05D2\u05E9\u05EA \u05DC\u05DB\u05DC \u05D4\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA \u05D5\u05DC\u05E1\u05E0\u05DB\u05E8\u05DF \u05D0\u05EA \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E9\u05DC\u05DA.",
            "auth.email": "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
            "auth.email_already_registered": '\u05D4\u05D3\u05D5\u05D0"\u05DC \u05D4\u05D6\u05D4 \u05DB\u05D1\u05E8 \u05E8\u05E9\u05D5\u05DD. \u05D4\u05D9\u05DB\u05E0\u05E1 \u05DC\u05DE\u05D8\u05D4 \u05E2\u05DD \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05E9\u05DC\u05DA \u05D0\u05D5 \u05D4\u05D7\u05E9\u05D1\u05D5\u05DF \u05E9\u05D0\u05D9\u05EA\u05D5 \u05E0\u05E8\u05E9\u05DE\u05EA.',
            "auth.email_exists": '\u05DB\u05D1\u05E8 \u05E7\u05D9\u05D9\u05DD \u05D7\u05E9\u05D1\u05D5\u05DF \u05E2\u05DD \u05D3\u05D5\u05D0"\u05DC \u05D6\u05D4.',
            "auth.email_not_confirmed": '\u05D0\u05E0\u05D0 \u05D0\u05E9\u05E8 \u05EA\u05D7\u05D9\u05DC\u05D4 \u05D0\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D3\u05D5\u05D0"\u05DC \u05E9\u05DC\u05DA.',
            "auth.forgot_password": "\u05E9\u05DB\u05D7\u05EA \u05E1\u05D9\u05E1\u05DE\u05D4?",
            "auth.forgot_password_title": "\u05E9\u05DB\u05D7\u05EA \u05E1\u05D9\u05E1\u05DE\u05D4?",
            "auth.forgot_subtitle": "\u05D4\u05D6\u05DF \u05D0\u05EA \u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05E9\u05DC\u05DA \u05D5\u05E0\u05E9\u05DC\u05D7 \u05DC\u05DA \u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4.",
            "auth.generic_error": "\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9",
            "auth.have_account": "\u05D9\u05E9 \u05DC\u05DA \u05D7\u05E9\u05D1\u05D5\u05DF?",
            "auth.hide_password": "\u05D4\u05E1\u05EA\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4",
            "auth.identity_already_linked": "\u05D4\u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05D6\u05D4 \u05DB\u05D1\u05E8 \u05E8\u05E9\u05D5\u05DD. \u05D4\u05D9\u05DB\u05E0\u05E1 \u05D0\u05D9\u05EA\u05D5 \u05DC\u05DE\u05D8\u05D4.",
            "auth.invalid_credentials": '\u05D3\u05D5\u05D0"\u05DC \u05D0\u05D5 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D9\u05DD',
            "auth.invalid_otp": "\u05D4\u05E7\u05D5\u05D3 \u05D0\u05D9\u05E0\u05D5 \u05EA\u05E7\u05E3 \u05D0\u05D5 \u05E4\u05D2 \u05EA\u05D5\u05E7\u05E4\u05D5.",
            "auth.last_used": "\u05D1\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D0\u05D7\u05E8\u05D5\u05DF \xB7 {email}",
            "auth.last_used_no_email": "\u05D1\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D0\u05D7\u05E8\u05D5\u05DF",
            "auth.link_purchase_subheading": "\u05E0\u05E7\u05E9\u05E8 \u05D0\u05EA \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05DC\u05D7\u05E9\u05D1\u05D5\u05DF \u05E9\u05DC\u05DA \u05DB\u05D3\u05D9 \u05DC\u05E9\u05DE\u05D5\u05E8 \u05E2\u05DC \u05D4\u05D2\u05D9\u05E9\u05D4.",
            "auth.log_in": "\u05D4\u05EA\u05D7\u05D1\u05E8",
            "auth.log_in_link": "\u05D4\u05EA\u05D7\u05D1\u05E8",
            "auth.login_continue_purchase": "\u05D4\u05EA\u05D7\u05D1\u05E8 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA \u05D0\u05EA \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E9\u05DC\u05DA",
            "auth.network_error": "\u05E9\u05D2\u05D9\u05D0\u05EA \u05E8\u05E9\u05EA. \u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D5\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.",
            "auth.no_account": "\u05D0\u05D9\u05DF \u05DC\u05DA \u05D7\u05E9\u05D1\u05D5\u05DF?",
            "auth.or": "\u05D0\u05D5",
            "auth.password": "\u05E1\u05D9\u05E1\u05DE\u05D4",
            "auth.passwords_mismatch": "\u05D4\u05E1\u05D9\u05E1\u05DE\u05D0\u05D5\u05EA \u05D0\u05D9\u05E0\u05DF \u05EA\u05D5\u05D0\u05DE\u05D5\u05EA",
            "auth.rate_limited": "\u05D9\u05D5\u05EA\u05E8 \u05DE\u05D3\u05D9 \u05D1\u05E7\u05E9\u05D5\u05EA. \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8.",
            "auth.repeat_password": "\u05D7\u05D6\u05D5\u05E8 \u05E2\u05DC \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4",
            "auth.reset_link_valid": "\u05D4\u05E7\u05D9\u05E9\u05D5\u05E8 \u05D1\u05EA\u05D5\u05E7\u05E3 \u05DC\u05E9\u05E2\u05D4.",
            "auth.reset_password_title": "\u05D0\u05D9\u05E4\u05D5\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4",
            "auth.reset_sent_message": "\u05D0\u05DD \u05D4\u05D3\u05D5\u05D0\u05E8 \u05E7\u05D9\u05D9\u05DD, \u05E0\u05E9\u05DC\u05D7 \u05E7\u05D5\u05D3 \u05D0\u05D9\u05E4\u05D5\u05E1.",
            "auth.reset_sent_subtitle": "\u05E9\u05DC\u05D7\u05E0\u05D5 \u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4. \u05E2\u05E7\u05D5\u05D1 \u05D0\u05D7\u05E8 \u05D4\u05D4\u05D5\u05E8\u05D0\u05D5\u05EA \u05D1\u05DE\u05D9\u05D9\u05DC.",
            "auth.restore_purchases_heading": "\u05E9\u05D7\u05D6\u05E8 \u05E8\u05DB\u05D9\u05E9\u05D5\u05EA",
            "auth.restore_purchases_subheading": "\u05D0\u05E0\u05D0 \u05D4\u05EA\u05D7\u05D1\u05E8 \u05DB\u05D3\u05D9 \u05DC\u05E9\u05D7\u05D6\u05E8 \u05D0\u05EA \u05D4\u05E8\u05DB\u05D9\u05E9\u05D5\u05EA \u05E9\u05DC\u05DA.",
            "auth.send_reset": "\u05E9\u05DC\u05D7 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05D0\u05D9\u05E4\u05D5\u05E1",
            "auth.service_unavailable": "\u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05D9\u05E0\u05D5 \u05D6\u05DE\u05D9\u05DF \u05DB\u05E2\u05EA. \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D7\u05E8 \u05D9\u05D5\u05EA\u05E8.",
            "auth.show_password": "\u05D4\u05E6\u05D2 \u05E1\u05D9\u05E1\u05DE\u05D4",
            "auth.sign_out": "\u05D4\u05EA\u05E0\u05EA\u05E7",
            "auth.sign_up": "\u05D4\u05D9\u05E8\u05E9\u05DD",
            "auth.sign_up_link": "\u05D4\u05D9\u05E8\u05E9\u05DD",
            "auth.signed_in": "\u05DE\u05D7\u05D5\u05D1\u05E8",
            "auth.signin_failed": "\u05D4\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA \u05E0\u05DB\u05E9\u05DC\u05D4",
            "auth.signup_failed": "\u05D4\u05E8\u05D9\u05E9\u05D5\u05DD \u05E0\u05DB\u05E9\u05DC",
            "auth.verify": "\u05D0\u05DE\u05EA",
            "auth.weak_password": "\u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05DC\u05E9\u05D4 \u05DE\u05D3\u05D9.",
            "auth.welcome": "\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0!",
            "auth.welcome_signup": "\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0!",
            "countdown.d": "\u05D9",
            "countdown.h": "\u05E9",
            "countdown.m": "\u05D3\u05E7",
            "countdown.s": "\u05E9\u05E0",
            "cta.close": "\u05E1\u05D2\u05D5\u05E8",
            "cta.continue": "\u05D4\u05DE\u05E9\u05DA",
            "cta.get_lifetime_access": "\u05E7\u05D1\u05DC \u05D2\u05D9\u05E9\u05D4 \u05DC\u05DB\u05DC \u05D4\u05D7\u05D9\u05D9\u05DD",
            "cta.get_plan_daily": "\u05E7\u05D1\u05DC \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D9\u05D5\u05DE\u05D9\u05EA",
            "cta.get_plan_monthly": "\u05E7\u05D1\u05DC \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D7\u05D5\u05D3\u05E9\u05D9\u05EA",
            "cta.get_plan_weekly": "\u05E7\u05D1\u05DC \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05E9\u05D1\u05D5\u05E2\u05D9\u05EA",
            "cta.get_plan_yearly": "\u05E7\u05D1\u05DC \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05E9\u05E0\u05EA\u05D9\u05EA",
            "cta.start_trial": "\u05D4\u05EA\u05D7\u05DC \u05EA\u05E7\u05D5\u05E4\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D7\u05D9\u05E0\u05DD \u05E9\u05DC {days} \u05D9\u05DE\u05D9\u05DD",
            "modal.close_aria": "\u05E1\u05D2\u05D5\u05E8",
            "modal.continue": "\u05D4\u05DE\u05E9\u05DA",
            "modal.error_generic": "\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9",
            "modal.loading": "\u05D8\u05D5\u05E2\u05DF\u2026",
            "modal.purchase_restored_subtitle": "\u05D4\u05DB\u05D5\u05DC \u05DE\u05D5\u05DB\u05DF \u2014 \u05EA\u05D9\u05D4\u05E0\u05D5!",
            "modal.purchase_restored_title": "\u05D1\u05E8\u05D5\u05DA \u05E9\u05D5\u05D1\u05DA",
            "modal.purchase_success_subtitle": "\u05D4\u05DB\u05D5\u05DC \u05DE\u05D5\u05DB\u05DF \u2014 \u05EA\u05D9\u05D4\u05E0\u05D5!",
            "modal.purchase_success_title": "\u05D4\u05EA\u05E7\u05D1\u05DC \u05EA\u05E9\u05DC\u05D5\u05DD",
            "modal.verifying_subscription": "\u05D1\u05D5\u05D3\u05E7 \u05D0\u05EA \u05D4\u05DE\u05D9\u05E0\u05D5\u05D9 \u05E9\u05DC\u05DA\u2026",
            "nav.back": "\u2192 \u05D7\u05D6\u05E8\u05D4",
            "nav.back_aria": "\u05D7\u05D6\u05E8\u05D4",
            "offer.limited_time": "\u05D4\u05E6\u05E2\u05D4 \u05DC\u05D6\u05DE\u05DF \u05DE\u05D5\u05D2\u05D1\u05DC",
            "payment.awaiting_title": "\u05D4\u05E9\u05DC\u05DD \u05D0\u05EA \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05D1\u05DC\u05E9\u05D5\u05E0\u05D9\u05EA \u05D4\u05D7\u05D3\u05E9\u05D4",
            "payment.checking": "\u05D1\u05D5\u05D3\u05E7\u2026",
            "payment.ive_paid": "\u05E9\u05D9\u05DC\u05DE\u05EA\u05D9",
            "payment.open_checkout_again": "\u05E4\u05EA\u05D7 \u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05D5\u05D1",
            "payment.open_checkout_button": "\u05E4\u05EA\u05D7 \u05EA\u05E9\u05DC\u05D5\u05DD",
            "pricing.free_trial_days": "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D7\u05D9\u05E0\u05DD \u05E9\u05DC {days} \u05D9\u05DE\u05D9\u05DD",
            "pricing.included_per": "\u05DB\u05DC\u05D5\u05DC \u05DC\u05DB\u05DC {interval}:",
            "pricing.interval.day": "\u05D9\u05D5\u05DD",
            "pricing.interval.lifetime_short": "\u05DC\u05DB\u05DC \u05D4\u05D7\u05D9\u05D9\u05DD",
            "pricing.interval.month": "\u05D7\u05D5\u05D3\u05E9",
            "pricing.interval.period": "\u05EA\u05E7\u05D5\u05E4\u05D4",
            "pricing.interval.week": "\u05E9\u05D1\u05D5\u05E2",
            "pricing.interval.year": "\u05E9\u05E0\u05D4",
            "pricing.money_back": "\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05D4\u05D7\u05D6\u05E8 \u05DB\u05E1\u05E4\u05D9 \u05DC-30 \u05D9\u05DE\u05D9\u05DD",
            "pricing.most_popular": "\u05D4\u05DB\u05D9 \u05E4\u05D5\u05E4\u05D5\u05DC\u05E8\u05D9",
            "pricing.no_prices": "\u05D0\u05D9\u05DF \u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05D6\u05DE\u05D9\u05E0\u05D9\u05DD.",
            "pricing.plan_label.daily": "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D9\u05D5\u05DE\u05D9\u05EA",
            "pricing.plan_label.lifetime": "\u05DC\u05DB\u05DC \u05D4\u05D7\u05D9\u05D9\u05DD",
            "pricing.plan_label.monthly": "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D7\u05D5\u05D3\u05E9\u05D9\u05EA",
            "pricing.plan_label.weekly": "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05E9\u05D1\u05D5\u05E2\u05D9\u05EA",
            "pricing.plan_label.yearly": "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05E9\u05E0\u05EA\u05D9\u05EA",
            "pricing.plans_aria": "\u05EA\u05D5\u05DB\u05E0\u05D9\u05D5\u05EA",
            "session.contact_support": "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DD \u05D4\u05EA\u05DE\u05D9\u05DB\u05D4",
            "session.restore_purchases": "\u05E9\u05D7\u05D6\u05E8 \u05E8\u05DB\u05D9\u05E9\u05D5\u05EA",
            "session.sign_out": "\u05D4\u05EA\u05E0\u05EA\u05E7",
            "session.signed_in_as_prefix": "\u05DE\u05D7\u05D5\u05D1\u05E8 \u05D1\u05EA\u05D5\u05E8",
            "session.signing_out": "\u05DE\u05EA\u05E0\u05EA\u05E7\u2026",
            "support.attachments_label": "\u05E7\u05D1\u05E6\u05D9\u05DD \u05DE\u05E6\u05D5\u05E8\u05E4\u05D9\u05DD",
            "support.close_button": "\u05E1\u05D2\u05D5\u05E8",
            "support.done_button": "\u05D1\u05D5\u05E6\u05E2",
            "support.email_placeholder": "\u05D4\u05D6\u05DF \u05D0\u05EA \u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05E9\u05DC\u05DA",
            "support.heading": "\u05EA\u05DE\u05D9\u05DB\u05D4",
            "support.instruction": "\u05D0\u05E0\u05D0 \u05DE\u05DC\u05D0 \u05D0\u05EA \u05D4\u05D8\u05D5\u05E4\u05E1 \u05DC\u05DE\u05D8\u05D4 \u05DB\u05D3\u05D9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D1\u05E7\u05E9\u05EA \u05D4\u05EA\u05DE\u05D9\u05DB\u05D4 \u05E9\u05DC\u05DA.",
            "support.invalid_email": "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF",
            "support.message_length": "1\u20135000 \u05EA\u05D5\u05D5\u05D9\u05DD",
            "support.message_placeholder": "\u05D4\u05D6\u05DF \u05D0\u05EA \u05D4\u05D5\u05D3\u05E2\u05EA\u05DA",
            "support.required": "\u05E0\u05D3\u05E8\u05E9",
            "support.send_another": "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4 \u05E0\u05D5\u05E1\u05E4\u05EA",
            "support.send_button": "\u05E9\u05DC\u05D7",
            "support.sending": "\u05E9\u05D5\u05DC\u05D7\u2026",
            "support.subject_length": "3\u2013200 \u05EA\u05D5\u05D5\u05D9\u05DD",
            "support.subject_placeholder": "\u05D4\u05D6\u05DF \u05D0\u05EA \u05D4\u05E0\u05D5\u05E9\u05D0 \u05E9\u05DC\u05DA",
            "support.success_heading": "\u05D4\u05D1\u05E7\u05E9\u05D4 \u05E0\u05E9\u05DC\u05D7\u05D4",
            "support.success_message_prefix": "\u05E7\u05D9\u05D1\u05DC\u05E0\u05D5 \u05D0\u05EA \u05D4\u05D5\u05D3\u05E2\u05EA\u05DA \u05D5\u05E0\u05D2\u05D9\u05D1 \u05DC"
        }
    }
    );
    var Ya = {};
    E(Ya, {
        default: () => pr
    });
    var pr, Xa = T( () => {
        pr = {
            "anon.heading_default": "\u0905\u0924\u093F\u0925\u093F \u0915\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
            "anon.try_again": "\u092B\u093F\u0930 \u0938\u0947 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902",
            "auth.back_to_login": "\u0932\u0949\u0917\u093F\u0928 \u092A\u0930 \u0935\u093E\u092A\u0938 \u091C\u093E\u090F\u0902",
            "auth.check_email_message": "\u092A\u0941\u0937\u094D\u091F\u093F \u0915\u094B\u0921 \u0915\u0947 \u0932\u093F\u090F \u0905\u092A\u0928\u093E \u0908\u092E\u0947\u0932 \u0926\u0947\u0916\u0947\u0902\u0964",
            "auth.check_email_title": "\u0905\u092A\u0928\u093E \u0908\u092E\u0947\u0932 \u0926\u0947\u0916\u0947\u0902",
            "auth.confirm_email_title": "\u0905\u092A\u0928\u093E \u0908\u092E\u0947\u0932 \u092A\u0941\u0937\u094D\u091F\u093F \u0915\u0930\u0947\u0902",
            "auth.confirmation_code": "\u092A\u0941\u0937\u094D\u091F\u093F \u0915\u094B\u0921",
            "auth.continue_with_apple": "Apple \u0938\u0947 \u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
            "auth.continue_with_facebook": "Facebook \u0915\u0947 \u0938\u093E\u0925 \u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
            "auth.continue_with_github": "GitHub \u0915\u0947 \u0938\u093E\u0925 \u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
            "auth.continue_with_google": "Google \u0938\u0947 \u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
            "auth.create_account": "\u0916\u093E\u0924\u093E \u092C\u0928\u093E\u090F\u0901",
            "auth.default_subtitle": "\u0938\u092D\u0940 \u0938\u0941\u0935\u093F\u0927\u093E\u0913\u0902 \u0924\u0915 \u092A\u0939\u0941\u0901\u091A\u0928\u0947 \u0914\u0930 \u0905\u092A\u0928\u0947 \u0921\u0947\u091F\u093E \u0915\u094B \u0938\u093F\u0902\u0915 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u0947\u0902\u0964",
            "auth.email": "\u0908\u092E\u0947\u0932 \u092A\u0924\u093E",
            "auth.email_already_registered": "\u092F\u0939 \u0908\u092E\u0947\u0932 \u092A\u0939\u0932\u0947 \u0938\u0947 \u092A\u0902\u091C\u0940\u0915\u0943\u0924 \u0939\u0948\u0964 \u0928\u0940\u091A\u0947 \u0905\u092A\u0928\u0947 \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u092F\u093E \u091C\u093F\u0938 \u0916\u093E\u0924\u0947 \u0938\u0947 \u0906\u092A\u0928\u0947 \u0938\u093E\u0907\u0928 \u0905\u092A \u0915\u093F\u092F\u093E \u0925\u093E, \u0909\u0938\u0938\u0947 \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u0947\u0902\u0964",
            "auth.email_exists": "\u0907\u0938 \u0908\u092E\u0947\u0932 \u0935\u093E\u0932\u093E \u0916\u093E\u0924\u093E \u092A\u0939\u0932\u0947 \u0938\u0947 \u092E\u094C\u091C\u0942\u0926 \u0939\u0948\u0964",
            "auth.email_not_confirmed": "\u0915\u0943\u092A\u092F\u093E \u092A\u0939\u0932\u0947 \u0905\u092A\u0928\u093E \u0908\u092E\u0947\u0932 \u092A\u0941\u0937\u094D\u091F\u093F \u0915\u0930\u0947\u0902\u0964",
            "auth.forgot_password": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u092D\u0942\u0932 \u0917\u090F?",
            "auth.forgot_password_title": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u092D\u0942\u0932 \u0917\u090F?",
            "auth.forgot_subtitle": "\u0905\u092A\u0928\u093E \u0908\u092E\u0947\u0932 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902 \u0914\u0930 \u0939\u092E \u0906\u092A\u0915\u094B \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0930\u0940\u0938\u0947\u091F \u0932\u093F\u0902\u0915 \u092D\u0947\u091C\u0947\u0902\u0917\u0947\u0964",
            "auth.generic_error": "\u0915\u0941\u091B \u0917\u0932\u0924 \u0939\u094B \u0917\u092F\u093E",
            "auth.have_account": "\u0916\u093E\u0924\u093E \u0939\u0948?",
            "auth.hide_password": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u091B\u0941\u092A\u093E\u090F\u0901",
            "auth.identity_already_linked": "\u092F\u0939 \u0916\u093E\u0924\u093E \u092A\u0939\u0932\u0947 \u0938\u0947 \u092A\u0902\u091C\u0940\u0915\u0943\u0924 \u0939\u0948\u0964 \u0928\u0940\u091A\u0947 \u0907\u0938\u0938\u0947 \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u0947\u0902\u0964",
            "auth.invalid_credentials": "\u0905\u092E\u093E\u0928\u094D\u092F \u0908\u092E\u0947\u0932 \u092F\u093E \u092A\u093E\u0938\u0935\u0930\u094D\u0921",
            "auth.invalid_otp": "\u0915\u094B\u0921 \u0905\u092E\u093E\u0928\u094D\u092F \u092F\u093E \u0938\u092E\u093E\u092A\u094D\u0924 \u0939\u094B \u091A\u0941\u0915\u093E \u0939\u0948\u0964",
            "auth.last_used": "\u092A\u093F\u091B\u0932\u0940 \u092C\u093E\u0930 \xB7 {email}",
            "auth.last_used_no_email": "\u092A\u093F\u091B\u0932\u0940 \u092C\u093E\u0930",
            "auth.link_purchase_subheading": "\u092A\u0939\u0941\u0901\u091A \u092C\u0928\u093E\u090F \u0930\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0939\u092E \u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u0915\u094B \u0906\u092A\u0915\u0947 \u0916\u093E\u0924\u0947 \u0938\u0947 \u091C\u094B\u0921\u093C\u0947\u0902\u0917\u0947\u0964",
            "auth.log_in": "\u0932\u0949\u0917 \u0907\u0928",
            "auth.log_in_link": "\u0932\u0949\u0917 \u0907\u0928",
            "auth.login_continue_purchase": "\u0905\u092A\u0928\u0940 \u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u091C\u093E\u0930\u0940 \u0930\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0932\u0949\u0917 \u0907\u0928 \u0915\u0930\u0947\u0902",
            "auth.network_error": "\u0928\u0947\u091F\u0935\u0930\u094D\u0915 \u0924\u094D\u0930\u0941\u091F\u093F\u0964 \u0905\u092A\u0928\u093E \u0915\u0928\u0947\u0915\u094D\u0936\u0928 \u091C\u093E\u0901\u091A\u0915\u0930 \u092A\u0941\u0928\u0903 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902\u0964",
            "auth.no_account": "\u0916\u093E\u0924\u093E \u0928\u0939\u0940\u0902 \u0939\u0948?",
            "auth.or": "\u092F\u093E",
            "auth.password": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921",
            "auth.passwords_mismatch": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u092E\u0947\u0932 \u0928\u0939\u0940\u0902 \u0916\u093E\u0924\u0947",
            "auth.rate_limited": "\u092C\u0939\u0941\u0924 \u0905\u0927\u093F\u0915 \u0905\u0928\u0941\u0930\u094B\u0927\u0964 \u092C\u093E\u0926 \u092E\u0947\u0902 \u092A\u0941\u0928\u0903 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902\u0964",
            "auth.repeat_password": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0926\u094B\u0939\u0930\u093E\u090F\u0901",
            "auth.reset_link_valid": "\u092F\u0939 \u0932\u093F\u0902\u0915 1 \u0918\u0902\u091F\u0947 \u0915\u0947 \u0932\u093F\u090F \u092E\u093E\u0928\u094D\u092F \u0939\u0948\u0964",
            "auth.reset_password_title": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0930\u0940\u0938\u0947\u091F \u0915\u0930\u0947\u0902",
            "auth.reset_sent_message": "\u092F\u0926\u093F \u0935\u0939 \u0908\u092E\u0947\u0932 \u092E\u094C\u091C\u0942\u0926 \u0939\u0948, \u0924\u094B \u0930\u0940\u0938\u0947\u091F \u0915\u094B\u0921 \u092D\u0947\u091C \u0926\u093F\u092F\u093E \u0917\u092F\u093E \u0939\u0948\u0964",
            "auth.reset_sent_subtitle": "\u0939\u092E\u0928\u0947 \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0930\u0940\u0938\u0947\u091F \u0932\u093F\u0902\u0915 \u092D\u0947\u091C\u093E \u0939\u0948\u0964 \u0908\u092E\u0947\u0932 \u092E\u0947\u0902 \u0926\u093F\u090F \u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u0915\u093E \u092A\u093E\u0932\u0928 \u0915\u0930\u0947\u0902\u0964",
            "auth.restore_purchases_heading": "\u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u092A\u0941\u0928\u0930\u094D\u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0915\u0930\u0947\u0902",
            "auth.restore_purchases_subheading": "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u0940 \u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u092A\u0941\u0928\u0930\u094D\u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u093E\u0907\u0928 \u0907\u0928 \u0915\u0930\u0947\u0902\u0964",
            "auth.send_reset": "\u0930\u0940\u0938\u0947\u091F \u0908\u092E\u0947\u0932 \u092D\u0947\u091C\u0947\u0902",
            "auth.service_unavailable": "\u0938\u0947\u0935\u093E \u0905\u0938\u094D\u0925\u093E\u092F\u0940 \u0930\u0942\u092A \u0938\u0947 \u0905\u0928\u0941\u092A\u0932\u092C\u094D\u0927\u0964 \u092C\u093E\u0926 \u092E\u0947\u0902 \u092A\u0941\u0928\u0903 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902\u0964",
            "auth.show_password": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0926\u093F\u0916\u093E\u090F\u0901",
            "auth.sign_out": "\u0938\u093E\u0907\u0928 \u0906\u0909\u091F",
            "auth.sign_up": "\u0938\u093E\u0907\u0928 \u0905\u092A",
            "auth.sign_up_link": "\u0938\u093E\u0907\u0928 \u0905\u092A",
            "auth.signed_in": "\u0938\u093E\u0907\u0928 \u0907\u0928",
            "auth.signin_failed": "\u0938\u093E\u0907\u0928-\u0907\u0928 \u0935\u093F\u092B\u0932",
            "auth.signup_failed": "\u0938\u093E\u0907\u0928-\u0905\u092A \u0935\u093F\u092B\u0932",
            "auth.verify": "\u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0915\u0930\u0947\u0902",
            "auth.weak_password": "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u092C\u0939\u0941\u0924 \u0915\u092E\u091C\u093C\u094B\u0930 \u0939\u0948\u0964",
            "auth.welcome": "\u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948!",
            "auth.welcome_signup": "\u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948!",
            "countdown.d": "\u0926\u093F",
            "countdown.h": "\u0918\u0902",
            "countdown.m": "\u092E\u093F",
            "countdown.s": "\u0938\u0947",
            "cta.close": "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
            "cta.continue": "\u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
            "cta.get_lifetime_access": "\u0906\u091C\u0940\u0935\u0928 \u090F\u0915\u094D\u0938\u0947\u0938 \u092A\u093E\u090F\u0901",
            "cta.get_plan_daily": "\u0926\u0948\u0928\u093F\u0915 \u092A\u094D\u0932\u093E\u0928 \u091A\u0941\u0928\u0947\u0902",
            "cta.get_plan_monthly": "\u092E\u093E\u0938\u093F\u0915 \u092A\u094D\u0932\u093E\u0928 \u091A\u0941\u0928\u0947\u0902",
            "cta.get_plan_weekly": "\u0938\u093E\u092A\u094D\u0924\u093E\u0939\u093F\u0915 \u092A\u094D\u0932\u093E\u0928 \u091A\u0941\u0928\u0947\u0902",
            "cta.get_plan_yearly": "\u0935\u093E\u0930\u094D\u0937\u093F\u0915 \u092A\u094D\u0932\u093E\u0928 \u091A\u0941\u0928\u0947\u0902",
            "cta.start_trial": "{days}-\u0926\u093F\u0928 \u0915\u093E \u092E\u0941\u092B\u093C\u094D\u0924 \u091F\u094D\u0930\u093E\u092F\u0932 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902",
            "modal.close_aria": "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
            "modal.continue": "\u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
            "modal.error_generic": "\u0915\u0941\u091B \u0917\u0932\u0924 \u0939\u094B \u0917\u092F\u093E",
            "modal.loading": "\u0932\u094B\u0921 \u0939\u094B \u0930\u0939\u093E \u0939\u0948\u2026",
            "modal.purchase_restored_subtitle": "\u0938\u092C \u0915\u0941\u091B \u0924\u0948\u092F\u093E\u0930 \u0939\u0948 \u2014 \u0906\u0928\u0902\u0926 \u0932\u0947\u0902!",
            "modal.purchase_restored_title": "\u0935\u093E\u092A\u0938\u0940 \u092A\u0930 \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948",
            "modal.purchase_success_subtitle": "\u0938\u092C \u0915\u0941\u091B \u0924\u0948\u092F\u093E\u0930 \u0939\u0948 \u2014 \u0906\u0928\u0902\u0926 \u0932\u0947\u0902!",
            "modal.purchase_success_title": "\u092D\u0941\u0917\u0924\u093E\u0928 \u092A\u094D\u0930\u093E\u092A\u094D\u0924 \u0939\u0941\u0906",
            "modal.verifying_subscription": "\u0906\u092A\u0915\u0940 \u0938\u0926\u0938\u094D\u092F\u0924\u093E \u091C\u093E\u0901\u091A\u0940 \u091C\u093E \u0930\u0939\u0940 \u0939\u0948\u2026",
            "nav.back": "\u2190 \u0935\u093E\u092A\u0938",
            "nav.back_aria": "\u0935\u093E\u092A\u0938",
            "offer.limited_time": "\u0938\u0940\u092E\u093F\u0924 \u0938\u092E\u092F \u0915\u093E \u0911\u092B\u0930",
            "payment.awaiting_title": "\u0928\u090F \u091F\u0948\u092C \u092E\u0947\u0902 \u092D\u0941\u0917\u0924\u093E\u0928 \u092A\u0942\u0930\u093E \u0915\u0930\u0947\u0902",
            "payment.checking": "\u091C\u093E\u0901\u091A \u0930\u0939\u0947 \u0939\u0948\u0902\u2026",
            "payment.ive_paid": "\u092E\u0948\u0902\u0928\u0947 \u092D\u0941\u0917\u0924\u093E\u0928 \u0915\u0930 \u0926\u093F\u092F\u093E",
            "payment.open_checkout_again": "\u091A\u0947\u0915\u0906\u0909\u091F \u092B\u093F\u0930 \u0938\u0947 \u0916\u094B\u0932\u0947\u0902",
            "payment.open_checkout_button": "\u091A\u0947\u0915\u0906\u0909\u091F \u0916\u094B\u0932\u0947\u0902",
            "pricing.free_trial_days": "{days}-\u0926\u093F\u0928 \u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915 \u092A\u0930\u0940\u0915\u094D\u0937\u0923",
            "pricing.included_per": "\u092A\u094D\u0930\u0924\u093F \u0936\u093E\u092E\u093F\u0932 {interval}:",
            "pricing.interval.day": "\u0926\u093F\u0928",
            "pricing.interval.lifetime_short": "\u0906\u091C\u0940\u0935\u0928",
            "pricing.interval.month": "\u092E\u0939\u0940\u0928\u093E",
            "pricing.interval.period": "\u0905\u0935\u0927\u093F",
            "pricing.interval.week": "\u0938\u092A\u094D\u0924\u093E\u0939",
            "pricing.interval.year": "\u0935\u0930\u094D\u0937",
            "pricing.money_back": "30 \u0926\u093F\u0928 \u0915\u0940 \u092E\u0928\u0940-\u092C\u0948\u0915 \u0917\u093E\u0930\u0902\u091F\u0940",
            "pricing.most_popular": "\u0938\u092C\u0938\u0947 \u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F",
            "pricing.no_prices": "\u0915\u094B\u0908 \u092E\u0942\u0932\u094D\u092F \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902\u0964",
            "pricing.plan_label.daily": "\u0926\u0948\u0928\u093F\u0915 \u092A\u094D\u0932\u093E\u0928",
            "pricing.plan_label.lifetime": "\u0906\u091C\u0940\u0935\u0928",
            "pricing.plan_label.monthly": "\u092E\u093E\u0938\u093F\u0915 \u092A\u094D\u0932\u093E\u0928",
            "pricing.plan_label.weekly": "\u0938\u093E\u092A\u094D\u0924\u093E\u0939\u093F\u0915 \u092A\u094D\u0932\u093E\u0928",
            "pricing.plan_label.yearly": "\u0935\u093E\u0930\u094D\u0937\u093F\u0915 \u092A\u094D\u0932\u093E\u0928",
            "pricing.plans_aria": "\u092F\u094B\u091C\u0928\u093E\u090F\u0901",
            "session.contact_support": "\u0938\u0939\u093E\u092F\u0924\u093E \u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902",
            "session.restore_purchases": "\u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u092A\u0941\u0928\u0930\u094D\u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0915\u0930\u0947\u0902",
            "session.sign_out": "\u0938\u093E\u0907\u0928 \u0906\u0909\u091F",
            "session.signed_in_as_prefix": "\u0915\u0947 \u0930\u0942\u092A \u092E\u0947\u0902 \u0938\u093E\u0907\u0928 \u0907\u0928",
            "session.signing_out": "\u0938\u093E\u0907\u0928 \u0906\u0909\u091F \u0939\u094B \u0930\u0939\u093E \u0939\u0948\u2026",
            "support.attachments_label": "\u0905\u091F\u0948\u091A\u092E\u0947\u0902\u091F",
            "support.close_button": "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
            "support.done_button": "\u092A\u0942\u0930\u093E",
            "support.email_placeholder": "\u0905\u092A\u0928\u093E \u0908\u092E\u0947\u0932 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902",
            "support.heading": "\u0938\u0939\u093E\u092F\u0924\u093E",
            "support.instruction": "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u0938\u0939\u093E\u092F\u0924\u093E \u0905\u0928\u0941\u0930\u094B\u0927 \u0938\u092C\u092E\u093F\u091F \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0928\u0940\u091A\u0947 \u0926\u093F\u092F\u093E \u0917\u092F\u093E \u092B\u093C\u0949\u0930\u094D\u092E \u092D\u0930\u0947\u0902\u0964",
            "support.invalid_email": "\u0905\u092E\u093E\u0928\u094D\u092F \u0908\u092E\u0947\u0932",
            "support.message_length": "1\u20135000 \u0935\u0930\u094D\u0923",
            "support.message_placeholder": "\u0905\u092A\u0928\u093E \u0938\u0902\u0926\u0947\u0936 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902",
            "support.required": "\u0906\u0935\u0936\u094D\u092F\u0915",
            "support.send_another": "\u090F\u0915 \u0914\u0930 \u0905\u0928\u0941\u0930\u094B\u0927 \u092D\u0947\u091C\u0947\u0902",
            "support.send_button": "\u092D\u0947\u091C\u0947\u0902",
            "support.sending": "\u092D\u0947\u091C\u093E \u091C\u093E \u0930\u0939\u093E \u0939\u0948\u2026",
            "support.subject_length": "3\u2013200 \u0935\u0930\u094D\u0923",
            "support.subject_placeholder": "\u0905\u092A\u0928\u093E \u0935\u093F\u0937\u092F \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902",
            "support.success_heading": "\u0905\u0928\u0941\u0930\u094B\u0927 \u0938\u092C\u092E\u093F\u091F \u0915\u093F\u092F\u093E \u0917\u092F\u093E",
            "support.success_message_prefix": "\u0939\u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u0902\u0926\u0947\u0936 \u092E\u093F\u0932 \u0917\u092F\u093E \u0939\u0948 \u0914\u0930 \u0939\u092E \u091C\u0935\u093E\u092C \u0926\u0947\u0902\u0917\u0947"
        }
    }
    );
    var Qa = {};
    E(Qa, {
        default: () => dr
    });
    var dr, ei = T( () => {
        dr = {
            "anon.heading_default": "Folytat\xE1s vend\xE9gk\xE9nt",
            "anon.try_again": "Pr\xF3b\xE1lja \xFAjra",
            "auth.back_to_login": "Vissza a bejelentkez\xE9shez",
            "auth.check_email_message": "N\xE9zze meg az e-mailjeit \u2014 k\xFCldt\xFCnk egy meger\u0151s\xEDt\u0151 k\xF3dot.",
            "auth.check_email_title": "Ellen\u0151rizze az e-mailj\xE9t",
            "auth.confirm_email_title": "Er\u0151s\xEDtse meg e-mail-c\xEDm\xE9t",
            "auth.confirmation_code": "Meger\u0151s\xEDt\u0151 k\xF3d",
            "auth.continue_with_apple": "Folytat\xE1s Apple-lel",
            "auth.continue_with_facebook": "Folytat\xE1s Facebookkal",
            "auth.continue_with_github": "Folytat\xE1s GitHubbal",
            "auth.continue_with_google": "Folytat\xE1s Google-lel",
            "auth.create_account": "Fi\xF3k l\xE9trehoz\xE1sa",
            "auth.default_subtitle": "Jelentkezzen be az \xF6sszes funkci\xF3hoz val\xF3 hozz\xE1f\xE9r\xE9shez \xE9s az adatok szinkroniz\xE1l\xE1s\xE1hoz.",
            "auth.email": "E-mail c\xEDm",
            "auth.email_already_registered": "Ez az e-mail m\xE1r regisztr\xE1lva van. Jelentkezzen be al\xE1bb a jelszav\xE1val vagy azzal a fi\xF3kkal, amellyel regisztr\xE1lt.",
            "auth.email_exists": "Ezzel az e-mail-c\xEDmmel m\xE1r l\xE9tezik fi\xF3k.",
            "auth.email_not_confirmed": "El\u0151sz\xF6r er\u0151s\xEDtse meg az e-mail-c\xEDm\xE9t.",
            "auth.forgot_password": "Elfelejtette a jelszav\xE1t?",
            "auth.forgot_password_title": "Elfelejtette a jelszav\xE1t?",
            "auth.forgot_subtitle": "Adja meg az e-mail c\xEDm\xE9t \xE9s k\xFCld\xFCnk egy jelsz\xF3-vissza\xE1ll\xEDt\xF3 linket.",
            "auth.generic_error": "Valami hiba t\xF6rt\xE9nt",
            "auth.have_account": "Van m\xE1r fi\xF3kja?",
            "auth.hide_password": "Jelsz\xF3 elrejt\xE9se",
            "auth.identity_already_linked": "Ez a fi\xF3k m\xE1r regisztr\xE1lva van. Jelentkezzen be vele al\xE1bb.",
            "auth.invalid_credentials": "\xC9rv\xE9nytelen e-mail vagy jelsz\xF3",
            "auth.invalid_otp": "A k\xF3d \xE9rv\xE9nytelen vagy lej\xE1rt.",
            "auth.last_used": "Legut\xF3bb \xB7 {email}",
            "auth.last_used_no_email": "Legut\xF3bb",
            "auth.link_purchase_subheading": "A v\xE1s\xE1rl\xE1st a fi\xF3kj\xE1hoz kapcsoljuk, hogy meg\u0151rizze a hozz\xE1f\xE9r\xE9st.",
            "auth.log_in": "Bejelentkez\xE9s",
            "auth.log_in_link": "Bejelentkez\xE9s",
            "auth.login_continue_purchase": "Jelentkezzen be a v\xE1s\xE1rl\xE1s folytat\xE1s\xE1hoz",
            "auth.network_error": "H\xE1l\xF3zati hiba. Ellen\u0151rizze a kapcsolatot \xE9s pr\xF3b\xE1lja \xFAjra.",
            "auth.no_account": "Nincs m\xE9g fi\xF3kja?",
            "auth.or": "vagy",
            "auth.password": "Jelsz\xF3",
            "auth.passwords_mismatch": "A jelszavak nem egyeznek",
            "auth.rate_limited": "T\xFAl sok k\xE9r\xE9s. Pr\xF3b\xE1lja meg k\xE9s\u0151bb.",
            "auth.repeat_password": "Jelsz\xF3 meger\u0151s\xEDt\xE9se",
            "auth.reset_link_valid": "A link 1 \xF3r\xE1n \xE1t \xE9rv\xE9nyes.",
            "auth.reset_password_title": "Jelsz\xF3 vissza\xE1ll\xEDt\xE1sa",
            "auth.reset_sent_message": "Ha ez az e-mail l\xE9tezik, elk\xFCldt\xFCk a vissza\xE1ll\xEDt\xF3 k\xF3dot.",
            "auth.reset_sent_subtitle": "Elk\xFCldt\xFCk a jelsz\xF3-vissza\xE1ll\xEDt\xF3 linket. K\xF6vesse az e-mailben tal\xE1lhat\xF3 utas\xEDt\xE1sokat.",
            "auth.restore_purchases_heading": "V\xE1s\xE1rl\xE1sok vissza\xE1ll\xEDt\xE1sa",
            "auth.restore_purchases_subheading": "Jelentkezzen be a v\xE1s\xE1rl\xE1sai vissza\xE1ll\xEDt\xE1s\xE1hoz.",
            "auth.send_reset": "Vissza\xE1ll\xEDt\xF3 e-mail k\xFCld\xE9se",
            "auth.service_unavailable": "A szolg\xE1ltat\xE1s ideiglenesen nem \xE9rhet\u0151 el. Pr\xF3b\xE1lja k\xE9s\u0151bb.",
            "auth.show_password": "Jelsz\xF3 megjelen\xEDt\xE9se",
            "auth.sign_out": "Kijelentkez\xE9s",
            "auth.sign_up": "Regisztr\xE1ci\xF3",
            "auth.sign_up_link": "Regisztr\xE1ci\xF3",
            "auth.signed_in": "Bejelentkezve",
            "auth.signin_failed": "A bejelentkez\xE9s sikertelen",
            "auth.signup_failed": "A regisztr\xE1ci\xF3 sikertelen",
            "auth.verify": "Meger\u0151s\xEDt\xE9s",
            "auth.weak_password": "A jelsz\xF3 t\xFAl gyenge.",
            "auth.welcome": "\xDCdv\xF6z\xF6lj\xFCk!",
            "auth.welcome_signup": "\xDCdv\xF6z\xF6lj\xFCk!",
            "cta.close": "Bez\xE1r\xE1s",
            "cta.continue": "Folytat\xE1s",
            "cta.get_lifetime_access": "\xC9lethosszig tart\xF3 hozz\xE1f\xE9r\xE9s",
            "cta.get_plan_daily": "Napi csomag v\xE1laszt\xE1sa",
            "cta.get_plan_monthly": "Havi csomag v\xE1laszt\xE1sa",
            "cta.get_plan_weekly": "Heti csomag v\xE1laszt\xE1sa",
            "cta.get_plan_yearly": "\xC9ves csomag v\xE1laszt\xE1sa",
            "cta.start_trial": "{days} napos ingyenes pr\xF3ba ind\xEDt\xE1sa",
            "modal.close_aria": "Bez\xE1r\xE1s",
            "modal.continue": "Folytat\xE1s",
            "modal.error_generic": "Valami hiba t\xF6rt\xE9nt",
            "modal.loading": "Bet\xF6lt\xE9s\u2026",
            "modal.purchase_restored_subtitle": "Minden k\xE9szen \xE1ll \u2014 j\xF3 haszn\xE1latot!",
            "modal.purchase_restored_title": "\xDCdv\xF6z\xF6lj\xFCk \xFAjra",
            "modal.purchase_success_subtitle": "Minden k\xE9szen \xE1ll \u2014 j\xF3 haszn\xE1latot!",
            "modal.purchase_success_title": "Fizet\xE9s be\xE9rkezett",
            "modal.verifying_subscription": "El\u0151fizet\xE9s ellen\u0151rz\xE9se\u2026",
            "nav.back": "\u2190 Vissza",
            "nav.back_aria": "Vissza",
            "offer.limited_time": "Id\u0151szakos aj\xE1nlat",
            "payment.awaiting_title": "Fejezze be a fizet\xE9st az \xFAj lapon",
            "payment.checking": "Ellen\u0151rz\xE9s\u2026",
            "payment.ive_paid": "Fizettem",
            "payment.open_checkout_again": "P\xE9nzt\xE1r \xFAjra megnyit\xE1sa",
            "payment.open_checkout_button": "P\xE9nzt\xE1r megnyit\xE1sa",
            "pricing.free_trial_days": "{days} napos ingyenes pr\xF3baverzi\xF3",
            "pricing.included_per": "Tartalmazza {interval}:",
            "pricing.interval.day": "nap",
            "pricing.interval.lifetime_short": "\xE9lethosszig",
            "pricing.interval.month": "h\xF3nap",
            "pricing.interval.period": "id\u0151szak",
            "pricing.interval.week": "h\xE9t",
            "pricing.interval.year": "\xE9v",
            "pricing.money_back": "30 napos p\xE9nzvisszafizet\xE9si garancia",
            "pricing.most_popular": "Legn\xE9pszer\u0171bb",
            "pricing.no_prices": "Nincsenek el\xE9rhet\u0151 \xE1rak.",
            "pricing.plan_label.daily": "NAPI CSOMAG",
            "pricing.plan_label.lifetime": "\xE9lethosszig",
            "pricing.plan_label.monthly": "havi csomag",
            "pricing.plan_label.weekly": "heti csomag",
            "pricing.plan_label.yearly": "\xE9ves csomag",
            "pricing.plans_aria": "Csomagok",
            "session.contact_support": "T\xE1mogat\xE1s",
            "session.restore_purchases": "V\xE1s\xE1rl\xE1sok vissza\xE1ll\xEDt\xE1sa",
            "session.sign_out": "Kijelentkez\xE9s",
            "session.signed_in_as_prefix": "Bejelentkezve mint",
            "session.signing_out": "Kijelentkez\xE9s\u2026",
            "support.attachments_label": "Mell\xE9kletek",
            "support.close_button": "Bez\xE1r\xE1s",
            "support.done_button": "K\xE9sz",
            "support.email_placeholder": "Adja meg az e-mail c\xEDm\xE9t",
            "support.heading": "T\xE1mogat\xE1s",
            "support.instruction": "K\xE9rj\xFCk, t\xF6ltse ki az al\xE1bbi \u0171rlapot a t\xE1mogat\xE1si k\xE9r\xE9s elk\xFCld\xE9s\xE9hez.",
            "support.invalid_email": "\xC9rv\xE9nytelen e-mail",
            "support.message_length": "1\u20135000 karakter",
            "support.message_placeholder": "Adja meg az \xFCzenetet",
            "support.required": "K\xF6telez\u0151",
            "support.send_another": "\xDAjabb k\xE9r\xE9s k\xFCld\xE9se",
            "support.send_button": "K\xFCld\xE9s",
            "support.sending": "K\xFCld\xE9s\u2026",
            "support.subject_length": "3\u2013200 karakter",
            "support.subject_placeholder": "Adja meg a t\xE1rgyat",
            "support.success_heading": "K\xE9r\xE9s elk\xFCldve",
            "support.success_message_prefix": "Megkaptuk az \xFCzenet\xE9t \xE9s v\xE1laszolunk a k\xF6vetkez\u0151 c\xEDmre:"
        }
    }
    );
    var ti = {};
    E(ti, {
        default: () => hr
    });
    var hr, ai = T( () => {
        hr = {
            "anon.heading_default": "Lanjutkan sebagai tamu",
            "anon.try_again": "Coba lagi",
            "auth.back_to_login": "Kembali ke login",
            "auth.check_email_message": "Periksa email Anda untuk kode konfirmasi.",
            "auth.check_email_title": "Periksa email Anda",
            "auth.confirm_email_title": "Konfirmasi email Anda",
            "auth.confirmation_code": "Kode konfirmasi",
            "auth.continue_with_apple": "Lanjutkan dengan Apple",
            "auth.continue_with_facebook": "Lanjutkan dengan Facebook",
            "auth.continue_with_github": "Lanjutkan dengan GitHub",
            "auth.continue_with_google": "Lanjutkan dengan Google",
            "auth.create_account": "Buat akun",
            "auth.default_subtitle": "Masuk untuk mengakses semua fitur dan menyinkronkan data Anda.",
            "auth.email": "Alamat email",
            "auth.email_already_registered": "Email ini sudah terdaftar. Masuk di bawah dengan kata sandi atau akun yang Anda gunakan saat mendaftar.",
            "auth.email_exists": "Akun dengan email ini sudah ada.",
            "auth.email_not_confirmed": "Konfirmasi email Anda terlebih dahulu.",
            "auth.forgot_password": "Lupa kata sandi?",
            "auth.forgot_password_title": "Lupa kata sandi?",
            "auth.forgot_subtitle": "Masukkan email Anda dan kami akan mengirimkan tautan reset kata sandi.",
            "auth.generic_error": "Terjadi kesalahan",
            "auth.have_account": "Sudah punya akun?",
            "auth.hide_password": "Sembunyikan kata sandi",
            "auth.identity_already_linked": "Akun ini sudah terdaftar. Masuk dengan akun ini di bawah.",
            "auth.invalid_credentials": "Email atau kata sandi salah",
            "auth.invalid_otp": "Kode tidak valid atau kedaluwarsa.",
            "auth.last_used": "Terakhir dipakai \xB7 {email}",
            "auth.last_used_no_email": "Terakhir dipakai",
            "auth.link_purchase_subheading": "Kami akan menautkan pembelian ke akun Anda agar akses tetap terjaga.",
            "auth.log_in": "Masuk",
            "auth.log_in_link": "Masuk",
            "auth.login_continue_purchase": "Masuk untuk melanjutkan pembelian Anda",
            "auth.network_error": "Kesalahan jaringan. Periksa koneksi Anda dan coba lagi.",
            "auth.no_account": "Belum punya akun?",
            "auth.or": "atau",
            "auth.password": "Kata sandi",
            "auth.passwords_mismatch": "Kata sandi tidak cocok",
            "auth.rate_limited": "Terlalu banyak permintaan. Coba lagi nanti.",
            "auth.repeat_password": "Ulangi kata sandi",
            "auth.reset_link_valid": "Tautan berlaku selama 1 jam.",
            "auth.reset_password_title": "Atur ulang kata sandi",
            "auth.reset_sent_message": "Jika email tersebut ada, kode reset telah dikirim.",
            "auth.reset_sent_subtitle": "Kami telah mengirim tautan reset kata sandi. Ikuti petunjuk di email.",
            "auth.restore_purchases_heading": "Pulihkan pembelian",
            "auth.restore_purchases_subheading": "Silakan masuk untuk memulihkan pembelian Anda.",
            "auth.send_reset": "Kirim email reset",
            "auth.service_unavailable": "Layanan sementara tidak tersedia. Coba lagi nanti.",
            "auth.show_password": "Tampilkan kata sandi",
            "auth.sign_out": "Keluar",
            "auth.sign_up": "Daftar",
            "auth.sign_up_link": "Daftar",
            "auth.signed_in": "Masuk",
            "auth.signin_failed": "Masuk gagal",
            "auth.signup_failed": "Pendaftaran gagal",
            "auth.verify": "Verifikasi",
            "auth.weak_password": "Kata sandi terlalu lemah.",
            "auth.welcome": "Selamat datang!",
            "auth.welcome_signup": "Selamat datang!",
            "cta.close": "Tutup",
            "cta.continue": "Lanjutkan",
            "cta.get_lifetime_access": "Dapatkan akses seumur hidup",
            "cta.get_plan_daily": "Dapatkan paket harian",
            "cta.get_plan_monthly": "Dapatkan paket bulanan",
            "cta.get_plan_weekly": "Dapatkan paket mingguan",
            "cta.get_plan_yearly": "Dapatkan paket tahunan",
            "cta.start_trial": "Mulai uji coba gratis {days} hari",
            "modal.close_aria": "Tutup",
            "modal.continue": "Lanjutkan",
            "modal.error_generic": "Terjadi kesalahan",
            "modal.loading": "Memuat\u2026",
            "modal.purchase_restored_subtitle": "Semua siap \u2014 selamat menikmati!",
            "modal.purchase_restored_title": "Selamat datang kembali",
            "modal.purchase_success_subtitle": "Semua siap \u2014 selamat menikmati!",
            "modal.purchase_success_title": "Pembayaran diterima",
            "modal.verifying_subscription": "Memeriksa langganan Anda\u2026",
            "nav.back": "\u2190 Kembali",
            "nav.back_aria": "Kembali",
            "offer.limited_time": "Penawaran terbatas",
            "payment.awaiting_title": "Selesaikan pembayaran di tab baru",
            "payment.checking": "Memeriksa\u2026",
            "payment.ive_paid": "Saya sudah membayar",
            "payment.open_checkout_again": "Buka pembayaran lagi",
            "payment.open_checkout_button": "Buka pembayaran",
            "pricing.free_trial_days": "Uji coba gratis {days} hari",
            "pricing.included_per": "Termasuk per {interval}:",
            "pricing.interval.day": "hari",
            "pricing.interval.lifetime_short": "seumur hidup",
            "pricing.interval.month": "bulan",
            "pricing.interval.period": "periode",
            "pricing.interval.week": "minggu",
            "pricing.interval.year": "tahun",
            "pricing.money_back": "Jaminan uang kembali 30 hari",
            "pricing.most_popular": "Paling populer",
            "pricing.no_prices": "Tidak ada harga tersedia.",
            "pricing.plan_label.daily": "PAKET HARIAN",
            "pricing.plan_label.lifetime": "seumur hidup",
            "pricing.plan_label.monthly": "paket bulanan",
            "pricing.plan_label.weekly": "paket mingguan",
            "pricing.plan_label.yearly": "paket tahunan",
            "pricing.plans_aria": "Paket",
            "session.contact_support": "Hubungi dukungan",
            "session.restore_purchases": "Pulihkan pembelian",
            "session.sign_out": "Keluar",
            "session.signed_in_as_prefix": "Masuk sebagai",
            "session.signing_out": "Keluar\u2026",
            "support.attachments_label": "Lampiran",
            "support.close_button": "Tutup",
            "support.done_button": "Selesai",
            "support.email_placeholder": "Masukkan email Anda",
            "support.heading": "Dukungan",
            "support.instruction": "Silakan isi formulir di bawah ini untuk mengirimkan permintaan dukungan Anda.",
            "support.invalid_email": "Email tidak valid",
            "support.message_length": "1\u20135000 karakter",
            "support.message_placeholder": "Masukkan pesan Anda",
            "support.required": "Wajib",
            "support.send_another": "Kirim permintaan lain",
            "support.send_button": "Kirim",
            "support.sending": "Mengirim\u2026",
            "support.subject_length": "3\u2013200 karakter",
            "support.subject_placeholder": "Masukkan subjek Anda",
            "support.success_heading": "Permintaan terkirim",
            "support.success_message_prefix": "Kami telah menerima pesan Anda dan akan merespons ke"
        }
    }
    );
    var ii = {};
    E(ii, {
        default: () => gr
    });
    var gr, ni = T( () => {
        gr = {
            "anon.description_default": "Configurazione della sessione ospite\u2026",
            "anon.heading_default": "Continua come ospite",
            "anon.try_again": "Riprova",
            "auth.back_to_login": "Torna all'accesso",
            "auth.check_email_message": "Controlla la tua email per il codice di conferma.",
            "auth.check_email_title": "Controlla la tua email",
            "auth.confirm_email_subtitle": "Inserisci il codice che abbiamo inviato alla tua email per completare la registrazione.",
            "auth.confirm_email_title": "Conferma la tua email",
            "auth.confirmation_code": "Codice di conferma",
            "auth.continue_with_apple": "Continua con Apple",
            "auth.continue_with_facebook": "Continua con Facebook",
            "auth.continue_with_github": "Continua con GitHub",
            "auth.continue_with_google": "Continua con Google",
            "auth.create_account": "Crea account",
            "auth.default_subtitle": "Acceda per accedere a tutte le funzionalit\xE0 e sincronizzare i suoi dati.",
            "auth.email": "Indirizzo e-mail",
            "auth.email_already_registered": "Questa email \xE8 gi\xE0 registrata. Accedi qui sotto con la password o l'account che hai usato per registrarti.",
            "auth.email_exists": "Esiste gi\xE0 un account con questa email.",
            "auth.email_not_confirmed": "Conferma prima la tua email.",
            "auth.forgot_password": "Ha dimenticato la password?",
            "auth.forgot_password_title": "Ha dimenticato la password?",
            "auth.forgot_subtitle": "Inserisca il suo indirizzo e-mail e le invieremo un collegamento per reimpostare la password.",
            "auth.generic_error": "Qualcosa \xE8 andato storto",
            "auth.have_account": "Ha un account?",
            "auth.hide_password": "Nascondi password",
            "auth.identity_already_linked": "Questo account \xE8 gi\xE0 registrato. Accedi con esso qui sotto.",
            "auth.invalid_credentials": "Email o password non validi",
            "auth.invalid_otp": "Il codice non \xE8 valido o \xE8 scaduto.",
            "auth.last_used": "Ultima volta \xB7 {email}",
            "auth.last_used_no_email": "Ultima volta",
            "auth.link_purchase_subheading": "Collegheremo l'acquisto al tuo account per mantenere l'accesso.",
            "auth.log_in": "Accedi",
            "auth.log_in_link": "Accedi",
            "auth.login_continue_purchase": "Acceda per continuare il suo acquisto",
            "auth.network_error": "Errore di rete. Controlla la connessione e riprova.",
            "auth.new_password_optional": "Nuova password (opzionale \u2014 solo per il reset)",
            "auth.no_account": "Non ha un account?",
            "auth.or": "oppure",
            "auth.password": "Password",
            "auth.passwords_mismatch": "Le password non corrispondono",
            "auth.rate_limited": "Troppe richieste. Riprova pi\xF9 tardi.",
            "auth.repeat_password": "Ripeti password",
            "auth.reset_link_valid": "Il link \xE8 valido per 1 ora.",
            "auth.reset_password_subtitle": "Inserisci il codice dall'email e una nuova password.",
            "auth.reset_password_title": "Reimposta password",
            "auth.reset_sent_message": "Se l'email esiste, \xE8 stato inviato un codice di reimpostazione.",
            "auth.reset_sent_subtitle": "Abbiamo inviato un link per reimpostare la password. Segui le istruzioni nell'email.",
            "auth.restore_purchases_heading": "Ripristina Acquisti",
            "auth.restore_purchases_subheading": "La preghiamo di accedere per ripristinare i suoi acquisti.",
            "auth.send_reset": "Invia E-mail di Ripristino",
            "auth.service_unavailable": "Servizio temporaneamente non disponibile. Riprova pi\xF9 tardi.",
            "auth.show_password": "Mostra password",
            "auth.sign_out": "Disconnetti",
            "auth.sign_up": "Registrati",
            "auth.sign_up_link": "Registrati",
            "auth.signed_in": "Connesso",
            "auth.signin_failed": "Accesso non riuscito",
            "auth.signup_failed": "Registrazione non riuscita",
            "auth.verify": "Verifica",
            "auth.weak_password": "La password \xE8 troppo debole.",
            "auth.welcome": "Benvenuto!",
            "auth.welcome_signup": "Benvenuto!",
            "cta.close": "Chiudi",
            "cta.continue": "Continua",
            "cta.get_lifetime_access": "Ottieni accesso a vita",
            "cta.get_plan_daily": "Ottieni piano giornaliero",
            "cta.get_plan_generic": "Ottieni piano {interval}",
            "cta.get_plan_monthly": "Ottieni piano mensile",
            "cta.get_plan_weekly": "Ottieni piano settimanale",
            "cta.get_plan_yearly": "Ottieni piano annuale",
            "cta.start_trial": "Inizia Prova Gratuita di {days} Giorni",
            "modal.close_aria": "Chiudi",
            "modal.continue": "Continua",
            "modal.error_generic": "Qualcosa \xE8 andato storto",
            "modal.loading": "Caricamento\u2026",
            "modal.purchase_restored_subtitle": "Tutto pronto \u2014 buon divertimento!",
            "modal.purchase_restored_title": "Bentornato",
            "modal.purchase_success_subtitle": "Tutto pronto \u2014 buon divertimento!",
            "modal.purchase_success_title": "Pagamento ricevuto",
            "modal.verifying_subscription": "Verifica dell'abbonamento\u2026",
            "nav.back": "\u2190 Indietro",
            "nav.back_aria": "Indietro",
            "offer.limited_time": "Offerta a tempo limitato",
            "payment.awaiting_subtitle": "Rileveremo automaticamente il tuo pagamento \u2014 oppure clicca sotto quando hai finito.",
            "payment.awaiting_title": "Completa il pagamento nella nuova scheda",
            "payment.checking": "Verifica\u2026",
            "payment.ive_paid": "Ho pagato",
            "payment.open_checkout_again": "Apri checkout di nuovo",
            "payment.open_checkout_button": "Apri checkout",
            "payment.popup_blocked_message": "Il browser ha bloccato la scheda di checkout. Clicca sotto per aprirla.",
            "payment.popup_blocked_title": "Consenti i pop-up per continuare",
            "payment.popup_help_text": "La finestra di checkout non si \xE8 aperta o \xE8 stata bloccata? Clicca qui per riaprirla.",
            "payment.still_processing": "Il pagamento \xE8 ancora in elaborazione. Riprova tra un momento.",
            "payment.tab_closed_retry": "Scheda chiusa? Riprova",
            "pricing.free_trial_days": "Prova gratuita di {days} giorni",
            "pricing.included_per": "Incluso per {interval}:",
            "pricing.interval.day": "giorno",
            "pricing.interval.lifetime_short": "a vita",
            "pricing.interval.month": "mese",
            "pricing.interval.period": "periodo",
            "pricing.interval.week": "settimana",
            "pricing.interval.year": "anno",
            "pricing.money_back": "Garanzia di rimborso di 30 giorni",
            "pricing.most_popular": "Pi\xF9 popolare",
            "pricing.no_prices": "Nessun prezzo disponibile.",
            "pricing.plan_label.daily": "PIANO GIORNALIERO",
            "pricing.plan_label.lifetime": "a vita",
            "pricing.plan_label.monthly": "piano mensile",
            "pricing.plan_label.weekly": "piano settimanale",
            "pricing.plan_label.yearly": "piano annuale",
            "pricing.plans_aria": "Piani",
            "session.contact_support": "Contatta il supporto",
            "session.restore_purchases": "Ripristina acquisti",
            "session.sign_out": "Disconnetti",
            "session.signed_in_as_prefix": "Connesso come",
            "session.signing_out": "Disconnessione\u2026",
            "support.attachments_aria": "Caricamento allegati",
            "support.attachments_label": "Allegati",
            "support.close_button": "Chiudi",
            "support.done_button": "Fatto",
            "support.dropzone_text": "Trascina qui le immagini o fai clic per selezionarle",
            "support.email_placeholder": "Inserisca il suo indirizzo e-mail",
            "support.file_requirements": "JPEG/PNG/WebP, fino a {max} file, \u2264 {size} MB ciascuno",
            "support.heading": "Supporto",
            "support.instruction": "La preghiamo di compilare il modulo qui sotto per inviare la sua richiesta di supporto.",
            "support.invalid_email": "E-mail non valida",
            "support.invalid_file": "Solo JPEG/PNG/WebP, \u2264 {size} MB ciascuno",
            "support.message_length": "1\u20135000 caratteri",
            "support.message_placeholder": "Inserisca il suo messaggio",
            "support.remove_file_aria": "Rimuovi {filename}",
            "support.required": "Obbligatorio",
            "support.send_another": "Invia un'altra richiesta",
            "support.send_button": "Invia",
            "support.sending": "Invio in corso\u2026",
            "support.sending_as": "Invio come",
            "support.subject_length": "3\u2013200 caratteri",
            "support.subject_placeholder": "Inserisca l'oggetto",
            "support.success_heading": "Richiesta inviata",
            "support.success_message_prefix": "Abbiamo ricevuto il suo messaggio e risponderemo a",
            "support.too_many_files": "Fino a {max} file"
        }
    }
    );
    var ri = {};
    E(ri, {
        default: () => _r
    });
    var _r, si = T( () => {
        _r = {
            "anon.description_default": "\u30B2\u30B9\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u4E2D\u2026",
            "anon.heading_default": "\u30B2\u30B9\u30C8\u3068\u3057\u3066\u7D9A\u3051\u308B",
            "anon.try_again": "\u518D\u8A66\u884C",
            "auth.back_to_login": "\u30ED\u30B0\u30A4\u30F3\u306B\u623B\u308B",
            "auth.check_email_message": "\u78BA\u8A8D\u30B3\u30FC\u30C9\u306E\u30E1\u30FC\u30EB\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",
            "auth.check_email_title": "\u30E1\u30FC\u30EB\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044",
            "auth.confirm_email_subtitle": "\u30E1\u30FC\u30EB\u306B\u9001\u4FE1\u3057\u305F\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u30A2\u30AB\u30A6\u30F3\u30C8\u4F5C\u6210\u3092\u5B8C\u4E86\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            "auth.confirm_email_title": "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u78BA\u8A8D",
            "auth.confirmation_code": "\u78BA\u8A8D\u30B3\u30FC\u30C9",
            "auth.continue_with_apple": "Apple\u3067\u7D9A\u884C",
            "auth.continue_with_facebook": "Facebook\u3067\u7D9A\u3051\u308B",
            "auth.continue_with_github": "GitHub\u3067\u7D9A\u3051\u308B",
            "auth.continue_with_google": "Google\u3067\u7D9A\u884C",
            "auth.create_account": "\u30A2\u30AB\u30A6\u30F3\u30C8\u4F5C\u6210",
            "auth.default_subtitle": "\u3059\u3079\u3066\u306E\u6A5F\u80FD\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u30C7\u30FC\u30BF\u3092\u540C\u671F\u3059\u308B\u305F\u3081\u306B\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            "auth.email": "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
            "auth.email_already_registered": "\u3053\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306F\u65E2\u306B\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u4E0B\u8A18\u304B\u3089\u30D1\u30B9\u30EF\u30FC\u30C9\u3001\u307E\u305F\u306F\u767B\u9332\u306B\u4F7F\u7528\u3057\u305F\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            "auth.email_exists": "\u3053\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u65E2\u306B\u5B58\u5728\u3057\u307E\u3059\u3002",
            "auth.email_not_confirmed": "\u5148\u306B\u30E1\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            "auth.forgot_password": "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u304A\u5FD8\u308C\u3067\u3059\u304B?",
            "auth.forgot_password_title": "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u304A\u5FD8\u308C\u3067\u3059\u304B?",
            "auth.forgot_subtitle": "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3059\u308B\u3068\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8\u30EA\u30F3\u30AF\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002",
            "auth.generic_error": "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
            "auth.have_account": "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u304A\u6301\u3061\u3067\u3059\u304B?",
            "auth.hide_password": "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u975E\u8868\u793A",
            "auth.identity_already_linked": "\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u65E2\u306B\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u4E0B\u8A18\u304B\u3089\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            "auth.invalid_credentials": "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u307E\u305F\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093",
            "auth.invalid_otp": "\u30B3\u30FC\u30C9\u304C\u7121\u52B9\u304B\u671F\u9650\u5207\u308C\u3067\u3059\u3002",
            "auth.last_used": "\u524D\u56DE\u4F7F\u7528 \xB7 {email}",
            "auth.last_used_no_email": "\u524D\u56DE\u4F7F\u7528",
            "auth.link_purchase_subheading": "\u30A2\u30AF\u30BB\u30B9\u3092\u4FDD\u6301\u3059\u308B\u305F\u3081\u3001\u8CFC\u5165\u3092\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u7D10\u4ED8\u3051\u307E\u3059\u3002",
            "auth.log_in": "\u30ED\u30B0\u30A4\u30F3",
            "auth.log_in_link": "\u30ED\u30B0\u30A4\u30F3",
            "auth.login_continue_purchase": "\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u8CFC\u5165\u3092\u7D9A\u3051\u308B",
            "auth.network_error": "\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A8\u30E9\u30FC\u3002\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u3066\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
            "auth.new_password_optional": "\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9 (\u4EFB\u610F \u2014 \u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8\u6642\u306E\u307F)",
            "auth.no_account": "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u304A\u6301\u3061\u3067\u306A\u3044\u3067\u3059\u304B?",
            "auth.or": "\u307E\u305F\u306F",
            "auth.password": "\u30D1\u30B9\u30EF\u30FC\u30C9",
            "auth.passwords_mismatch": "\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u4E00\u81F4\u3057\u307E\u305B\u3093",
            "auth.rate_limited": "\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u591A\u3059\u304E\u307E\u3059\u3002\u5F8C\u3067\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
            "auth.repeat_password": "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u518D\u5165\u529B",
            "auth.reset_link_valid": "\u30EA\u30F3\u30AF\u306E\u6709\u52B9\u671F\u9593\u306F1\u6642\u9593\u3067\u3059\u3002",
            "auth.reset_password_subtitle": "\u30E1\u30FC\u30EB\u306B\u8A18\u8F09\u3055\u308C\u305F\u30B3\u30FC\u30C9\u3068\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            "auth.reset_password_title": "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u30EA\u30BB\u30C3\u30C8",
            "auth.reset_sent_message": "\u305D\u306E\u30E1\u30FC\u30EB\u304C\u5B58\u5728\u3059\u308B\u5834\u5408\u3001\u30EA\u30BB\u30C3\u30C8\u30B3\u30FC\u30C9\u304C\u9001\u4FE1\u3055\u308C\u307E\u3057\u305F\u3002",
            "auth.reset_sent_subtitle": "\u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8\u306E\u30EA\u30F3\u30AF\u3092\u30E1\u30FC\u30EB\u3067\u9001\u4FE1\u3057\u307E\u3057\u305F\u3002\u30E1\u30FC\u30EB\u5185\u306E\u6307\u793A\u306B\u5F93\u3063\u3066\u304F\u3060\u3055\u3044\u3002",
            "auth.restore_purchases_heading": "\u8CFC\u5165\u3092\u5FA9\u5143",
            "auth.restore_purchases_subheading": "\u8CFC\u5165\u3092\u5FA9\u5143\u3059\u308B\u305F\u3081\u306B\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            "auth.send_reset": "\u30EA\u30BB\u30C3\u30C8\u30E1\u30FC\u30EB\u3092\u9001\u4FE1",
            "auth.service_unavailable": "\u30B5\u30FC\u30D3\u30B9\u304C\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002\u3057\u3070\u3089\u304F\u3057\u3066\u304B\u3089\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
            "auth.show_password": "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8868\u793A",
            "auth.sign_out": "\u30B5\u30A4\u30F3\u30A2\u30A6\u30C8",
            "auth.sign_up": "\u65B0\u898F\u767B\u9332",
            "auth.sign_up_link": "\u65B0\u898F\u767B\u9332",
            "auth.signed_in": "\u30B5\u30A4\u30F3\u30A4\u30F3\u4E2D",
            "auth.signin_failed": "\u30B5\u30A4\u30F3\u30A4\u30F3\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
            "auth.signup_failed": "\u30B5\u30A4\u30F3\u30A2\u30C3\u30D7\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
            "auth.verify": "\u78BA\u8A8D",
            "auth.weak_password": "\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5F31\u3059\u304E\u307E\u3059\u3002",
            "auth.welcome": "\u3088\u3046\u3053\u305D!",
            "auth.welcome_signup": "\u3088\u3046\u3053\u305D!",
            "countdown.d": "\u65E5",
            "countdown.h": "\u6642",
            "countdown.m": "\u5206",
            "countdown.s": "\u79D2",
            "cta.close": "\u9589\u3058\u308B",
            "cta.continue": "\u7D9A\u3051\u308B",
            "cta.get_lifetime_access": "\u6C38\u4E45\u30A2\u30AF\u30BB\u30B9\u3092\u53D6\u5F97",
            "cta.get_plan_daily": "\u65E5\u6B21\u30D7\u30E9\u30F3\u3092\u53D6\u5F97",
            "cta.get_plan_generic": "{interval}\u30D7\u30E9\u30F3\u3092\u53D6\u5F97",
            "cta.get_plan_monthly": "\u6708\u6B21\u30D7\u30E9\u30F3\u3092\u53D6\u5F97",
            "cta.get_plan_weekly": "\u9031\u6B21\u30D7\u30E9\u30F3\u3092\u53D6\u5F97",
            "cta.get_plan_yearly": "\u5E74\u6B21\u30D7\u30E9\u30F3\u3092\u53D6\u5F97",
            "cta.start_trial": "{days}\u65E5\u9593\u306E\u7121\u6599\u30C8\u30E9\u30A4\u30A2\u30EB\u3092\u958B\u59CB",
            "modal.close_aria": "\u9589\u3058\u308B",
            "modal.continue": "\u7D9A\u3051\u308B",
            "modal.error_generic": "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
            "modal.loading": "\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",
            "modal.purchase_restored_subtitle": "\u6E96\u5099\u5B8C\u4E86 \u2014 \u304A\u697D\u3057\u307F\u304F\u3060\u3055\u3044\uFF01",
            "modal.purchase_restored_title": "\u304A\u304B\u3048\u308A\u306A\u3055\u3044",
            "modal.purchase_success_subtitle": "\u6E96\u5099\u5B8C\u4E86 \u2014 \u304A\u697D\u3057\u307F\u304F\u3060\u3055\u3044\uFF01",
            "modal.purchase_success_title": "\u304A\u652F\u6255\u3044\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F",
            "modal.verifying_subscription": "\u30B5\u30D6\u30B9\u30AF\u30EA\u30D7\u30B7\u30E7\u30F3\u3092\u78BA\u8A8D\u4E2D\u2026",
            "nav.back": "\u2190 \u623B\u308B",
            "nav.back_aria": "\u623B\u308B",
            "offer.limited_time": "\u671F\u9593\u9650\u5B9A\u30AA\u30D5\u30A1\u30FC",
            "payment.awaiting_subtitle": "\u81EA\u52D5\u7684\u306B\u652F\u6255\u3044\u3092\u691C\u51FA\u3057\u307E\u3059 \u2014 \u307E\u305F\u306F\u5B8C\u4E86\u3057\u305F\u3089\u4E0B\u306E\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            "payment.awaiting_title": "\u65B0\u3057\u3044\u30BF\u30D6\u3067\u652F\u6255\u3044\u3092\u5B8C\u4E86\u3057\u3066\u304F\u3060\u3055\u3044",
            "payment.checking": "\u78BA\u8A8D\u4E2D\u2026",
            "payment.ive_paid": "\u652F\u6255\u3044\u307E\u3057\u305F",
            "payment.open_checkout_again": "\u3082\u3046\u4E00\u5EA6\u30C1\u30A7\u30C3\u30AF\u30A2\u30A6\u30C8\u3092\u958B\u304F",
            "payment.open_checkout_button": "\u30C1\u30A7\u30C3\u30AF\u30A2\u30A6\u30C8\u3092\u958B\u304F",
            "payment.popup_blocked_message": "\u30D6\u30E9\u30A6\u30B6\u304C\u30C1\u30A7\u30C3\u30AF\u30A2\u30A6\u30C8\u30BF\u30D6\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3057\u305F\u3002\u4E0B\u306E\u30DC\u30BF\u30F3\u3067\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002",
            "payment.popup_blocked_title": "\u7D9A\u884C\u3059\u308B\u306B\u306F\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u3092\u8A31\u53EF\u3057\u3066\u304F\u3060\u3055\u3044",
            "payment.popup_help_text": "\u30C1\u30A7\u30C3\u30AF\u30A2\u30A6\u30C8\u753B\u9762\u304C\u958B\u304B\u306A\u304B\u3063\u305F\u3001\u307E\u305F\u306F\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u307E\u3057\u305F\u304B\uFF1F\u3053\u3053\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u518D\u5EA6\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002",
            "payment.still_processing": "\u652F\u6255\u3044\u306F\u307E\u3060\u51E6\u7406\u4E2D\u3067\u3059\u3002\u5C11\u3057\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
            "payment.tab_closed_retry": "\u30BF\u30D6\u3092\u9589\u3058\u305F\uFF1F\u3082\u3046\u4E00\u5EA6\u8A66\u3059",
            "pricing.free_trial_days": "{days}\u65E5\u9593\u7121\u6599\u30C8\u30E9\u30A4\u30A2\u30EB",
            "pricing.included_per": "{interval}\u306B\u542B\u307E\u308C\u308B:",
            "pricing.interval.day": "\u65E5",
            "pricing.interval.lifetime_short": "\u6C38\u4E45",
            "pricing.interval.month": "\u6708",
            "pricing.interval.period": "\u671F\u9593",
            "pricing.interval.week": "\u9031",
            "pricing.interval.year": "\u5E74",
            "pricing.money_back": "30\u65E5\u9593\u8FD4\u91D1\u4FDD\u8A3C",
            "pricing.most_popular": "\u4EBA\u6C17No.1",
            "pricing.no_prices": "\u6599\u91D1\u304C\u3042\u308A\u307E\u305B\u3093\u3002",
            "pricing.plan_label.daily": "\u65E5\u6B21\u30D7\u30E9\u30F3",
            "pricing.plan_label.lifetime": "\u6C38\u4E45",
            "pricing.plan_label.monthly": "\u6708\u9593\u30D7\u30E9\u30F3",
            "pricing.plan_label.weekly": "\u9031\u9593\u30D7\u30E9\u30F3",
            "pricing.plan_label.yearly": "\u5E74\u9593\u30D7\u30E9\u30F3",
            "pricing.plans_aria": "\u30D7\u30E9\u30F3",
            "session.contact_support": "\u30B5\u30DD\u30FC\u30C8\u306B\u9023\u7D61",
            "session.restore_purchases": "\u8CFC\u5165\u3092\u5FA9\u5143",
            "session.sign_out": "\u30B5\u30A4\u30F3\u30A2\u30A6\u30C8",
            "session.signed_in_as_prefix": "\u30B5\u30A4\u30F3\u30A4\u30F3\u4E2D:",
            "session.signing_out": "\u30B5\u30A4\u30F3\u30A2\u30A6\u30C8\u4E2D\u2026",
            "support.attachments_aria": "\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",
            "support.attachments_label": "\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB",
            "support.close_button": "\u9589\u3058\u308B",
            "support.done_button": "\u5B8C\u4E86",
            "support.dropzone_text": "\u753B\u50CF\u3092\u3053\u3053\u306B\u30C9\u30ED\u30C3\u30D7\u307E\u305F\u306F\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u9078\u629E",
            "support.email_placeholder": "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B",
            "support.file_requirements": "JPEG/PNG/WebP\u3001\u6700\u5927 {max} \u500B\u3001\u5404 {size}MB \u4EE5\u4E0B",
            "support.heading": "\u30B5\u30DD\u30FC\u30C8",
            "support.instruction": "\u30B5\u30DD\u30FC\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30D5\u30A9\u30FC\u30E0\u306B\u8A18\u5165\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            "support.invalid_email": "\u7121\u52B9\u306A\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
            "support.invalid_file": "JPEG/PNG/WebP\u306E\u307F\u3001\u5404{size}MB\u4EE5\u4E0B",
            "support.message_length": "1\u301C5000\u6587\u5B57",
            "support.message_placeholder": "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5165\u529B",
            "support.remove_file_aria": "{filename} \u3092\u524A\u9664",
            "support.required": "\u5FC5\u9808",
            "support.send_another": "\u5225\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1",
            "support.send_button": "\u9001\u4FE1",
            "support.sending": "\u9001\u4FE1\u4E2D\u2026",
            "support.sending_as": "\u9001\u4FE1\u5143:",
            "support.subject_length": "3\u301C200\u6587\u5B57",
            "support.subject_placeholder": "\u4EF6\u540D\u3092\u5165\u529B",
            "support.success_heading": "\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F",
            "support.success_message_prefix": "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D7\u3051\u53D6\u308A\u307E\u3057\u305F\u3002\u8FD4\u4FE1\u5148:",
            "support.too_many_files": "\u6700\u5927 {max} \u500B\u307E\u3067"
        }
    }
    );
    var oi = {};
    E(oi, {
        default: () => mr
    });
    var mr, li = T( () => {
        mr = {
            "anon.description_default": "\uAC8C\uC2A4\uD2B8 \uC138\uC158\uC744 \uC124\uC815 \uC911\u2026",
            "anon.heading_default": "\uAC8C\uC2A4\uD2B8\uB85C \uACC4\uC18D",
            "anon.try_again": "\uB2E4\uC2DC \uC2DC\uB3C4",
            "auth.back_to_login": "\uB85C\uADF8\uC778\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30",
            "auth.check_email_message": "\uC774\uBA54\uC77C\uC5D0\uC11C \uD655\uC778 \uCF54\uB4DC\uB97C \uD655\uC778\uD558\uC138\uC694.",
            "auth.check_email_title": "\uC774\uBA54\uC77C\uC744 \uD655\uC778\uD558\uC138\uC694",
            "auth.confirm_email_subtitle": "\uC774\uBA54\uC77C\uB85C \uBCF4\uB0B8 \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC5EC \uAC00\uC785\uC744 \uC644\uB8CC\uD558\uC138\uC694.",
            "auth.confirm_email_title": "\uC774\uBA54\uC77C \uD655\uC778",
            "auth.confirmation_code": "\uD655\uC778 \uCF54\uB4DC",
            "auth.continue_with_apple": "Apple\uB85C \uACC4\uC18D\uD558\uAE30",
            "auth.continue_with_facebook": "Facebook\uC73C\uB85C \uACC4\uC18D",
            "auth.continue_with_github": "GitHub\uB85C \uACC4\uC18D",
            "auth.continue_with_google": "Google\uB85C \uACC4\uC18D\uD558\uAE30",
            "auth.create_account": "\uACC4\uC815 \uB9CC\uB4E4\uAE30",
            "auth.default_subtitle": "\uBAA8\uB4E0 \uAE30\uB2A5\uC5D0 \uC561\uC138\uC2A4\uD558\uACE0 \uB370\uC774\uD130\uB97C \uB3D9\uAE30\uD654\uD558\uB824\uBA74 \uB85C\uADF8\uC778\uD558\uC138\uC694.",
            "auth.email": "\uC774\uBA54\uC77C \uC8FC\uC18C",
            "auth.email_already_registered": "\uC774 \uC774\uBA54\uC77C\uC740 \uC774\uBBF8 \uB4F1\uB85D\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798\uC5D0\uC11C \uBE44\uBC00\uBC88\uD638 \uB610\uB294 \uAC00\uC785\uD560 \uB54C \uC0AC\uC6A9\uD55C \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD558\uC138\uC694.",
            "auth.email_exists": "\uC774 \uC774\uBA54\uC77C\uB85C \uB4F1\uB85D\uB41C \uACC4\uC815\uC774 \uC774\uBBF8 \uC788\uC2B5\uB2C8\uB2E4.",
            "auth.email_not_confirmed": "\uBA3C\uC800 \uC774\uBA54\uC77C\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.",
            "auth.forgot_password": "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?",
            "auth.forgot_password_title": "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?",
            "auth.forgot_subtitle": "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC2DC\uBA74 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.",
            "auth.generic_error": "\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4",
            "auth.have_account": "\uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?",
            "auth.hide_password": "\uBE44\uBC00\uBC88\uD638 \uC228\uAE30\uAE30",
            "auth.identity_already_linked": "\uC774 \uACC4\uC815\uC740 \uC774\uBBF8 \uB4F1\uB85D\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798\uC5D0\uC11C \uB85C\uADF8\uC778\uD558\uC138\uC694.",
            "auth.invalid_credentials": "\uC798\uBABB\uB41C \uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638",
            "auth.invalid_otp": "\uCF54\uB4DC\uAC00 \uC798\uBABB\uB418\uC5C8\uAC70\uB098 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
            "auth.last_used": "\uCD5C\uADFC \uC0AC\uC6A9 \xB7 {email}",
            "auth.last_used_no_email": "\uCD5C\uADFC \uC0AC\uC6A9",
            "auth.link_purchase_subheading": "\uC561\uC138\uC2A4\uB97C \uC720\uC9C0\uD558\uAE30 \uC704\uD574 \uAD6C\uB9E4\uB97C \uACC4\uC815\uC5D0 \uC5F0\uACB0\uD569\uB2C8\uB2E4.",
            "auth.log_in": "\uB85C\uADF8\uC778",
            "auth.log_in_link": "\uB85C\uADF8\uC778",
            "auth.login_continue_purchase": "\uB85C\uADF8\uC778\uD558\uC5EC \uAD6C\uB9E4\uB97C \uACC4\uC18D\uD558\uC138\uC694",
            "auth.network_error": "\uB124\uD2B8\uC6CC\uD06C \uC624\uB958. \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uACE0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.",
            "auth.new_password_optional": "\uC0C8 \uBE44\uBC00\uBC88\uD638 (\uC120\uD0DD \u2014 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uC2DC\uC5D0\uB9CC)",
            "auth.no_account": "\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?",
            "auth.or": "\uB610\uB294",
            "auth.password": "\uBE44\uBC00\uBC88\uD638",
            "auth.passwords_mismatch": "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4",
            "auth.rate_limited": "\uC694\uCCAD\uC774 \uB108\uBB34 \uB9CE\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.",
            "auth.repeat_password": "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC785\uB825",
            "auth.reset_link_valid": "\uB9C1\uD06C\uB294 1\uC2DC\uAC04 \uB3D9\uC548 \uC720\uD6A8\uD569\uB2C8\uB2E4.",
            "auth.reset_password_subtitle": "\uC774\uBA54\uC77C\uC758 \uCF54\uB4DC\uC640 \uC0C8 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.",
            "auth.reset_password_title": "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815",
            "auth.reset_sent_message": "\uD574\uB2F9 \uC774\uBA54\uC77C\uC774 \uC874\uC7AC\uD558\uBA74 \uC7AC\uC124\uC815 \uCF54\uB4DC\uAC00 \uBC1C\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
            "auth.reset_sent_subtitle": "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uBCF4\uB0C8\uC2B5\uB2C8\uB2E4. \uC774\uBA54\uC77C\uC758 \uC548\uB0B4\uB97C \uB530\uB77C\uC8FC\uC138\uC694.",
            "auth.restore_purchases_heading": "\uAD6C\uB9E4 \uBCF5\uC6D0",
            "auth.restore_purchases_subheading": "\uAD6C\uB9E4\uB97C \uBCF5\uC6D0\uD558\uB824\uBA74 \uB85C\uADF8\uC778\uD558\uC138\uC694.",
            "auth.send_reset": "\uC7AC\uC124\uC815 \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30",
            "auth.service_unavailable": "\uC11C\uBE44\uC2A4\uB97C \uC77C\uC2DC\uC801\uC73C\uB85C \uC774\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.",
            "auth.show_password": "\uBE44\uBC00\uBC88\uD638 \uD45C\uC2DC",
            "auth.sign_out": "\uB85C\uADF8\uC544\uC6C3",
            "auth.sign_up": "\uD68C\uC6D0\uAC00\uC785",
            "auth.sign_up_link": "\uD68C\uC6D0\uAC00\uC785",
            "auth.signed_in": "\uB85C\uADF8\uC778\uB428",
            "auth.signin_failed": "\uB85C\uADF8\uC778 \uC2E4\uD328",
            "auth.signup_failed": "\uAC00\uC785 \uC2E4\uD328",
            "auth.verify": "\uD655\uC778",
            "auth.weak_password": "\uBE44\uBC00\uBC88\uD638\uAC00 \uB108\uBB34 \uC57D\uD569\uB2C8\uB2E4.",
            "auth.welcome": "\uD658\uC601\uD569\uB2C8\uB2E4!",
            "auth.welcome_signup": "\uD658\uC601\uD569\uB2C8\uB2E4!",
            "countdown.d": "\uC77C",
            "countdown.h": "\uC2DC",
            "countdown.m": "\uBD84",
            "countdown.s": "\uCD08",
            "cta.close": "\uB2EB\uAE30",
            "cta.continue": "\uACC4\uC18D",
            "cta.get_lifetime_access": "\uD3C9\uC0DD \uC774\uC6A9\uAD8C \uBC1B\uAE30",
            "cta.get_plan_daily": "\uC77C\uC77C \uD50C\uB79C \uBC1B\uAE30",
            "cta.get_plan_generic": "{interval} \uD50C\uB79C \uBC1B\uAE30",
            "cta.get_plan_monthly": "\uC6D4\uAC04 \uD50C\uB79C \uBC1B\uAE30",
            "cta.get_plan_weekly": "\uC8FC\uAC04 \uD50C\uB79C \uBC1B\uAE30",
            "cta.get_plan_yearly": "\uC5F0\uAC04 \uD50C\uB79C \uBC1B\uAE30",
            "cta.start_trial": "{days}\uC77C \uBB34\uB8CC \uCCB4\uD5D8 \uC2DC\uC791",
            "modal.close_aria": "\uB2EB\uAE30",
            "modal.continue": "\uACC4\uC18D",
            "modal.error_generic": "\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4",
            "modal.loading": "\uBD88\uB7EC\uC624\uB294 \uC911\u2026",
            "modal.purchase_restored_subtitle": "\uBAA8\uB4E0 \uC900\uBE44\uAC00 \uB05D\uB0AC\uC5B4\uC694 \u2014 \uC990\uACA8\uBCF4\uC138\uC694!",
            "modal.purchase_restored_title": "\uB2E4\uC2DC \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4",
            "modal.purchase_success_subtitle": "\uBAA8\uB4E0 \uC900\uBE44\uAC00 \uB05D\uB0AC\uC5B4\uC694 \u2014 \uC990\uACA8\uBCF4\uC138\uC694!",
            "modal.purchase_success_title": "\uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4",
            "modal.verifying_subscription": "\uAD6C\uB3C5\uC744 \uD655\uC778 \uC911\u2026",
            "nav.back": "\u2190 \uB4A4\uB85C",
            "nav.back_aria": "\uB4A4\uB85C",
            "offer.limited_time": "\uD55C\uC815 \uAE30\uAC04 \uC81C\uC548",
            "payment.awaiting_subtitle": "\uACB0\uC81C\uB97C \uC790\uB3D9\uC73C\uB85C \uAC10\uC9C0\uD569\uB2C8\uB2E4 \u2014 \uB610\uB294 \uC644\uB8CC\uB418\uBA74 \uC544\uB798\uB97C \uD074\uB9AD\uD558\uC138\uC694.",
            "payment.awaiting_title": "\uC0C8 \uD0ED\uC5D0\uC11C \uACB0\uC81C\uB97C \uC644\uB8CC\uD558\uC138\uC694",
            "payment.checking": "\uD655\uC778 \uC911\u2026",
            "payment.ive_paid": "\uACB0\uC81C\uD588\uC2B5\uB2C8\uB2E4",
            "payment.open_checkout_again": "\uACB0\uC81C \uB2E4\uC2DC \uC5F4\uAE30",
            "payment.open_checkout_button": "\uACB0\uC81C \uC5F4\uAE30",
            "payment.popup_blocked_message": "\uBE0C\uB77C\uC6B0\uC800\uAC00 \uACB0\uC81C \uD0ED\uC744 \uCC28\uB2E8\uD588\uC2B5\uB2C8\uB2E4. \uC544\uB798\uB97C \uD074\uB9AD\uD558\uC5EC \uC5F4\uC5B4\uC8FC\uC138\uC694.",
            "payment.popup_blocked_title": "\uACC4\uC18D\uD558\uB824\uBA74 \uD31D\uC5C5\uC744 \uD5C8\uC6A9\uD558\uC138\uC694",
            "payment.popup_help_text": "\uACB0\uC81C \uCC3D\uC774 \uC5F4\uB9AC\uC9C0 \uC54A\uAC70\uB098 \uCC28\uB2E8\uB418\uC5C8\uB098\uC694? \uC5EC\uAE30\uB97C \uD074\uB9AD\uD558\uC5EC \uB2E4\uC2DC \uC5F4\uC5B4\uC8FC\uC138\uC694.",
            "payment.still_processing": "\uACB0\uC81C\uAC00 \uC544\uC9C1 \uCC98\uB9AC \uC911\uC785\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.",
            "payment.tab_closed_retry": "\uD0ED\uC744 \uB2EB\uC558\uB098\uC694? \uB2E4\uC2DC \uC2DC\uB3C4",
            "pricing.free_trial_days": "{days}\uC77C \uBB34\uB8CC \uCCB4\uD5D8",
            "pricing.included_per": "{interval}\uB2F9 \uD3EC\uD568:",
            "pricing.interval.day": "\uC77C",
            "pricing.interval.lifetime_short": "\uD3C9\uC0DD",
            "pricing.interval.month": "\uC6D4",
            "pricing.interval.period": "\uAE30\uAC04",
            "pricing.interval.week": "\uC8FC",
            "pricing.interval.year": "\uB144",
            "pricing.money_back": "30\uC77C \uD658\uBD88 \uBCF4\uC7A5",
            "pricing.most_popular": "\uAC00\uC7A5 \uC778\uAE30",
            "pricing.no_prices": "\uAC00\uACA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",
            "pricing.plan_label.daily": "\uC77C\uC77C \uD50C\uB79C",
            "pricing.plan_label.lifetime": "\uD3C9\uC0DD",
            "pricing.plan_label.monthly": "\uC6D4\uAC04 \uD50C\uB79C",
            "pricing.plan_label.weekly": "\uC8FC\uAC04 \uD50C\uB79C",
            "pricing.plan_label.yearly": "\uC5F0\uAC04 \uD50C\uB79C",
            "pricing.plans_aria": "\uD50C\uB79C",
            "session.contact_support": "\uC9C0\uC6D0\uD300\uC5D0 \uBB38\uC758",
            "session.restore_purchases": "\uAD6C\uB9E4 \uBCF5\uC6D0",
            "session.sign_out": "\uB85C\uADF8\uC544\uC6C3",
            "session.signed_in_as_prefix": "\uB85C\uADF8\uC778\uB428:",
            "session.signing_out": "\uB85C\uADF8\uC544\uC6C3 \uC911\u2026",
            "support.attachments_aria": "\uCCA8\uBD80 \uD30C\uC77C \uC5C5\uB85C\uB4DC",
            "support.attachments_label": "\uCCA8\uBD80 \uD30C\uC77C",
            "support.close_button": "\uB2EB\uAE30",
            "support.done_button": "\uC644\uB8CC",
            "support.dropzone_text": "\uC5EC\uAE30\uC5D0 \uC774\uBBF8\uC9C0\uB97C \uB04C\uC5B4\uB2E4 \uB193\uAC70\uB098 \uD074\uB9AD\uD558\uC5EC \uC120\uD0DD",
            "support.email_placeholder": "\uC774\uBA54\uC77C \uC785\uB825",
            "support.file_requirements": "JPEG/PNG/WebP, \uCD5C\uB300 {max}\uAC1C, \uAC01 {size}MB \uC774\uD558",
            "support.heading": "\uC9C0\uC6D0",
            "support.instruction": "\uC9C0\uC6D0 \uC694\uCCAD\uC744 \uC81C\uCD9C\uD558\uB824\uBA74 \uC544\uB798 \uC591\uC2DD\uC744 \uC791\uC131\uD558\uC138\uC694.",
            "support.invalid_email": "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uC774\uBA54\uC77C",
            "support.invalid_file": "JPEG/PNG/WebP\uB9CC, \uAC01 {size}MB \uC774\uD558",
            "support.message_length": "1~5000\uC790",
            "support.message_placeholder": "\uBA54\uC2DC\uC9C0 \uC785\uB825",
            "support.remove_file_aria": "{filename} \uC81C\uAC70",
            "support.required": "\uD544\uC218",
            "support.send_another": "\uB2E4\uB978 \uC694\uCCAD \uBCF4\uB0B4\uAE30",
            "support.send_button": "\uBCF4\uB0B4\uAE30",
            "support.sending": "\uC804\uC1A1 \uC911\u2026",
            "support.sending_as": "\uBC1C\uC2E0:",
            "support.subject_length": "3~200\uC790",
            "support.subject_placeholder": "\uC81C\uBAA9 \uC785\uB825",
            "support.success_heading": "\uC694\uCCAD\uC774 \uC81C\uCD9C\uB418\uC5C8\uC2B5\uB2C8\uB2E4",
            "support.success_message_prefix": "\uBA54\uC2DC\uC9C0\uB97C \uBC1B\uC558\uC2B5\uB2C8\uB2E4. \uB2F5\uC7A5 \uC8FC\uC18C:",
            "support.too_many_files": "\uCD5C\uB300 {max}\uAC1C"
        }
    }
    );
    var ci = {};
    E(ci, {
        default: () => fr
    });
    var fr, ui = T( () => {
        fr = {
            "anon.description_default": "Gastsessie wordt ingesteld\u2026",
            "anon.heading_default": "Doorgaan als gast",
            "anon.try_again": "Probeer opnieuw",
            "auth.back_to_login": "Terug naar inloggen",
            "auth.check_email_message": "Controleer je e-mail voor de bevestigingscode.",
            "auth.check_email_title": "Controleer je e-mail",
            "auth.confirm_email_subtitle": "Voer de code in die we naar je e-mail hebben gestuurd om je account aan te maken.",
            "auth.confirm_email_title": "Bevestig je e-mail",
            "auth.confirmation_code": "Bevestigingscode",
            "auth.continue_with_apple": "Doorgaan met Apple",
            "auth.continue_with_facebook": "Doorgaan met Facebook",
            "auth.continue_with_github": "Doorgaan met GitHub",
            "auth.continue_with_google": "Doorgaan met Google",
            "auth.create_account": "Account aanmaken",
            "auth.default_subtitle": "Log in om toegang te krijgen tot alle functies en je gegevens te synchroniseren.",
            "auth.email": "E-mailadres",
            "auth.email_already_registered": "Dit e-mailadres is al geregistreerd. Log hieronder in met je wachtwoord of het account waarmee je je hebt geregistreerd.",
            "auth.email_exists": "Er bestaat al een account met dit e-mailadres.",
            "auth.email_not_confirmed": "Bevestig eerst je e-mailadres.",
            "auth.forgot_password": "Wachtwoord vergeten?",
            "auth.forgot_password_title": "Wachtwoord vergeten?",
            "auth.forgot_subtitle": "Voer je e-mailadres in en we sturen je een link om je wachtwoord opnieuw in te stellen.",
            "auth.generic_error": "Er ging iets mis",
            "auth.have_account": "Heb je al een account?",
            "auth.hide_password": "Wachtwoord verbergen",
            "auth.identity_already_linked": "Dit account is al geregistreerd. Log er hieronder mee in.",
            "auth.invalid_credentials": "Ongeldige e-mail of wachtwoord",
            "auth.invalid_otp": "De code is ongeldig of verlopen.",
            "auth.last_used": "Laatst gebruikt \xB7 {email}",
            "auth.last_used_no_email": "Laatst gebruikt",
            "auth.link_purchase_subheading": "We koppelen de aankoop aan je account om toegang te behouden.",
            "auth.log_in": "Inloggen",
            "auth.log_in_link": "Inloggen",
            "auth.login_continue_purchase": "Log in om je aankoop voort te zetten",
            "auth.network_error": "Netwerkfout. Controleer je verbinding en probeer opnieuw.",
            "auth.new_password_optional": "Nieuw wachtwoord (optioneel \u2014 alleen voor wachtwoordreset)",
            "auth.no_account": "Nog geen account?",
            "auth.or": "of",
            "auth.password": "Wachtwoord",
            "auth.passwords_mismatch": "Wachtwoorden komen niet overeen",
            "auth.rate_limited": "Te veel verzoeken. Probeer het later opnieuw.",
            "auth.repeat_password": "Herhaal wachtwoord",
            "auth.reset_link_valid": "De link is 1 uur geldig.",
            "auth.reset_password_subtitle": "Voer de code uit je e-mail en een nieuw wachtwoord in.",
            "auth.reset_password_title": "Wachtwoord opnieuw instellen",
            "auth.reset_sent_message": "Als dat e-mailadres bestaat, is er een resetcode verzonden.",
            "auth.reset_sent_subtitle": "We hebben een wachtwoord-resetlink verzonden. Volg de instructies in de e-mail.",
            "auth.restore_purchases_heading": "Aankopen Herstellen",
            "auth.restore_purchases_subheading": "Log in om je aankopen te herstellen.",
            "auth.send_reset": "Reset-e-mail Versturen",
            "auth.service_unavailable": "Service tijdelijk niet beschikbaar. Probeer het later opnieuw.",
            "auth.show_password": "Wachtwoord tonen",
            "auth.sign_out": "Uitloggen",
            "auth.sign_up": "Registreren",
            "auth.sign_up_link": "Registreren",
            "auth.signed_in": "Ingelogd",
            "auth.signin_failed": "Inloggen mislukt",
            "auth.signup_failed": "Registratie mislukt",
            "auth.verify": "Verifi\xEBren",
            "auth.weak_password": "Het wachtwoord is te zwak.",
            "auth.welcome": "Welkom!",
            "auth.welcome_signup": "Welkom!",
            "cta.close": "Sluiten",
            "cta.continue": "Doorgaan",
            "cta.get_lifetime_access": "Levenslange toegang",
            "cta.get_plan_daily": "Dagelijks plan",
            "cta.get_plan_generic": "Plan {interval}",
            "cta.get_plan_monthly": "Maandelijks plan",
            "cta.get_plan_weekly": "Wekelijks plan",
            "cta.get_plan_yearly": "Jaarlijks plan",
            "cta.start_trial": "Start {days} Dagen Gratis Proefperiode",
            "modal.close_aria": "Sluiten",
            "modal.continue": "Doorgaan",
            "modal.error_generic": "Er ging iets mis",
            "modal.loading": "Laden\u2026",
            "modal.purchase_restored_subtitle": "Alles is klaar \u2014 veel plezier!",
            "modal.purchase_restored_title": "Welkom terug",
            "modal.purchase_success_subtitle": "Alles is klaar \u2014 veel plezier!",
            "modal.purchase_success_title": "Betaling ontvangen",
            "modal.verifying_subscription": "Abonnement controleren\u2026",
            "nav.back": "\u2190 Terug",
            "nav.back_aria": "Terug",
            "offer.limited_time": "Tijdelijke aanbieding",
            "payment.awaiting_subtitle": "We detecteren je betaling automatisch \u2014 of klik hieronder zodra je klaar bent.",
            "payment.awaiting_title": "Voltooi de betaling in het nieuwe tabblad",
            "payment.checking": "Controleren\u2026",
            "payment.ive_paid": "Ik heb betaald",
            "payment.open_checkout_again": "Checkout opnieuw openen",
            "payment.open_checkout_button": "Checkout openen",
            "payment.popup_blocked_message": "Je browser blokkeerde het checkouttabblad. Klik hieronder om het te openen.",
            "payment.popup_blocked_title": "Sta pop-ups toe om door te gaan",
            "payment.popup_help_text": "Het checkoutvenster ging niet open of werd geblokkeerd? Klik hier om het opnieuw te openen.",
            "payment.still_processing": "De betaling wordt nog verwerkt. Probeer het zo opnieuw.",
            "payment.tab_closed_retry": "Tabblad gesloten? Probeer opnieuw",
            "pricing.free_trial_days": "{days} dagen gratis proefperiode",
            "pricing.included_per": "Inbegrepen per {interval}:",
            "pricing.interval.day": "dag",
            "pricing.interval.lifetime_short": "voor altijd",
            "pricing.interval.month": "maand",
            "pricing.interval.period": "periode",
            "pricing.interval.week": "week",
            "pricing.interval.year": "jaar",
            "pricing.money_back": "30 dagen geld-terug-garantie",
            "pricing.most_popular": "Populairst",
            "pricing.no_prices": "Geen prijzen beschikbaar.",
            "pricing.plan_label.daily": "DAGELIJKS PLAN",
            "pricing.plan_label.lifetime": "levenslang",
            "pricing.plan_label.monthly": "maandelijks abonnement",
            "pricing.plan_label.weekly": "wekelijks abonnement",
            "pricing.plan_label.yearly": "jaarlijks abonnement",
            "pricing.plans_aria": "Plannen",
            "session.contact_support": "Contact met support",
            "session.restore_purchases": "Aankopen herstellen",
            "session.sign_out": "Uitloggen",
            "session.signed_in_as_prefix": "Ingelogd als",
            "session.signing_out": "Uitloggen\u2026",
            "support.attachments_aria": "Bijlagen uploaden",
            "support.attachments_label": "Bijlagen",
            "support.close_button": "Sluiten",
            "support.done_button": "Klaar",
            "support.dropzone_text": "Sleep afbeeldingen hierheen of klik om te selecteren",
            "support.email_placeholder": "Voer je e-mailadres in",
            "support.file_requirements": "JPEG/PNG/WebP, tot {max} bestanden, \u2264 {size} MB elk",
            "support.heading": "Ondersteuning",
            "support.instruction": "Vul het onderstaande formulier in om je ondersteuningsverzoek te verzenden.",
            "support.invalid_email": "Ongeldig e-mailadres",
            "support.invalid_file": "Alleen JPEG/PNG/WebP, \u2264 {size} MB elk",
            "support.message_length": "1\u20135000 tekens",
            "support.message_placeholder": "Voer je bericht in",
            "support.remove_file_aria": "{filename} verwijderen",
            "support.required": "Verplicht",
            "support.send_another": "Nog een verzoek versturen",
            "support.send_button": "Versturen",
            "support.sending": "Verzenden\u2026",
            "support.sending_as": "Verzenden als",
            "support.subject_length": "3\u2013200 tekens",
            "support.subject_placeholder": "Voer je onderwerp in",
            "support.success_heading": "Verzoek verzonden",
            "support.success_message_prefix": "We hebben je bericht ontvangen en zullen reageren op",
            "support.too_many_files": "Tot {max} bestanden"
        }
    }
    );
    var pi = {};
    E(pi, {
        default: () => yr
    });
    var yr, di = T( () => {
        yr = {
            "anon.heading_default": "Fortsett som gjest",
            "anon.try_again": "Pr\xF8v igjen",
            "auth.back_to_login": "Tilbake til innlogging",
            "auth.check_email_message": "Sjekk e-posten din \u2014 vi har sendt en bekreftelseskode.",
            "auth.check_email_title": "Sjekk e-posten din",
            "auth.confirm_email_title": "Bekreft e-posten din",
            "auth.confirmation_code": "Bekreftelseskode",
            "auth.continue_with_apple": "Fortsett med Apple",
            "auth.continue_with_facebook": "Fortsett med Facebook",
            "auth.continue_with_github": "Fortsett med GitHub",
            "auth.continue_with_google": "Fortsett med Google",
            "auth.create_account": "Opprett konto",
            "auth.default_subtitle": "Logg inn for \xE5 f\xE5 tilgang til alle funksjoner og synkronisere dataene dine.",
            "auth.email": "E-postadresse",
            "auth.email_already_registered": "Denne e-posten er allerede registrert. Logg inn nedenfor med passordet ditt eller kontoen du registrerte deg med.",
            "auth.email_exists": "En konto med denne e-posten finnes allerede.",
            "auth.email_not_confirmed": "Bekreft e-posten din f\xF8rst.",
            "auth.forgot_password": "Glemt passord?",
            "auth.forgot_password_title": "Glemt passord?",
            "auth.forgot_subtitle": "Skriv inn e-posten din, s\xE5 sender vi deg en lenke for \xE5 tilbakestille passordet.",
            "auth.generic_error": "Noe gikk galt",
            "auth.have_account": "Har du allerede en konto?",
            "auth.hide_password": "Skjul passord",
            "auth.identity_already_linked": "Denne kontoen er allerede registrert. Logg inn med den nedenfor.",
            "auth.invalid_credentials": "Feil e-post eller passord",
            "auth.invalid_otp": "Koden er ugyldig eller utl\xF8pt.",
            "auth.last_used": "Sist brukt \xB7 {email}",
            "auth.last_used_no_email": "Sist brukt",
            "auth.link_purchase_subheading": "Vi knytter kj\xF8pet til kontoen din for \xE5 beholde tilgangen.",
            "auth.log_in": "Logg Inn",
            "auth.log_in_link": "Logg Inn",
            "auth.login_continue_purchase": "Logg inn for \xE5 fortsette kj\xF8pet ditt",
            "auth.network_error": "Nettverksfeil. Sjekk tilkoblingen og pr\xF8v igjen.",
            "auth.no_account": "Har du ingen konto?",
            "auth.or": "eller",
            "auth.password": "Passord",
            "auth.passwords_mismatch": "Passordene samsvarer ikke",
            "auth.rate_limited": "For mange foresp\xF8rsler. Pr\xF8v igjen senere.",
            "auth.repeat_password": "Gjenta passord",
            "auth.reset_link_valid": "Lenken er gyldig i 1 time.",
            "auth.reset_password_title": "Tilbakestill passord",
            "auth.reset_sent_message": "Hvis e-posten finnes, er det sendt en tilbakestillingskode.",
            "auth.reset_sent_subtitle": "Vi har sendt en lenke for \xE5 tilbakestille passordet. F\xF8lg instruksjonene i e-posten.",
            "auth.restore_purchases_heading": "Gjenopprett Kj\xF8p",
            "auth.restore_purchases_subheading": "Logg inn for \xE5 gjenopprette kj\xF8pene dine.",
            "auth.send_reset": "Send Tilbakestillingsmail",
            "auth.service_unavailable": "Tjenesten er midlertidig utilgjengelig. Pr\xF8v igjen senere.",
            "auth.show_password": "Vis passord",
            "auth.sign_out": "Logg ut",
            "auth.sign_up": "Registrer",
            "auth.sign_up_link": "Registrer",
            "auth.signed_in": "Logget inn",
            "auth.signin_failed": "P\xE5logging mislyktes",
            "auth.signup_failed": "Registrering mislyktes",
            "auth.verify": "Bekreft",
            "auth.weak_password": "Passordet er for svakt.",
            "auth.welcome": "Velkommen!",
            "auth.welcome_signup": "Velkommen!",
            "cta.close": "Lukk",
            "cta.continue": "Fortsett",
            "cta.get_lifetime_access": "F\xE5 livstidstilgang",
            "cta.get_plan_daily": "F\xE5 daglig plan",
            "cta.get_plan_monthly": "F\xE5 m\xE5nedlig plan",
            "cta.get_plan_weekly": "F\xE5 ukentlig plan",
            "cta.get_plan_yearly": "F\xE5 \xE5rlig plan",
            "cta.start_trial": "Start {days} Dagers Gratis Pr\xF8veperiode",
            "modal.close_aria": "Lukk",
            "modal.continue": "Fortsett",
            "modal.error_generic": "Noe gikk galt",
            "modal.loading": "Laster\u2026",
            "modal.purchase_restored_subtitle": "Alt er klart \u2014 kos deg!",
            "modal.purchase_restored_title": "Velkommen tilbake",
            "modal.purchase_success_subtitle": "Alt er klart \u2014 kos deg!",
            "modal.purchase_success_title": "Betaling mottatt",
            "modal.verifying_subscription": "Sjekker abonnementet\u2026",
            "nav.back": "\u2190 Tilbake",
            "nav.back_aria": "Tilbake",
            "offer.limited_time": "Tidsbegrenset tilbud",
            "payment.awaiting_title": "Fullf\xF8r betalingen i den nye fanen",
            "payment.checking": "Sjekker\u2026",
            "payment.ive_paid": "Jeg har betalt",
            "payment.open_checkout_again": "\xC5pne betaling igjen",
            "payment.open_checkout_button": "\xC5pne betaling",
            "pricing.free_trial_days": "{days}-dagers gratis pr\xF8veperiode",
            "pricing.included_per": "Inkludert per {interval}:",
            "pricing.interval.day": "dag",
            "pricing.interval.lifetime_short": "livstid",
            "pricing.interval.month": "m\xE5ned",
            "pricing.interval.period": "periode",
            "pricing.interval.week": "uke",
            "pricing.interval.year": "\xE5r",
            "pricing.money_back": "30 dagers pengene-tilbake-garanti",
            "pricing.most_popular": "Mest popul\xE6r",
            "pricing.no_prices": "Ingen priser tilgjengelig.",
            "pricing.plan_label.daily": "DAGLIG PLAN",
            "pricing.plan_label.lifetime": "livstid",
            "pricing.plan_label.monthly": "m\xE5nedlig plan",
            "pricing.plan_label.weekly": "ukentlig plan",
            "pricing.plan_label.yearly": "\xE5rlig plan",
            "pricing.plans_aria": "Planer",
            "session.contact_support": "Kontakt support",
            "session.restore_purchases": "Gjenopprett kj\xF8p",
            "session.sign_out": "Logg ut",
            "session.signed_in_as_prefix": "Logget inn som",
            "session.signing_out": "Logger ut\u2026",
            "support.attachments_label": "Vedlegg",
            "support.close_button": "Lukk",
            "support.done_button": "Ferdig",
            "support.email_placeholder": "Skriv inn e-posten din",
            "support.heading": "St\xF8tte",
            "support.instruction": "Vennligst fyll ut skjemaet nedenfor for \xE5 sende inn st\xF8tteforesp\xF8rselen din.",
            "support.invalid_email": "Ugyldig e-post",
            "support.message_length": "1\u20135000 tegn",
            "support.message_placeholder": "Skriv inn meldingen din",
            "support.required": "P\xE5krevd",
            "support.send_another": "Send en ny foresp\xF8rsel",
            "support.send_button": "Send",
            "support.sending": "Sender\u2026",
            "support.subject_length": "3\u2013200 tegn",
            "support.subject_placeholder": "Skriv inn emnet ditt",
            "support.success_heading": "Foresp\xF8rsel sendt",
            "support.success_message_prefix": "Vi har mottatt meldingen din og vil svare p\xE5"
        }
    }
    );
    var hi = {};
    E(hi, {
        default: () => br
    });
    var br, gi = T( () => {
        br = {
            "anon.heading_default": "Kontynuuj jako go\u015B\u0107",
            "anon.try_again": "Spr\xF3buj ponownie",
            "auth.back_to_login": "Powr\xF3t do logowania",
            "auth.check_email_message": "Sprawd\u017A skrzynk\u0119 \u2014 wys\u0142ali\u015Bmy kod potwierdzaj\u0105cy.",
            "auth.check_email_title": "Sprawd\u017A poczt\u0119",
            "auth.confirm_email_title": "Potwierd\u017A e-mail",
            "auth.confirmation_code": "Kod potwierdzaj\u0105cy",
            "auth.continue_with_apple": "Kontynuuj przez Apple",
            "auth.continue_with_facebook": "Kontynuuj z Facebookiem",
            "auth.continue_with_github": "Kontynuuj z GitHub",
            "auth.continue_with_google": "Kontynuuj przez Google",
            "auth.create_account": "Utw\xF3rz konto",
            "auth.default_subtitle": "Zaloguj si\u0119, aby uzyska\u0107 dost\u0119p do wszystkich funkcji i zsynchronizowa\u0107 dane.",
            "auth.email": "Adres e-mail",
            "auth.email_already_registered": "Ten e-mail jest ju\u017C zarejestrowany. Zaloguj si\u0119 poni\u017Cej has\u0142em lub kontem u\u017Cytym przy rejestracji.",
            "auth.email_exists": "Konto z tym adresem e-mail ju\u017C istnieje.",
            "auth.email_not_confirmed": "Najpierw potwierd\u017A sw\xF3j e-mail.",
            "auth.forgot_password": "Nie pami\u0119tasz has\u0142a?",
            "auth.forgot_password_title": "Nie pami\u0119tasz has\u0142a?",
            "auth.forgot_subtitle": "Podaj sw\xF3j adres e-mail, a wy\u015Blemy Ci link do resetowania has\u0142a.",
            "auth.generic_error": "Co\u015B posz\u0142o nie tak",
            "auth.have_account": "Masz konto?",
            "auth.hide_password": "Ukryj has\u0142o",
            "auth.identity_already_linked": "To konto jest ju\u017C zarejestrowane. Zaloguj si\u0119 nim poni\u017Cej.",
            "auth.invalid_credentials": "Nieprawid\u0142owy e-mail lub has\u0142o",
            "auth.invalid_otp": "Kod jest nieprawid\u0142owy lub wygas\u0142.",
            "auth.last_used": "Ostatnio u\u017Cyte \xB7 {email}",
            "auth.last_used_no_email": "Ostatnio u\u017Cyte",
            "auth.link_purchase_subheading": "Powi\u0105\u017Cemy zakup z Twoim kontem, aby zachowa\u0107 dost\u0119p.",
            "auth.log_in": "Zaloguj si\u0119",
            "auth.log_in_link": "Zaloguj si\u0119",
            "auth.login_continue_purchase": "Zaloguj si\u0119, aby kontynuowa\u0107 zakup",
            "auth.network_error": "B\u0142\u0105d sieci. Sprawd\u017A po\u0142\u0105czenie i spr\xF3buj ponownie.",
            "auth.no_account": "Nie masz konta?",
            "auth.or": "lub",
            "auth.password": "Has\u0142o",
            "auth.passwords_mismatch": "Has\u0142a nie pasuj\u0105 do siebie",
            "auth.rate_limited": "Zbyt wiele \u017C\u0105da\u0144. Spr\xF3buj ponownie p\xF3\u017Aniej.",
            "auth.repeat_password": "Powt\xF3rz has\u0142o",
            "auth.reset_link_valid": "Link jest wa\u017Cny przez 1 godzin\u0119.",
            "auth.reset_password_title": "Zresetuj has\u0142o",
            "auth.reset_sent_message": "Je\u015Bli ten adres istnieje, wys\u0142ali\u015Bmy kod resetuj\u0105cy.",
            "auth.reset_sent_subtitle": "Wys\u0142ali\u015Bmy link do resetowania has\u0142a. Post\u0119puj zgodnie z instrukcjami w wiadomo\u015Bci.",
            "auth.restore_purchases_heading": "Przywr\xF3\u0107 zakupy",
            "auth.restore_purchases_subheading": "Zaloguj si\u0119, aby przywr\xF3ci\u0107 swoje zakupy.",
            "auth.send_reset": "Wy\u015Blij link resetuj\u0105cy",
            "auth.service_unavailable": "Us\u0142uga chwilowo niedost\u0119pna. Spr\xF3buj p\xF3\u017Aniej.",
            "auth.show_password": "Poka\u017C has\u0142o",
            "auth.sign_out": "Wyloguj",
            "auth.sign_up": "Zarejestruj si\u0119",
            "auth.sign_up_link": "Zarejestruj si\u0119",
            "auth.signed_in": "Zalogowano",
            "auth.signin_failed": "Logowanie nie powiod\u0142o si\u0119",
            "auth.signup_failed": "Rejestracja nie powiod\u0142a si\u0119",
            "auth.verify": "Zweryfikuj",
            "auth.weak_password": "Has\u0142o jest zbyt s\u0142abe.",
            "auth.welcome": "Witaj!",
            "auth.welcome_signup": "Witamy!",
            "cta.close": "Zamknij",
            "cta.continue": "Kontynuuj",
            "cta.get_lifetime_access": "Uzyskaj do\u017Cywotni dost\u0119p",
            "cta.get_plan_daily": "Wybierz plan dzienny",
            "cta.get_plan_monthly": "Wybierz plan miesi\u0119czny",
            "cta.get_plan_weekly": "Wybierz plan tygodniowy",
            "cta.get_plan_yearly": "Wybierz plan roczny",
            "cta.start_trial": "Rozpocznij {days}-dniowy darmowy okres pr\xF3bny",
            "modal.close_aria": "Zamknij",
            "modal.continue": "Kontynuuj",
            "modal.error_generic": "Co\u015B posz\u0142o nie tak",
            "modal.loading": "\u0141adowanie\u2026",
            "modal.purchase_restored_subtitle": "Wszystko gotowe \u2014 korzystaj!",
            "modal.purchase_restored_title": "Witamy ponownie",
            "modal.purchase_success_subtitle": "Wszystko gotowe \u2014 korzystaj!",
            "modal.purchase_success_title": "P\u0142atno\u015B\u0107 otrzymana",
            "modal.verifying_subscription": "Sprawdzanie subskrypcji\u2026",
            "nav.back": "\u2190 Wstecz",
            "nav.back_aria": "Wstecz",
            "offer.limited_time": "Oferta ograniczona czasowo",
            "payment.awaiting_title": "Doko\u0144cz p\u0142atno\u015B\u0107 w nowej karcie",
            "payment.checking": "Sprawdzanie\u2026",
            "payment.ive_paid": "Zap\u0142aci\u0142em",
            "payment.open_checkout_again": "Otw\xF3rz p\u0142atno\u015B\u0107 ponownie",
            "payment.open_checkout_button": "Otw\xF3rz p\u0142atno\u015B\u0107",
            "pricing.free_trial_days": "{days}-dniowa bezp\u0142atna wersja pr\xF3bna",
            "pricing.included_per": "Wliczone w {interval}:",
            "pricing.interval.day": "dzie\u0144",
            "pricing.interval.lifetime_short": "do\u017Cywotnio",
            "pricing.interval.month": "miesi\u0105c",
            "pricing.interval.period": "okres",
            "pricing.interval.week": "tydzie\u0144",
            "pricing.interval.year": "rok",
            "pricing.money_back": "30-dniowa gwarancja zwrotu pieni\u0119dzy",
            "pricing.most_popular": "Najpopularniejszy",
            "pricing.no_prices": "Brak dost\u0119pnych cen.",
            "pricing.plan_label.daily": "PLAN DZIENNY",
            "pricing.plan_label.lifetime": "do\u017Cywotni",
            "pricing.plan_label.monthly": "plan miesi\u0119czny",
            "pricing.plan_label.weekly": "plan tygodniowy",
            "pricing.plan_label.yearly": "plan roczny",
            "pricing.plans_aria": "Plany",
            "session.contact_support": "Kontakt z pomoc\u0105",
            "session.restore_purchases": "Przywr\xF3\u0107 zakupy",
            "session.sign_out": "Wyloguj",
            "session.signed_in_as_prefix": "Zalogowany jako",
            "session.signing_out": "Wylogowywanie\u2026",
            "support.attachments_label": "Za\u0142\u0105czniki",
            "support.close_button": "Zamknij",
            "support.done_button": "Gotowe",
            "support.email_placeholder": "Wprowad\u017A sw\xF3j e-mail",
            "support.heading": "Wsparcie",
            "support.instruction": "Wype\u0142nij poni\u017Cszy formularz, aby wys\u0142a\u0107 zg\u0142oszenie do pomocy technicznej.",
            "support.invalid_email": "Nieprawid\u0142owy adres e-mail",
            "support.message_length": "1\u20135000 znak\xF3w",
            "support.message_placeholder": "Wprowad\u017A wiadomo\u015B\u0107",
            "support.required": "Wymagane",
            "support.send_another": "Wy\u015Blij kolejne zg\u0142oszenie",
            "support.send_button": "Wy\u015Blij",
            "support.sending": "Wysy\u0142anie\u2026",
            "support.subject_length": "3\u2013200 znak\xF3w",
            "support.subject_placeholder": "Wprowad\u017A temat",
            "support.success_heading": "Zg\u0142oszenie wys\u0142ane",
            "support.success_message_prefix": "Otrzymali\u015Bmy Twoj\u0105 wiadomo\u015B\u0107 i odpowiemy na adres"
        }
    }
    );
    var _i = {};
    E(_i, {
        default: () => wr
    });
    var wr, mi = T( () => {
        wr = {
            "anon.description_default": "Configurando sua sess\xE3o de convidado\u2026",
            "anon.heading_default": "Continuar como convidado",
            "anon.try_again": "Tentar novamente",
            "auth.back_to_login": "Voltar ao login",
            "auth.check_email_message": "Verifique seu e-mail para o c\xF3digo de confirma\xE7\xE3o.",
            "auth.check_email_title": "Verifique seu e-mail",
            "auth.confirm_email_subtitle": "Digite o c\xF3digo que enviamos para seu e-mail para concluir o cadastro.",
            "auth.confirm_email_title": "Confirme seu e-mail",
            "auth.confirmation_code": "C\xF3digo de confirma\xE7\xE3o",
            "auth.continue_with_apple": "Continuar com Apple",
            "auth.continue_with_facebook": "Continuar com Facebook",
            "auth.continue_with_github": "Continuar com GitHub",
            "auth.continue_with_google": "Continuar com Google",
            "auth.create_account": "Criar conta",
            "auth.default_subtitle": "Fa\xE7a login para acessar todos os recursos e sincronizar seus dados.",
            "auth.email": "Endere\xE7o de e-mail",
            "auth.email_already_registered": "Este e-mail j\xE1 est\xE1 registrado. Entre abaixo com sua senha ou a conta que voc\xEA usou para se cadastrar.",
            "auth.email_exists": "J\xE1 existe uma conta com este e-mail.",
            "auth.email_not_confirmed": "Por favor, confirme seu e-mail primeiro.",
            "auth.forgot_password": "Esqueceu sua senha?",
            "auth.forgot_password_title": "Esqueceu sua senha?",
            "auth.forgot_subtitle": "Digite seu e-mail e enviaremos um link para redefinir sua senha.",
            "auth.generic_error": "Algo deu errado",
            "auth.have_account": "Tem uma conta?",
            "auth.hide_password": "Ocultar senha",
            "auth.identity_already_linked": "Esta conta j\xE1 est\xE1 registrada. Entre com ela abaixo.",
            "auth.invalid_credentials": "E-mail ou senha inv\xE1lidos",
            "auth.invalid_otp": "O c\xF3digo \xE9 inv\xE1lido ou expirou.",
            "auth.last_used": "\xDAltima vez \xB7 {email}",
            "auth.last_used_no_email": "\xDAltima vez",
            "auth.link_purchase_subheading": "Vincularemos a compra \xE0 sua conta para manter o acesso.",
            "auth.log_in": "Fazer Login",
            "auth.log_in_link": "Fazer Login",
            "auth.login_continue_purchase": "Fa\xE7a login para continuar sua compra",
            "auth.network_error": "Erro de rede. Verifique sua conex\xE3o e tente novamente.",
            "auth.new_password_optional": "Nova senha (opcional \u2014 somente para redefini\xE7\xE3o)",
            "auth.no_account": "N\xE3o tem uma conta?",
            "auth.or": "ou",
            "auth.password": "Senha",
            "auth.passwords_mismatch": "As senhas n\xE3o correspondem",
            "auth.rate_limited": "Muitas solicita\xE7\xF5es. Tente novamente mais tarde.",
            "auth.repeat_password": "Repetir senha",
            "auth.reset_link_valid": "O link \xE9 v\xE1lido por 1 hora.",
            "auth.reset_password_subtitle": "Digite o c\xF3digo do seu e-mail e uma nova senha.",
            "auth.reset_password_title": "Redefinir senha",
            "auth.reset_sent_message": "Se esse e-mail existir, um c\xF3digo de redefini\xE7\xE3o foi enviado.",
            "auth.reset_sent_subtitle": "Enviamos um link para redefinir sua senha. Siga as instru\xE7\xF5es no e-mail.",
            "auth.restore_purchases_heading": "Restaurar Compras",
            "auth.restore_purchases_subheading": "Por favor, fa\xE7a login para restaurar suas compras.",
            "auth.send_reset": "Enviar E-mail de Redefini\xE7\xE3o",
            "auth.service_unavailable": "Servi\xE7o temporariamente indispon\xEDvel. Tente novamente mais tarde.",
            "auth.show_password": "Mostrar senha",
            "auth.sign_out": "Sair",
            "auth.sign_up": "Cadastrar-se",
            "auth.sign_up_link": "Cadastrar-se",
            "auth.signed_in": "Conectado",
            "auth.signin_failed": "Falha no login",
            "auth.signup_failed": "Falha no cadastro",
            "auth.verify": "Verificar",
            "auth.weak_password": "A senha \xE9 muito fraca.",
            "auth.welcome": "Bem-vindo!",
            "auth.welcome_signup": "Bem-vindo!",
            "cta.close": "Fechar",
            "cta.continue": "Continuar",
            "cta.get_lifetime_access": "Obter acesso vital\xEDcio",
            "cta.get_plan_daily": "Obter plano di\xE1rio",
            "cta.get_plan_generic": "Obter plano {interval}",
            "cta.get_plan_monthly": "Obter plano mensal",
            "cta.get_plan_weekly": "Obter plano semanal",
            "cta.get_plan_yearly": "Obter plano anual",
            "cta.start_trial": "Iniciar Teste Gratuito de {days} Dias",
            "modal.close_aria": "Fechar",
            "modal.continue": "Continuar",
            "modal.error_generic": "Algo deu errado",
            "modal.loading": "Carregando\u2026",
            "modal.purchase_restored_subtitle": "Tudo pronto \u2014 aproveite!",
            "modal.purchase_restored_title": "Bem-vindo de volta",
            "modal.purchase_success_subtitle": "Tudo pronto \u2014 aproveite!",
            "modal.purchase_success_title": "Pagamento recebido",
            "modal.verifying_subscription": "Verificando sua assinatura\u2026",
            "nav.back": "\u2190 Voltar",
            "nav.back_aria": "Voltar",
            "offer.limited_time": "Oferta por tempo limitado",
            "payment.awaiting_subtitle": "Detectaremos seu pagamento automaticamente \u2014 ou clique abaixo quando terminar.",
            "payment.awaiting_title": "Conclua o pagamento na nova aba",
            "payment.checking": "Verificando\u2026",
            "payment.ive_paid": "Eu paguei",
            "payment.open_checkout_again": "Abrir checkout novamente",
            "payment.open_checkout_button": "Abrir checkout",
            "payment.popup_blocked_message": "Seu navegador bloqueou a aba de checkout. Clique abaixo para abri-la.",
            "payment.popup_blocked_title": "Permita pop-ups para continuar",
            "payment.popup_help_text": "A janela de checkout n\xE3o abriu ou foi bloqueada? Clique aqui para abri-la novamente.",
            "payment.still_processing": "O pagamento ainda est\xE1 sendo processado. Tente novamente em um momento.",
            "payment.tab_closed_retry": "Aba fechada? Tente novamente",
            "pricing.free_trial_days": "Teste gr\xE1tis de {days} dias",
            "pricing.included_per": "Inclu\xEDdo por {interval}:",
            "pricing.interval.day": "dia",
            "pricing.interval.lifetime_short": "vital\xEDcio",
            "pricing.interval.month": "m\xEAs",
            "pricing.interval.period": "per\xEDodo",
            "pricing.interval.week": "semana",
            "pricing.interval.year": "ano",
            "pricing.money_back": "Garantia de reembolso de 30 dias",
            "pricing.most_popular": "Mais popular",
            "pricing.no_prices": "Nenhum pre\xE7o dispon\xEDvel.",
            "pricing.plan_label.daily": "PLANO DI\xC1RIO",
            "pricing.plan_label.lifetime": "vital\xEDcio",
            "pricing.plan_label.monthly": "plano mensal",
            "pricing.plan_label.weekly": "plano semanal",
            "pricing.plan_label.yearly": "plano anual",
            "pricing.plans_aria": "Planos",
            "session.contact_support": "Contatar suporte",
            "session.restore_purchases": "Restaurar compras",
            "session.sign_out": "Sair",
            "session.signed_in_as_prefix": "Conectado como",
            "session.signing_out": "Saindo\u2026",
            "support.attachments_aria": "Upload de anexos",
            "support.attachments_label": "Anexos",
            "support.close_button": "Fechar",
            "support.done_button": "Conclu\xEDdo",
            "support.dropzone_text": "Solte imagens aqui ou clique para selecionar",
            "support.email_placeholder": "Digite seu e-mail",
            "support.file_requirements": "JPEG/PNG/WebP, at\xE9 {max} arquivos, \u2264 {size} MB cada",
            "support.heading": "Suporte",
            "support.instruction": "Por favor, preencha o formul\xE1rio abaixo para enviar sua solicita\xE7\xE3o de suporte.",
            "support.invalid_email": "E-mail inv\xE1lido",
            "support.invalid_file": "Apenas JPEG/PNG/WebP, \u2264 {size} MB cada",
            "support.message_length": "1\u20135000 caracteres",
            "support.message_placeholder": "Digite sua mensagem",
            "support.remove_file_aria": "Remover {filename}",
            "support.required": "Obrigat\xF3rio",
            "support.send_another": "Enviar outra solicita\xE7\xE3o",
            "support.send_button": "Enviar",
            "support.sending": "Enviando\u2026",
            "support.sending_as": "Enviando como",
            "support.subject_length": "3\u2013200 caracteres",
            "support.subject_placeholder": "Digite o assunto",
            "support.success_heading": "Solicita\xE7\xE3o enviada",
            "support.success_message_prefix": "Recebemos sua mensagem e responderemos para",
            "support.too_many_files": "At\xE9 {max} arquivos"
        }
    }
    );
    var fi = {};
    E(fi, {
        default: () => vr
    });
    var vr, yi = T( () => {
        vr = {
            "anon.heading_default": "Continu\u0103 ca invitat",
            "anon.try_again": "\xCEncearc\u0103 din nou",
            "auth.back_to_login": "\xCEnapoi la autentificare",
            "auth.check_email_message": "Verific\u0103-\u021Bi e-mailul \u2014 am trimis un cod de confirmare.",
            "auth.check_email_title": "Verific\u0103-\u021Bi e-mailul",
            "auth.confirm_email_title": "Confirm\u0103-\u021Bi e-mailul",
            "auth.confirmation_code": "Cod de confirmare",
            "auth.continue_with_apple": "Continu\u0103 cu Apple",
            "auth.continue_with_facebook": "Continu\u0103 cu Facebook",
            "auth.continue_with_github": "Continu\u0103 cu GitHub",
            "auth.continue_with_google": "Continu\u0103 cu Google",
            "auth.create_account": "Creeaz\u0103 cont",
            "auth.default_subtitle": "Autentific\u0103-te pentru a accesa toate func\u021Biile \u0219i sincroniza datele.",
            "auth.email": "Adres\u0103 de e-mail",
            "auth.email_already_registered": "Acest e-mail este deja \xEEnregistrat. Conecteaz\u0103-te mai jos cu parola sau contul folosit la \xEEnregistrare.",
            "auth.email_exists": "Exist\u0103 deja un cont cu acest e-mail.",
            "auth.email_not_confirmed": "Te rug\u0103m s\u0103-\u021Bi confirmi mai \xEEnt\xE2i e-mailul.",
            "auth.forgot_password": "Ai uitat parola?",
            "auth.forgot_password_title": "Ai uitat parola?",
            "auth.forgot_subtitle": "Introdu adresa de e-mail \u0219i \xEE\u021Bi vom trimite un link de resetare a parolei.",
            "auth.generic_error": "Ceva nu a mers bine",
            "auth.have_account": "Ai deja cont?",
            "auth.hide_password": "Ascunde parola",
            "auth.identity_already_linked": "Acest cont este deja \xEEnregistrat. Conecteaz\u0103-te cu el mai jos.",
            "auth.invalid_credentials": "E-mail sau parol\u0103 incorecte",
            "auth.invalid_otp": "Codul este invalid sau expirat.",
            "auth.last_used": "Ultima dat\u0103 \xB7 {email}",
            "auth.last_used_no_email": "Ultima dat\u0103",
            "auth.link_purchase_subheading": "Vom asocia achizi\u021Bia cu contul t\u0103u pentru a p\u0103stra accesul.",
            "auth.log_in": "Autentific\u0103-te",
            "auth.log_in_link": "Autentific\u0103-te",
            "auth.login_continue_purchase": "Autentific\u0103-te pentru a continua achizi\u021Bia",
            "auth.network_error": "Eroare de re\u021Bea. Verific\u0103 conexiunea \u0219i \xEEncearc\u0103 din nou.",
            "auth.no_account": "Nu ai cont?",
            "auth.or": "sau",
            "auth.password": "Parol\u0103",
            "auth.passwords_mismatch": "Parolele nu se potrivesc",
            "auth.rate_limited": "Prea multe cereri. \xCEncearc\u0103 din nou mai t\xE2rziu.",
            "auth.repeat_password": "Repet\u0103 parola",
            "auth.reset_link_valid": "Linkul este valabil 1 or\u0103.",
            "auth.reset_password_title": "Resetare parol\u0103",
            "auth.reset_sent_message": "Dac\u0103 acel e-mail exist\u0103, a fost trimis un cod de resetare.",
            "auth.reset_sent_subtitle": "Am trimis un link pentru resetarea parolei. Urmeaz\u0103 instruc\u021Biunile din e-mail.",
            "auth.restore_purchases_heading": "Restabile\u0219te achizi\u021Biile",
            "auth.restore_purchases_subheading": "Autentific\u0103-te pentru a-\u021Bi restabili achizi\u021Biile.",
            "auth.send_reset": "Trimite e-mail de resetare",
            "auth.service_unavailable": "Serviciu temporar indisponibil. \xCEncearc\u0103 mai t\xE2rziu.",
            "auth.show_password": "Afi\u0219eaz\u0103 parola",
            "auth.sign_out": "Deconectare",
            "auth.sign_up": "\xCEnregistreaz\u0103-te",
            "auth.sign_up_link": "\xCEnregistreaz\u0103-te",
            "auth.signed_in": "Conectat",
            "auth.signin_failed": "Conectare e\u0219uat\u0103",
            "auth.signup_failed": "\xCEnregistrarea a e\u0219uat",
            "auth.verify": "Verific\u0103",
            "auth.weak_password": "Parola este prea slab\u0103.",
            "auth.welcome": "Bun venit!",
            "auth.welcome_signup": "Bun venit!",
            "cta.close": "\xCEnchide",
            "cta.continue": "Continu\u0103",
            "cta.get_lifetime_access": "Ob\u021Bine acces pe via\u021B\u0103",
            "cta.get_plan_daily": "Ob\u021Bine plan zilnic",
            "cta.get_plan_monthly": "Ob\u021Bine plan lunar",
            "cta.get_plan_weekly": "Ob\u021Bine plan s\u0103pt\u0103m\xE2nal",
            "cta.get_plan_yearly": "Ob\u021Bine plan anual",
            "cta.start_trial": "\xCEncepe perioada de prob\u0103 gratuit\u0103 de {days} zile",
            "modal.close_aria": "\xCEnchide",
            "modal.continue": "Continu\u0103",
            "modal.error_generic": "Ceva nu a mers bine",
            "modal.loading": "Se \xEEncarc\u0103\u2026",
            "modal.purchase_restored_subtitle": "Totul e gata \u2014 bucur\u0103-te!",
            "modal.purchase_restored_title": "Bine ai revenit",
            "modal.purchase_success_subtitle": "Totul e gata \u2014 bucur\u0103-te!",
            "modal.purchase_success_title": "Plat\u0103 primit\u0103",
            "modal.verifying_subscription": "Se verific\u0103 abonamentul\u2026",
            "nav.back": "\u2190 \xCEnapoi",
            "nav.back_aria": "\xCEnapoi",
            "offer.limited_time": "Ofert\u0103 pe timp limitat",
            "payment.awaiting_title": "Finalizeaz\u0103 plata \xEEn noua fil\u0103",
            "payment.checking": "Se verific\u0103\u2026",
            "payment.ive_paid": "Am pl\u0103tit",
            "payment.open_checkout_again": "Deschide plata din nou",
            "payment.open_checkout_button": "Deschide plata",
            "pricing.free_trial_days": "{days} zile prob\u0103 gratuit\u0103",
            "pricing.included_per": "Inclus pe {interval}:",
            "pricing.interval.day": "zi",
            "pricing.interval.lifetime_short": "pe via\u021B\u0103",
            "pricing.interval.month": "lun\u0103",
            "pricing.interval.period": "perioad\u0103",
            "pricing.interval.week": "s\u0103pt\u0103m\xE2n\u0103",
            "pricing.interval.year": "an",
            "pricing.money_back": "Garan\u021Bie de returnare a banilor de 30 de zile",
            "pricing.most_popular": "Cel mai popular",
            "pricing.no_prices": "Niciun pre\u021B disponibil.",
            "pricing.plan_label.daily": "PLAN ZILNIC",
            "pricing.plan_label.lifetime": "pe via\u021B\u0103",
            "pricing.plan_label.monthly": "plan lunar",
            "pricing.plan_label.weekly": "plan s\u0103pt\u0103m\xE2nal",
            "pricing.plan_label.yearly": "plan anual",
            "pricing.plans_aria": "Planuri",
            "session.contact_support": "Contacteaz\u0103 suportul",
            "session.restore_purchases": "Restabile\u0219te achizi\u021Biile",
            "session.sign_out": "Deconectare",
            "session.signed_in_as_prefix": "Conectat ca",
            "session.signing_out": "Deconectare\u2026",
            "support.attachments_label": "Ata\u0219amente",
            "support.close_button": "\xCEnchide",
            "support.done_button": "Gata",
            "support.email_placeholder": "Introdu e-mailul t\u0103u",
            "support.heading": "Suport",
            "support.instruction": "Te rug\u0103m s\u0103 completezi formularul de mai jos pentru a trimite cererea de suport.",
            "support.invalid_email": "E-mail invalid",
            "support.message_length": "1\u20135000 caractere",
            "support.message_placeholder": "Introdu mesajul",
            "support.required": "Obligatoriu",
            "support.send_another": "Trimite o alt\u0103 cerere",
            "support.send_button": "Trimite",
            "support.sending": "Se trimite\u2026",
            "support.subject_length": "3\u2013200 caractere",
            "support.subject_placeholder": "Introdu subiectul",
            "support.success_heading": "Cerere trimis\u0103",
            "support.success_message_prefix": "Am primit mesajul t\u0103u \u0219i vom r\u0103spunde la"
        }
    }
    );
    var bi = {};
    E(bi, {
        default: () => kr
    });
    var kr, wi = T( () => {
        kr = {
            "anon.description_default": "\u041D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C \u0433\u043E\u0441\u0442\u0435\u0432\u0443\u044E \u0441\u0435\u0441\u0441\u0438\u044E\u2026",
            "anon.heading_default": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043A\u0430\u043A \u0433\u043E\u0441\u0442\u044C",
            "anon.try_again": "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430",
            "auth.back_to_login": "\u041D\u0430\u0437\u0430\u0434 \u043A\u043E \u0432\u0445\u043E\u0434\u0443",
            "auth.check_email_message": "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0447\u0442\u0443 \u2014 \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F.",
            "auth.check_email_title": "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0447\u0442\u0443",
            "auth.confirm_email_subtitle": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u043D\u0430 \u0432\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E.",
            "auth.confirm_email_title": "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u0443",
            "auth.confirmation_code": "\u041A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F",
            "auth.continue_with_apple": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 Apple",
            "auth.continue_with_facebook": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 Facebook",
            "auth.continue_with_github": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 GitHub",
            "auth.continue_with_google": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 Google",
            "auth.create_account": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442",
            "auth.default_subtitle": "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A\u043E \u0432\u0441\u0435\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u044F\u043C \u0438 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445.",
            "auth.email": "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
            "auth.email_already_registered": "\u042D\u0442\u043E\u0442 email \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D. \u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u043D\u0438\u0436\u0435 \u2014 \u043F\u0430\u0440\u043E\u043B\u0435\u043C \u0438\u043B\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u043C, \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C.",
            "auth.email_exists": "\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0441 \u0442\u0430\u043A\u0438\u043C email \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.",
            "auth.email_not_confirmed": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 email.",
            "auth.forgot_password": "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
            "auth.forgot_password_title": "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
            "auth.forgot_subtitle": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email, \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0441\u0441\u044B\u043B\u043A\u0443 \u0434\u043B\u044F \u0441\u0431\u0440\u043E\u0441\u0430 \u043F\u0430\u0440\u043E\u043B\u044F.",
            "auth.generic_error": "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A",
            "auth.have_account": "\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442?",
            "auth.hide_password": "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
            "auth.identity_already_linked": "\u042D\u0442\u043E\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D. \u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u043D\u0435\u0433\u043E \u043D\u0438\u0436\u0435.",
            "auth.invalid_credentials": "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 email \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C",
            "auth.invalid_otp": "\u041A\u043E\u0434 \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u0435\u043D \u0438\u043B\u0438 \u0438\u0441\u0442\u0451\u043A.",
            "auth.last_used": "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u0445\u043E\u0434 \xB7 {email}",
            "auth.last_used_no_email": "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432\u0445\u043E\u0434",
            "auth.link_purchase_subheading": "\u041F\u0440\u0438\u0432\u044F\u0436\u0435\u043C \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043A \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0441\u0442\u0443\u043F \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u0441\u044F.",
            "auth.log_in": "\u0412\u043E\u0439\u0442\u0438",
            "auth.log_in_link": "\u0412\u043E\u0439\u0442\u0438",
            "auth.login_continue_purchase": "\u0412\u043E\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0443",
            "auth.network_error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0442\u0438. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.",
            "auth.no_account": "\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?",
            "auth.or": "\u0438\u043B\u0438",
            "auth.password": "\u041F\u0430\u0440\u043E\u043B\u044C",
            "auth.passwords_mismatch": "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442",
            "auth.rate_limited": "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.",
            "auth.repeat_password": "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
            "auth.reset_link_valid": "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 1 \u0447\u0430\u0441.",
            "auth.reset_password_subtitle": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 \u043F\u0438\u0441\u044C\u043C\u0430 \u0438 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C.",
            "auth.reset_password_title": "\u0421\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F",
            "auth.reset_sent_message": "\u0415\u0441\u043B\u0438 \u0442\u0430\u043A\u043E\u0439 email \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u043A\u043E\u0434 \u0434\u043B\u044F \u0441\u0431\u0440\u043E\u0441\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D.",
            "auth.reset_sent_subtitle": "\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0443 \u0434\u043B\u044F \u0441\u0431\u0440\u043E\u0441\u0430 \u043F\u0430\u0440\u043E\u043B\u044F. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F\u043C \u0432 \u043F\u0438\u0441\u044C\u043C\u0435.",
            "auth.restore_purchases_heading": "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438",
            "auth.restore_purchases_subheading": "\u0412\u043E\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438.",
            "auth.send_reset": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E \u0434\u043B\u044F \u0441\u0431\u0440\u043E\u0441\u0430",
            "auth.service_unavailable": "\u0421\u0435\u0440\u0432\u0438\u0441 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.",
            "auth.show_password": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
            "auth.sign_out": "\u0412\u044B\u0439\u0442\u0438",
            "auth.sign_up": "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F",
            "auth.sign_up_link": "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F",
            "auth.signed_in": "\u0412\u044B \u0432\u043E\u0448\u043B\u0438",
            "auth.signin_failed": "\u0412\u0445\u043E\u0434 \u043D\u0435 \u0443\u0434\u0430\u043B\u0441\u044F",
            "auth.signup_failed": "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C",
            "auth.verify": "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",
            "auth.weak_password": "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0441\u043B\u0430\u0431\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C.",
            "auth.welcome": "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!",
            "auth.welcome_signup": "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!",
            "countdown.d": "\u0434",
            "countdown.h": "\u0447",
            "countdown.m": "\u043C\u0438\u043D",
            "countdown.s": "\u0441",
            "cta.close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
            "cta.continue": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
            "cta.get_lifetime_access": "\u041A\u0443\u043F\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430",
            "cta.get_plan_daily": "\u041A\u0443\u043F\u0438\u0442\u044C \u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0442\u0430\u0440\u0438\u0444",
            "cta.get_plan_generic": "\u041A\u0443\u043F\u0438\u0442\u044C {interval} \u0442\u0430\u0440\u0438\u0444",
            "cta.get_plan_monthly": "\u041A\u0443\u043F\u0438\u0442\u044C \u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u0442\u0430\u0440\u0438\u0444",
            "cta.get_plan_weekly": "\u041A\u0443\u043F\u0438\u0442\u044C \u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0430\u0440\u0438\u0444",
            "cta.get_plan_yearly": "\u041A\u0443\u043F\u0438\u0442\u044C \u0433\u043E\u0434\u043E\u0432\u043E\u0439 \u0442\u0430\u0440\u0438\u0444",
            "cta.start_trial": "\u041D\u0430\u0447\u0430\u0442\u044C {days}-\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u043F\u0440\u043E\u0431\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434",
            "modal.close_aria": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
            "modal.continue": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
            "modal.error_generic": "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A",
            "modal.loading": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026",
            "modal.purchase_restored_subtitle": "\u0412\u0441\u0451 \u0433\u043E\u0442\u043E\u0432\u043E \u2014 \u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435\u0441\u044C!",
            "modal.purchase_restored_title": "\u0421 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435\u043C",
            "modal.purchase_success_subtitle": "\u0412\u0441\u0451 \u0433\u043E\u0442\u043E\u0432\u043E \u2014 \u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435\u0441\u044C!",
            "modal.purchase_success_title": "\u041F\u043B\u0430\u0442\u0451\u0436 \u043F\u043E\u043B\u0443\u0447\u0435\u043D",
            "modal.verifying_subscription": "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443\u2026",
            "nav.back": "\u2190 \u041D\u0430\u0437\u0430\u0434",
            "nav.back_aria": "\u041D\u0430\u0437\u0430\u0434",
            "offer.limited_time": "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
            "payment.awaiting_subtitle": "\u041C\u044B \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043C \u043E\u043F\u043B\u0430\u0442\u0443 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u2014 \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443, \u043A\u043E\u0433\u0434\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0435.",
            "payment.awaiting_title": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u043E\u043F\u043B\u0430\u0442\u044B...",
            "payment.checking": "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u2026",
            "payment.ive_paid": "\u042F \u043E\u043F\u043B\u0430\u0442\u0438\u043B",
            "payment.open_checkout_again": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0443 \u0441\u043D\u043E\u0432\u0430",
            "payment.open_checkout_button": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0443",
            "payment.popup_blocked_message": "\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043B \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u0441 \u043E\u043F\u043B\u0430\u0442\u043E\u0439. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0438\u0436\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0435\u0451.",
            "payment.popup_blocked_title": "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u043E\u043A\u043D\u0430, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
            "payment.popup_help_text": "\u041E\u043A\u043D\u043E \u043E\u043F\u043B\u0430\u0442\u044B \u043D\u0435 \u043E\u0442\u043A\u0440\u044B\u043B\u043E\u0441\u044C \u0438\u043B\u0438 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E? \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u043D\u043E\u0432\u0430.",
            "payment.still_processing": "\u041F\u043B\u0430\u0442\u0451\u0436 \u0435\u0449\u0451 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0447\u0435\u0440\u0435\u0437 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u0438\u0435.",
            "payment.tab_closed_retry": "\u0417\u0430\u043A\u0440\u044B\u043B\u0438 \u0432\u043A\u043B\u0430\u0434\u043A\u0443? \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430",
            "pricing.free_trial_days": "{days}-\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043F\u0440\u043E\u0431\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F",
            "pricing.included_per": "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0437\u0430 {interval}:",
            "pricing.interval.day": "\u0434\u0435\u043D\u044C",
            "pricing.interval.lifetime_short": "\u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430",
            "pricing.interval.month": "\u043C\u0435\u0441\u044F\u0446",
            "pricing.interval.period": "\u043F\u0435\u0440\u0438\u043E\u0434",
            "pricing.interval.week": "\u043D\u0435\u0434\u0435\u043B\u044F",
            "pricing.interval.year": "\u0433\u043E\u0434",
            "pricing.money_back": "30-\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 \u0434\u0435\u043D\u0435\u0433",
            "pricing.most_popular": "\u0421\u0430\u043C\u044B\u0439 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0439",
            "pricing.no_prices": "\u0422\u0430\u0440\u0438\u0444\u043E\u0432 \u043D\u0435\u0442.",
            "pricing.plan_label.daily": "\u0415\u0416\u0415\u0414\u041D\u0415\u0412\u041D\u042B\u0419 \u0422\u0410\u0420\u0418\u0424",
            "pricing.plan_label.lifetime": "\u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430",
            "pricing.plan_label.monthly": "\u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u0442\u0430\u0440\u0438\u0444",
            "pricing.plan_label.weekly": "\u0435\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0430\u0440\u0438\u0444",
            "pricing.plan_label.yearly": "\u0435\u0436\u0435\u0433\u043E\u0434\u043D\u044B\u0439 \u0442\u0430\u0440\u0438\u0444",
            "pricing.plans_aria": "\u0422\u0430\u0440\u0438\u0444\u044B",
            "session.contact_support": "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430",
            "session.restore_purchases": "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438",
            "session.sign_out": "\u0412\u044B\u0439\u0442\u0438",
            "session.signed_in_as_prefix": "\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A",
            "session.signing_out": "\u0412\u044B\u0445\u043E\u0434\u2026",
            "support.attachments_aria": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u0439",
            "support.attachments_label": "\u0412\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
            "support.close_button": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
            "support.done_button": "\u0413\u043E\u0442\u043E\u0432\u043E",
            "support.dropzone_text": "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441\u044E\u0434\u0430 \u0438\u043B\u0438 \u043A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430",
            "support.email_placeholder": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",
            "support.file_requirements": "JPEG/PNG/WebP, \u0434\u043E {max} \u0444\u0430\u0439\u043B\u043E\u0432, \u2264 {size} \u041C\u0411 \u043A\u0430\u0436\u0434\u044B\u0439",
            "support.heading": "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430",
            "support.instruction": "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u043D\u0438\u0436\u0435 \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0432 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443.",
            "support.invalid_email": "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email",
            "support.invalid_file": "\u0422\u043E\u043B\u044C\u043A\u043E JPEG/PNG/WebP, \u2264 {size} \u041C\u0411 \u043A\u0430\u0436\u0434\u044B\u0439",
            "support.message_length": "1\u20135000 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
            "support.message_placeholder": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
            "support.remove_file_aria": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C {filename}",
            "support.required": "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E",
            "support.send_another": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u0437\u0430\u043F\u0440\u043E\u0441",
            "support.send_button": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
            "support.sending": "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430\u2026",
            "support.sending_as": "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u043E\u0442",
            "support.subject_length": "3\u2013200 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
            "support.subject_placeholder": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043C\u0443",
            "support.success_heading": "\u0417\u0430\u043F\u0440\u043E\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D",
            "support.success_message_prefix": "\u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0438 \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u043D\u0430",
            "support.too_many_files": "\u0414\u043E {max} \u0444\u0430\u0439\u043B\u043E\u0432"
        }
    }
    );
    var vi = {};
    E(vi, {
        default: () => xr
    });
    var xr, ki = T( () => {
        xr = {
            "anon.heading_default": "Forts\xE4tt som g\xE4st",
            "anon.try_again": "F\xF6rs\xF6k igen",
            "auth.back_to_login": "Tillbaka till inloggning",
            "auth.check_email_message": "Kontrollera din e-post \u2014 vi har skickat en bekr\xE4ftelsekod.",
            "auth.check_email_title": "Kontrollera din e-post",
            "auth.confirm_email_title": "Bekr\xE4fta din e-post",
            "auth.confirmation_code": "Bekr\xE4ftelsekod",
            "auth.continue_with_apple": "Forts\xE4tt med Apple",
            "auth.continue_with_facebook": "Forts\xE4tt med Facebook",
            "auth.continue_with_github": "Forts\xE4tt med GitHub",
            "auth.continue_with_google": "Forts\xE4tt med Google",
            "auth.create_account": "Skapa konto",
            "auth.default_subtitle": "Logga in f\xF6r att f\xE5 tillg\xE5ng till alla funktioner och synkronisera din data.",
            "auth.email": "E-postadress",
            "auth.email_already_registered": "Den h\xE4r e-postadressen \xE4r redan registrerad. Logga in nedan med ditt l\xF6senord eller kontot du registrerade dig med.",
            "auth.email_exists": "Ett konto med denna e-post finns redan.",
            "auth.email_not_confirmed": "Bekr\xE4fta din e-post f\xF6rst.",
            "auth.forgot_password": "Gl\xF6mt l\xF6senord?",
            "auth.forgot_password_title": "Gl\xF6mt l\xF6senord?",
            "auth.forgot_subtitle": "Ange din e-post s\xE5 skickar vi en l\xE4nk f\xF6r att \xE5terst\xE4lla ditt l\xF6senord.",
            "auth.generic_error": "N\xE5got gick fel",
            "auth.have_account": "Har du redan ett konto?",
            "auth.hide_password": "D\xF6lj l\xF6senord",
            "auth.identity_already_linked": "Det h\xE4r kontot \xE4r redan registrerat. Logga in med det nedan.",
            "auth.invalid_credentials": "Felaktig e-post eller l\xF6senord",
            "auth.invalid_otp": "Koden \xE4r ogiltig eller har g\xE5tt ut.",
            "auth.last_used": "Senast anv\xE4nd \xB7 {email}",
            "auth.last_used_no_email": "Senast anv\xE4nd",
            "auth.link_purchase_subheading": "Vi l\xE4nkar k\xF6pet till ditt konto f\xF6r att beh\xE5lla \xE5tkomsten.",
            "auth.log_in": "Logga In",
            "auth.log_in_link": "Logga In",
            "auth.login_continue_purchase": "Logga in f\xF6r att forts\xE4tta ditt k\xF6p",
            "auth.network_error": "N\xE4tverksfel. Kontrollera anslutningen och f\xF6rs\xF6k igen.",
            "auth.no_account": "Har du inget konto?",
            "auth.or": "eller",
            "auth.password": "L\xF6senord",
            "auth.passwords_mismatch": "L\xF6senorden matchar inte",
            "auth.rate_limited": "F\xF6r m\xE5nga f\xF6rfr\xE5gningar. F\xF6rs\xF6k igen senare.",
            "auth.repeat_password": "Upprepa l\xF6senord",
            "auth.reset_link_valid": "L\xE4nken \xE4r giltig i 1 timme.",
            "auth.reset_password_title": "\xC5terst\xE4ll l\xF6senord",
            "auth.reset_sent_message": "Om e-postadressen finns har en \xE5terst\xE4llningskod skickats.",
            "auth.reset_sent_subtitle": "Vi har skickat en l\xE4nk f\xF6r att \xE5terst\xE4lla l\xF6senordet. F\xF6lj instruktionerna i e-postmeddelandet.",
            "auth.restore_purchases_heading": "\xC5terst\xE4ll K\xF6p",
            "auth.restore_purchases_subheading": "Logga in f\xF6r att \xE5terst\xE4lla dina k\xF6p.",
            "auth.send_reset": "Skicka \xC5terst\xE4llningsmail",
            "auth.service_unavailable": "Tj\xE4nsten \xE4r tillf\xE4lligt otillg\xE4nglig. F\xF6rs\xF6k igen senare.",
            "auth.show_password": "Visa l\xF6senord",
            "auth.sign_out": "Logga ut",
            "auth.sign_up": "Registrera",
            "auth.sign_up_link": "Registrera",
            "auth.signed_in": "Inloggad",
            "auth.signin_failed": "Inloggning misslyckades",
            "auth.signup_failed": "Registrering misslyckades",
            "auth.verify": "Verifiera",
            "auth.weak_password": "L\xF6senordet \xE4r f\xF6r svagt.",
            "auth.welcome": "V\xE4lkommen!",
            "auth.welcome_signup": "V\xE4lkommen!",
            "cta.close": "St\xE4ng",
            "cta.continue": "Forts\xE4tt",
            "cta.get_lifetime_access": "F\xE5 livstids\xE5tkomst",
            "cta.get_plan_daily": "H\xE4mta daglig plan",
            "cta.get_plan_monthly": "H\xE4mta m\xE5nadsplan",
            "cta.get_plan_weekly": "H\xE4mta veckoplan",
            "cta.get_plan_yearly": "H\xE4mta \xE5rsplan",
            "cta.start_trial": "Starta {days} Dagars Gratis Provperiod",
            "modal.close_aria": "St\xE4ng",
            "modal.continue": "Forts\xE4tt",
            "modal.error_generic": "N\xE5got gick fel",
            "modal.loading": "Laddar\u2026",
            "modal.purchase_restored_subtitle": "Allt \xE4r klart \u2014 ha s\xE5 kul!",
            "modal.purchase_restored_title": "V\xE4lkommen tillbaka",
            "modal.purchase_success_subtitle": "Allt \xE4r klart \u2014 ha s\xE5 kul!",
            "modal.purchase_success_title": "Betalning mottagen",
            "modal.verifying_subscription": "Kontrollerar prenumeration\u2026",
            "nav.back": "\u2190 Tillbaka",
            "nav.back_aria": "Tillbaka",
            "offer.limited_time": "Tidsbegr\xE4nsat erbjudande",
            "payment.awaiting_title": "Slutf\xF6r betalningen i den nya fliken",
            "payment.checking": "Kontrollerar\u2026",
            "payment.ive_paid": "Jag har betalat",
            "payment.open_checkout_again": "\xD6ppna kassan igen",
            "payment.open_checkout_button": "\xD6ppna kassan",
            "pricing.free_trial_days": "{days} dagars gratis provperiod",
            "pricing.included_per": "Ing\xE5r per {interval}:",
            "pricing.interval.day": "dag",
            "pricing.interval.lifetime_short": "livstid",
            "pricing.interval.month": "m\xE5nad",
            "pricing.interval.period": "period",
            "pricing.interval.week": "vecka",
            "pricing.interval.year": "\xE5r",
            "pricing.money_back": "30 dagars pengarna-tillbaka-garanti",
            "pricing.most_popular": "Popul\xE4rast",
            "pricing.no_prices": "Inga priser tillg\xE4ngliga.",
            "pricing.plan_label.daily": "DAGLIG PLAN",
            "pricing.plan_label.lifetime": "livstid",
            "pricing.plan_label.monthly": "m\xE5nadsplan",
            "pricing.plan_label.weekly": "veckoplan",
            "pricing.plan_label.yearly": "\xE5rsplan",
            "pricing.plans_aria": "Planer",
            "session.contact_support": "Kontakta support",
            "session.restore_purchases": "\xC5terst\xE4ll k\xF6p",
            "session.sign_out": "Logga ut",
            "session.signed_in_as_prefix": "Inloggad som",
            "session.signing_out": "Loggar ut\u2026",
            "support.attachments_label": "Bilagor",
            "support.close_button": "St\xE4ng",
            "support.done_button": "Klart",
            "support.email_placeholder": "Ange din e-post",
            "support.heading": "Support",
            "support.instruction": "Fyll i formul\xE4ret nedan f\xF6r att skicka din supportf\xF6rfr\xE5gan.",
            "support.invalid_email": "Ogiltig e-post",
            "support.message_length": "1\u20135000 tecken",
            "support.message_placeholder": "Ange ditt meddelande",
            "support.required": "Obligatoriskt",
            "support.send_another": "Skicka ytterligare f\xF6rfr\xE5gan",
            "support.send_button": "Skicka",
            "support.sending": "Skickar\u2026",
            "support.subject_length": "3\u2013200 tecken",
            "support.subject_placeholder": "Ange ditt \xE4mne",
            "support.success_heading": "F\xF6rfr\xE5gan skickad",
            "support.success_message_prefix": "Vi har tagit emot ditt meddelande och svarar p\xE5"
        }
    }
    );
    var xi = {};
    E(xi, {
        default: () => Sr
    });
    var Sr, Si = T( () => {
        Sr = {
            "anon.heading_default": "\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E43\u0E19\u0E10\u0E32\u0E19\u0E30\u0E41\u0E02\u0E01",
            "anon.try_again": "\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
            "auth.back_to_login": "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",
            "auth.check_email_message": "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E2B\u0E31\u0E2A\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",
            "auth.check_email_title": "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
            "auth.confirm_email_title": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
            "auth.confirmation_code": "\u0E23\u0E2B\u0E31\u0E2A\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",
            "auth.continue_with_apple": "\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E14\u0E49\u0E27\u0E22 Apple",
            "auth.continue_with_facebook": "\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E14\u0E49\u0E27\u0E22 Facebook",
            "auth.continue_with_github": "\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E14\u0E49\u0E27\u0E22 GitHub",
            "auth.continue_with_google": "\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E14\u0E49\u0E27\u0E22 Google",
            "auth.create_account": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35",
            "auth.default_subtitle": "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E1F\u0E35\u0E40\u0E08\u0E2D\u0E23\u0E4C\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E41\u0E25\u0E30\u0E0B\u0E34\u0E07\u0E04\u0E4C\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
            "auth.email": "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
            "auth.email_already_registered": "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E19\u0E35\u0E49\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E44\u0E27\u0E49\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E14\u0E49\u0E27\u0E22\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E43\u0E0A\u0E49\u0E2A\u0E21\u0E31\u0E04\u0E23",
            "auth.email_exists": "\u0E21\u0E35\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E19\u0E35\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27",
            "auth.email_not_confirmed": "\u0E42\u0E1B\u0E23\u0E14\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E01\u0E48\u0E2D\u0E19",
            "auth.forgot_password": "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19?",
            "auth.forgot_password_title": "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19?",
            "auth.forgot_subtitle": "\u0E43\u0E2A\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E41\u0E25\u0E49\u0E27\u0E40\u0E23\u0E32\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13",
            "auth.generic_error": "\u0E21\u0E35\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14",
            "auth.have_account": "\u0E21\u0E35\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27?",
            "auth.hide_password": "\u0E0B\u0E48\u0E2D\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
            "auth.identity_already_linked": "\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E19\u0E35\u0E49\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E44\u0E27\u0E49\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E19\u0E35\u0E49\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07",
            "auth.invalid_credentials": "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
            "auth.invalid_otp": "\u0E23\u0E2B\u0E31\u0E2A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38",
            "auth.last_used": "\u0E43\u0E0A\u0E49\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14 \xB7 {email}",
            "auth.last_used_no_email": "\u0E43\u0E0A\u0E49\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14",
            "auth.link_purchase_subheading": "\u0E40\u0E23\u0E32\u0E08\u0E30\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E42\u0E22\u0E07\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E01\u0E31\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E01\u0E29\u0E32\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07",
            "auth.log_in": "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",
            "auth.log_in_link": "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",
            "auth.login_continue_purchase": "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E15\u0E48\u0E2D",
            "auth.network_error": "\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E41\u0E25\u0E49\u0E27\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
            "auth.no_account": "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1A\u0E31\u0E0D\u0E0A\u0E35?",
            "auth.or": "\u0E2B\u0E23\u0E37\u0E2D",
            "auth.password": "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
            "auth.passwords_mismatch": "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E19",
            "auth.rate_limited": "\u0E21\u0E35\u0E04\u0E33\u0E02\u0E2D\u0E21\u0E32\u0E01\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B \u0E42\u0E1B\u0E23\u0E14\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07",
            "auth.repeat_password": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
            "auth.reset_link_valid": "\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E21\u0E35\u0E2D\u0E32\u0E22\u0E38 1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
            "auth.reset_password_title": "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
            "auth.reset_sent_message": "\u0E2B\u0E32\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E19\u0E35\u0E49\u0E21\u0E35\u0E2D\u0E22\u0E39\u0E48 \u0E23\u0E30\u0E1A\u0E1A\u0E44\u0E14\u0E49\u0E2A\u0E48\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E41\u0E25\u0E49\u0E27",
            "auth.reset_sent_subtitle": "\u0E40\u0E23\u0E32\u0E44\u0E14\u0E49\u0E2A\u0E48\u0E07\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E41\u0E25\u0E49\u0E27 \u0E17\u0E33\u0E15\u0E32\u0E21\u0E04\u0E33\u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25",
            "auth.restore_purchases_heading": "\u0E04\u0E37\u0E19\u0E04\u0E48\u0E32\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D",
            "auth.restore_purchases_subheading": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E37\u0E19\u0E04\u0E48\u0E32\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
            "auth.send_reset": "\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15",
            "auth.service_unavailable": "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E44\u0E21\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E0A\u0E31\u0E48\u0E27\u0E04\u0E23\u0E32\u0E27 \u0E42\u0E1B\u0E23\u0E14\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07",
            "auth.show_password": "\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
            "auth.sign_out": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A",
            "auth.sign_up": "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01",
            "auth.sign_up_link": "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01",
            "auth.signed_in": "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E25\u0E49\u0E27",
            "auth.signin_failed": "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
            "auth.signup_failed": "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
            "auth.verify": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",
            "auth.weak_password": "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E2D\u0E48\u0E2D\u0E19\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B",
            "auth.welcome": "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A!",
            "auth.welcome_signup": "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A!",
            "countdown.d": "\u0E27",
            "countdown.h": "\u0E0A\u0E21",
            "countdown.m": "\u0E19\u0E32\u0E17\u0E35",
            "countdown.s": "\u0E27\u0E34",
            "cta.close": "\u0E1B\u0E34\u0E14",
            "cta.continue": "\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D",
            "cta.get_lifetime_access": "\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E15\u0E25\u0E2D\u0E14\u0E0A\u0E35\u0E1E",
            "cta.get_plan_daily": "\u0E23\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E23\u0E32\u0E22\u0E27\u0E31\u0E19",
            "cta.get_plan_monthly": "\u0E23\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E23\u0E32\u0E22\u0E40\u0E14\u0E37\u0E2D\u0E19",
            "cta.get_plan_weekly": "\u0E23\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E23\u0E32\u0E22\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
            "cta.get_plan_yearly": "\u0E23\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E23\u0E32\u0E22\u0E1B\u0E35",
            "cta.start_trial": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E1F\u0E23\u0E35 {days} \u0E27\u0E31\u0E19",
            "modal.close_aria": "\u0E1B\u0E34\u0E14",
            "modal.continue": "\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D",
            "modal.error_generic": "\u0E21\u0E35\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14",
            "modal.loading": "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14\u2026",
            "modal.purchase_restored_subtitle": "\u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E41\u0E25\u0E49\u0E27 \u2014 \u0E02\u0E2D\u0E43\u0E2B\u0E49\u0E2A\u0E19\u0E38\u0E01!",
            "modal.purchase_restored_title": "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E01\u0E25\u0E31\u0E1A",
            "modal.purchase_success_subtitle": "\u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E41\u0E25\u0E49\u0E27 \u2014 \u0E02\u0E2D\u0E43\u0E2B\u0E49\u0E2A\u0E19\u0E38\u0E01!",
            "modal.purchase_success_title": "\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E41\u0E25\u0E49\u0E27",
            "modal.verifying_subscription": "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u2026",
            "nav.back": "\u2190 \u0E01\u0E25\u0E31\u0E1A",
            "nav.back_aria": "\u0E01\u0E25\u0E31\u0E1A",
            "offer.limited_time": "\u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E08\u0E33\u0E01\u0E31\u0E14",
            "payment.awaiting_title": "\u0E17\u0E33\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E43\u0E2B\u0E49\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E43\u0E19\u0E41\u0E17\u0E47\u0E1A\u0E43\u0E2B\u0E21\u0E48",
            "payment.checking": "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u2026",
            "payment.ive_paid": "\u0E09\u0E31\u0E19\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E41\u0E25\u0E49\u0E27",
            "payment.open_checkout_again": "\u0E40\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
            "payment.open_checkout_button": "\u0E40\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19",
            "pricing.free_trial_days": "\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E1F\u0E23\u0E35 {days} \u0E27\u0E31\u0E19",
            "pricing.included_per": "\u0E23\u0E27\u0E21\u0E15\u0E48\u0E2D {interval}:",
            "pricing.interval.day": "\u0E27\u0E31\u0E19",
            "pricing.interval.lifetime_short": "\u0E15\u0E25\u0E2D\u0E14\u0E0A\u0E35\u0E1E",
            "pricing.interval.month": "\u0E40\u0E14\u0E37\u0E2D\u0E19",
            "pricing.interval.period": "\u0E07\u0E27\u0E14",
            "pricing.interval.week": "\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
            "pricing.interval.year": "\u0E1B\u0E35",
            "pricing.money_back": "\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E04\u0E37\u0E19\u0E40\u0E07\u0E34\u0E19 30 \u0E27\u0E31\u0E19",
            "pricing.most_popular": "\u0E22\u0E2D\u0E14\u0E19\u0E34\u0E22\u0E21",
            "pricing.no_prices": "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E23\u0E32\u0E04\u0E32",
            "pricing.plan_label.daily": "\u0E41\u0E1C\u0E19\u0E23\u0E32\u0E22\u0E27\u0E31\u0E19",
            "pricing.plan_label.lifetime": "\u0E15\u0E25\u0E2D\u0E14\u0E0A\u0E35\u0E1E",
            "pricing.plan_label.monthly": "\u0E41\u0E1E\u0E47\u0E01\u0E40\u0E01\u0E08\u0E23\u0E32\u0E22\u0E40\u0E14\u0E37\u0E2D\u0E19",
            "pricing.plan_label.weekly": "\u0E41\u0E1E\u0E47\u0E01\u0E40\u0E01\u0E08\u0E23\u0E32\u0E22\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
            "pricing.plan_label.yearly": "\u0E41\u0E1E\u0E47\u0E01\u0E40\u0E01\u0E08\u0E23\u0E32\u0E22\u0E1B\u0E35",
            "pricing.plans_aria": "\u0E41\u0E1C\u0E19",
            "session.contact_support": "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1D\u0E48\u0E32\u0E22\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19",
            "session.restore_purchases": "\u0E01\u0E39\u0E49\u0E04\u0E37\u0E19\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D",
            "session.sign_out": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A",
            "session.signed_in_as_prefix": "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E43\u0E19\u0E0A\u0E37\u0E48\u0E2D",
            "session.signing_out": "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A\u2026",
            "support.attachments_label": "\u0E44\u0E1F\u0E25\u0E4C\u0E41\u0E19\u0E1A",
            "support.close_button": "\u0E1B\u0E34\u0E14",
            "support.done_button": "\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19",
            "support.email_placeholder": "\u0E43\u0E2A\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
            "support.heading": "\u0E01\u0E32\u0E23\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19",
            "support.instruction": "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
            "support.invalid_email": "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
            "support.message_length": "1\u20135000 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
            "support.message_placeholder": "\u0E43\u0E2A\u0E48\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
            "support.required": "\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19",
            "support.send_another": "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
            "support.send_button": "\u0E2A\u0E48\u0E07",
            "support.sending": "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E48\u0E07\u2026",
            "support.subject_length": "3\u2013200 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
            "support.subject_placeholder": "\u0E43\u0E2A\u0E48\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
            "support.success_heading": "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E41\u0E25\u0E49\u0E27",
            "support.success_message_prefix": "\u0E40\u0E23\u0E32\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E41\u0E25\u0E49\u0E27\u0E41\u0E25\u0E30\u0E08\u0E30\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E17\u0E35\u0E48"
        }
    }
    );
    var Ii = {};
    E(Ii, {
        default: () => Ir
    });
    var Ir, zi = T( () => {
        Ir = {
            "anon.heading_default": "Misafir olarak devam et",
            "anon.try_again": "Tekrar dene",
            "auth.back_to_login": "Giri\u015Fe d\xF6n",
            "auth.check_email_message": "Onay kodu i\xE7in e-postan\u0131z\u0131 kontrol edin.",
            "auth.check_email_title": "E-postan\u0131z\u0131 kontrol edin",
            "auth.confirm_email_title": "E-postan\u0131 do\u011Frula",
            "auth.confirmation_code": "Do\u011Frulama kodu",
            "auth.continue_with_apple": "Apple ile devam et",
            "auth.continue_with_facebook": "Facebook ile devam et",
            "auth.continue_with_github": "GitHub ile devam et",
            "auth.continue_with_google": "Google ile devam et",
            "auth.create_account": "Hesap olu\u015Ftur",
            "auth.default_subtitle": "T\xFCm \xF6zelliklere eri\u015Fmek ve verilerinizi senkronize etmek i\xE7in giri\u015F yap\u0131n.",
            "auth.email": "E-posta adresi",
            "auth.email_already_registered": "Bu e-posta zaten kay\u0131tl\u0131. A\u015Fa\u011F\u0131dan \u015Fifrenizle veya kay\u0131t olurken kulland\u0131\u011F\u0131n\u0131z hesapla giri\u015F yap\u0131n.",
            "auth.email_exists": "Bu e-postaya ait bir hesap zaten var.",
            "auth.email_not_confirmed": "\xD6nce e-postan\u0131z\u0131 do\u011Frulay\u0131n.",
            "auth.forgot_password": "\u015Eifrenizi mi unuttunuz?",
            "auth.forgot_password_title": "\u015Eifrenizi mi unuttunuz?",
            "auth.forgot_subtitle": "E-posta adresinizi girin, size \u015Fifre s\u0131f\u0131rlama ba\u011Flant\u0131s\u0131 g\xF6nderelim.",
            "auth.generic_error": "Bir \u015Feyler ters gitti",
            "auth.have_account": "Hesab\u0131n\u0131z var m\u0131?",
            "auth.hide_password": "\u015Eifreyi gizle",
            "auth.identity_already_linked": "Bu hesap zaten kay\u0131tl\u0131. A\u015Fa\u011F\u0131dan onunla giri\u015F yap\u0131n.",
            "auth.invalid_credentials": "Ge\xE7ersiz e-posta veya \u015Fifre",
            "auth.invalid_otp": "Kod ge\xE7ersiz veya s\xFCresi dolmu\u015F.",
            "auth.last_used": "Son kullan\u0131lan \xB7 {email}",
            "auth.last_used_no_email": "Son kullan\u0131lan",
            "auth.link_purchase_subheading": "Eri\u015Fiminizi korumak i\xE7in sat\u0131n al\u0131m\u0131 hesab\u0131n\u0131za ba\u011Flayaca\u011F\u0131z.",
            "auth.log_in": "Giri\u015F yap",
            "auth.log_in_link": "Giri\u015F yap",
            "auth.login_continue_purchase": "Sat\u0131n almaya devam etmek i\xE7in giri\u015F yap\u0131n",
            "auth.network_error": "A\u011F hatas\u0131. Ba\u011Flant\u0131n\u0131z\u0131 kontrol edip tekrar deneyin.",
            "auth.no_account": "Hesab\u0131n\u0131z yok mu?",
            "auth.or": "veya",
            "auth.password": "\u015Eifre",
            "auth.passwords_mismatch": "\u015Eifreler e\u015Fle\u015Fmiyor",
            "auth.rate_limited": "\xC7ok fazla istek. L\xFCtfen daha sonra tekrar deneyin.",
            "auth.repeat_password": "\u015Eifreyi tekrarla",
            "auth.reset_link_valid": "Ba\u011Flant\u0131 1 saat ge\xE7erlidir.",
            "auth.reset_password_title": "\u015Eifreyi s\u0131f\u0131rla",
            "auth.reset_sent_message": "Bu e-posta varsa, s\u0131f\u0131rlama kodu g\xF6nderildi.",
            "auth.reset_sent_subtitle": "\u015Eifre s\u0131f\u0131rlama ba\u011Flant\u0131s\u0131 g\xF6nderdik. E-postadaki talimatlar\u0131 izleyin.",
            "auth.restore_purchases_heading": "Sat\u0131n almalar\u0131 geri y\xFCkle",
            "auth.restore_purchases_subheading": "Sat\u0131n al\u0131mlar\u0131n\u0131z\u0131 geri y\xFCklemek i\xE7in l\xFCtfen giri\u015F yap\u0131n.",
            "auth.send_reset": "S\u0131f\u0131rlama e-postas\u0131 g\xF6nder",
            "auth.service_unavailable": "Hizmet ge\xE7ici olarak kullan\u0131lam\u0131yor. Daha sonra tekrar deneyin.",
            "auth.show_password": "\u015Eifreyi g\xF6ster",
            "auth.sign_out": "\xC7\u0131k\u0131\u015F yap",
            "auth.sign_up": "Kay\u0131t ol",
            "auth.sign_up_link": "Kay\u0131t ol",
            "auth.signed_in": "Giri\u015F yap\u0131ld\u0131",
            "auth.signin_failed": "Giri\u015F ba\u015Far\u0131s\u0131z",
            "auth.signup_failed": "Kay\u0131t ba\u015Far\u0131s\u0131z",
            "auth.verify": "Do\u011Frula",
            "auth.weak_password": "\u015Eifre \xE7ok zay\u0131f.",
            "auth.welcome": "Ho\u015F geldiniz!",
            "auth.welcome_signup": "Ho\u015F geldiniz!",
            "cta.close": "Kapat",
            "cta.continue": "Devam et",
            "cta.get_lifetime_access": "\xD6m\xFCr boyu eri\u015Fim al",
            "cta.get_plan_daily": "G\xFCnl\xFCk plan al",
            "cta.get_plan_monthly": "Ayl\u0131k plan al",
            "cta.get_plan_weekly": "Haftal\u0131k plan al",
            "cta.get_plan_yearly": "Y\u0131ll\u0131k plan al",
            "cta.start_trial": "{days} g\xFCnl\xFCk \xFCcretsiz denemeyi ba\u015Flat",
            "modal.close_aria": "Kapat",
            "modal.continue": "Devam et",
            "modal.error_generic": "Bir \u015Feyler ters gitti",
            "modal.loading": "Y\xFCkleniyor\u2026",
            "modal.purchase_restored_subtitle": "Her \u015Fey haz\u0131r \u2014 keyfini \xE7\u0131kar\u0131n!",
            "modal.purchase_restored_title": "Tekrar ho\u015F geldiniz",
            "modal.purchase_success_subtitle": "Her \u015Fey haz\u0131r \u2014 keyfini \xE7\u0131kar\u0131n!",
            "modal.purchase_success_title": "\xD6deme al\u0131nd\u0131",
            "modal.verifying_subscription": "Aboneli\u011Finiz kontrol ediliyor\u2026",
            "nav.back": "\u2190 Geri",
            "nav.back_aria": "Geri",
            "offer.limited_time": "S\u0131n\u0131rl\u0131 s\xFCreli teklif",
            "payment.awaiting_title": "Yeni sekmede \xF6demeyi tamamlay\u0131n",
            "payment.checking": "Kontrol ediliyor\u2026",
            "payment.ive_paid": "\xD6deme yapt\u0131m",
            "payment.open_checkout_again": "\xD6demeyi tekrar a\xE7",
            "payment.open_checkout_button": "\xD6demeyi a\xE7",
            "pricing.free_trial_days": "{days} g\xFCnl\xFCk \xFCcretsiz deneme",
            "pricing.included_per": "Dahil edilen {interval}:",
            "pricing.interval.day": "g\xFCn",
            "pricing.interval.lifetime_short": "\xF6m\xFCr boyu",
            "pricing.interval.month": "ay",
            "pricing.interval.period": "d\xF6nem",
            "pricing.interval.week": "hafta",
            "pricing.interval.year": "y\u0131l",
            "pricing.money_back": "30 g\xFCn para iade garantisi",
            "pricing.most_popular": "En pop\xFCler",
            "pricing.no_prices": "Fiyat yok.",
            "pricing.plan_label.daily": "G\xDCNL\xDCK PLAN",
            "pricing.plan_label.lifetime": "\xF6m\xFCr boyu",
            "pricing.plan_label.monthly": "ayl\u0131k plan",
            "pricing.plan_label.weekly": "haftal\u0131k plan",
            "pricing.plan_label.yearly": "y\u0131ll\u0131k plan",
            "pricing.plans_aria": "Planlar",
            "session.contact_support": "Destekle ileti\u015Fime ge\xE7",
            "session.restore_purchases": "Sat\u0131n al\u0131mlar\u0131 geri y\xFCkle",
            "session.sign_out": "\xC7\u0131k\u0131\u015F yap",
            "session.signed_in_as_prefix": "\u015Eu hesapla giri\u015F yap\u0131ld\u0131:",
            "session.signing_out": "\xC7\u0131k\u0131\u015F yap\u0131l\u0131yor\u2026",
            "support.attachments_label": "Ekler",
            "support.close_button": "Kapat",
            "support.done_button": "Tamam",
            "support.email_placeholder": "E-postan\u0131z\u0131 girin",
            "support.heading": "Destek",
            "support.instruction": "Destek talebinizi g\xF6ndermek i\xE7in l\xFCtfen a\u015Fa\u011F\u0131daki formu doldurun.",
            "support.invalid_email": "Ge\xE7ersiz e-posta",
            "support.message_length": "1\u20135000 karakter",
            "support.message_placeholder": "Mesaj\u0131n\u0131z\u0131 girin",
            "support.required": "Gerekli",
            "support.send_another": "Ba\u015Fka bir talep g\xF6nder",
            "support.send_button": "G\xF6nder",
            "support.sending": "G\xF6nderiliyor\u2026",
            "support.subject_length": "3\u2013200 karakter",
            "support.subject_placeholder": "Konuyu girin",
            "support.success_heading": "Talep g\xF6nderildi",
            "support.success_message_prefix": "Mesaj\u0131n\u0131z\u0131 ald\u0131k ve \u015Fu adrese yan\u0131t verece\u011Fiz"
        }
    }
    );
    var Ci = {};
    E(Ci, {
        default: () => zr
    });
    var zr, ji = T( () => {
        zr = {
            "anon.description_default": "\u041D\u0430\u043B\u0430\u0448\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u0433\u043E\u0441\u0442\u044C\u043E\u0432\u0438\u0439 \u0441\u0435\u0430\u043D\u0441\u2026",
            "anon.heading_default": "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u044F\u043A \u0433\u0456\u0441\u0442\u044C",
            "anon.try_again": "\u0421\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437",
            "auth.back_to_login": "\u041D\u0430\u0437\u0430\u0434 \u0434\u043E \u0432\u0445\u043E\u0434\u0443",
            "auth.check_email_message": "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043F\u043E\u0448\u0442\u0443 \u2014 \u043C\u0438 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043B\u0438 \u043A\u043E\u0434 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F.",
            "auth.check_email_title": "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043F\u043E\u0448\u0442\u0443",
            "auth.confirm_email_subtitle": "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0434, \u044F\u043A\u0438\u0439 \u043C\u0438 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043B\u0438 \u043D\u0430 \u0432\u0430\u0448\u0443 \u043F\u043E\u0448\u0442\u0443, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044E.",
            "auth.confirm_email_title": "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044C \u043F\u043E\u0448\u0442\u0443",
            "auth.confirmation_code": "\u041A\u043E\u0434 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F",
            "auth.continue_with_apple": "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Apple",
            "auth.continue_with_facebook": "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Facebook",
            "auth.continue_with_github": "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 GitHub",
            "auth.continue_with_google": "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Google",
            "auth.create_account": "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0430\u043A\u0430\u0443\u043D\u0442",
            "auth.default_subtitle": "\u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044C \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E \u0432\u0441\u0456\u0445 \u0444\u0443\u043D\u043A\u0446\u0456\u0439 \u0442\u0430 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u0430\u0446\u0456\u0457 \u0434\u0430\u043D\u0438\u0445.",
            "auth.email": "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430",
            "auth.email_already_registered": "\u0426\u0435\u0439 email \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u043E. \u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044C \u043D\u0438\u0436\u0447\u0435 \u2014 \u043F\u0430\u0440\u043E\u043B\u0435\u043C \u0430\u0431\u043E \u0430\u043A\u0430\u0443\u043D\u0442\u043E\u043C, \u0447\u0435\u0440\u0435\u0437 \u044F\u043A\u0438\u0439 \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u043B\u0438\u0441\u044F.",
            "auth.email_exists": "\u0410\u043A\u0430\u0443\u043D\u0442 \u0456\u0437 \u0442\u0430\u043A\u0438\u043C email \u0443\u0436\u0435 \u0456\u0441\u043D\u0443\u0454.",
            "auth.email_not_confirmed": "\u0421\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u044C\u0442\u0435 email.",
            "auth.forgot_password": "\u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
            "auth.forgot_password_title": "\u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
            "auth.forgot_subtitle": "\u0412\u0432\u0435\u0434\u0456\u0442\u044C email, \u043C\u0438 \u043D\u0430\u0434\u0456\u0448\u043B\u0435\u043C\u043E \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u0441\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044F.",
            "auth.generic_error": "\u0429\u043E\u0441\u044C \u043F\u0456\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A",
            "auth.have_account": "\u0412\u0436\u0435 \u0454 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441?",
            "auth.hide_password": "\u0421\u0445\u043E\u0432\u0430\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C",
            "auth.identity_already_linked": "\u0426\u0435\u0439 \u0430\u043A\u0430\u0443\u043D\u0442 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u043E. \u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044C \u0434\u043E \u043D\u044C\u043E\u0433\u043E \u043D\u0438\u0436\u0447\u0435.",
            "auth.invalid_credentials": "\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 email \u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C",
            "auth.invalid_otp": "\u041A\u043E\u0434 \u043D\u0435\u0434\u0456\u0439\u0441\u043D\u0438\u0439 \u0430\u0431\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u043E\u0447\u0435\u043D\u0438\u0439.",
            "auth.last_used": "\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u0432\u0445\u0456\u0434 \xB7 {email}",
            "auth.last_used_no_email": "\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u0432\u0445\u0456\u0434",
            "auth.link_purchase_subheading": "\u041F\u0440\u0438\u0432'\u044F\u0436\u0435\u043C\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u0434\u043E \u0430\u043A\u0430\u0443\u043D\u0442\u0430, \u0449\u043E\u0431 \u0434\u043E\u0441\u0442\u0443\u043F \u0437\u0431\u0435\u0440\u0456\u0433\u0441\u044F.",
            "auth.log_in": "\u0423\u0432\u0456\u0439\u0442\u0438",
            "auth.log_in_link": "\u0423\u0432\u0456\u0439\u0442\u0438",
            "auth.login_continue_purchase": "\u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0443",
            "auth.network_error": "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043C\u0435\u0440\u0435\u0436\u0456. \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0442\u0430 \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.",
            "auth.no_account": "\u041D\u0435\u043C\u0430\u0454 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443?",
            "auth.or": "\u0430\u0431\u043E",
            "auth.password": "\u041F\u0430\u0440\u043E\u043B\u044C",
            "auth.passwords_mismatch": "\u041F\u0430\u0440\u043E\u043B\u0456 \u043D\u0435 \u0437\u0431\u0456\u0433\u0430\u044E\u0442\u044C\u0441\u044F",
            "auth.rate_limited": "\u0417\u0430\u0431\u0430\u0433\u0430\u0442\u043E \u0437\u0430\u043F\u0438\u0442\u0456\u0432. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u0456\u0437\u043D\u0456\u0448\u0435.",
            "auth.repeat_password": "\u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
            "auth.reset_link_valid": "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u0456\u0439\u0441\u043D\u0435 1 \u0433\u043E\u0434\u0438\u043D\u0443.",
            "auth.reset_password_subtitle": "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0434 \u0437 \u043B\u0438\u0441\u0442\u0430 \u0456 \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C.",
            "auth.reset_password_title": "\u0421\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044F",
            "auth.reset_sent_message": "\u042F\u043A\u0449\u043E \u0442\u0430\u043A\u0438\u0439 email \u0456\u0441\u043D\u0443\u0454, \u043A\u043E\u0434 \u0434\u043B\u044F \u0441\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E.",
            "auth.reset_sent_subtitle": "\u041C\u0438 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043B\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u0441\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044F. \u0414\u043E\u0442\u0440\u0438\u043C\u0443\u0439\u0442\u0435\u0441\u044C \u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0439 \u0443 \u043B\u0438\u0441\u0442\u0456.",
            "auth.restore_purchases_heading": "\u0412\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438",
            "auth.restore_purchases_subheading": "\u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044C, \u0449\u043E\u0431 \u0432\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438.",
            "auth.send_reset": "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u043B\u0438\u0441\u0442 \u0434\u043B\u044F \u0441\u043A\u0438\u0434\u0430\u043D\u043D\u044F",
            "auth.service_unavailable": "\u0421\u0435\u0440\u0432\u0456\u0441 \u0442\u0438\u043C\u0447\u0430\u0441\u043E\u0432\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u0456\u0437\u043D\u0456\u0448\u0435.",
            "auth.show_password": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C",
            "auth.sign_out": "\u0412\u0438\u0439\u0442\u0438",
            "auth.sign_up": "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F",
            "auth.sign_up_link": "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F",
            "auth.signed_in": "\u0412\u0438 \u0443\u0432\u0456\u0439\u0448\u043B\u0438",
            "auth.signin_failed": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0443\u0432\u0456\u0439\u0442\u0438",
            "auth.signup_failed": "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043D\u0435 \u0432\u0434\u0430\u043B\u0430\u0441\u044F",
            "auth.verify": "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438",
            "auth.weak_password": "\u041D\u0430\u0434\u0442\u043E \u0441\u043B\u0430\u0431\u043A\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C.",
            "auth.welcome": "\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E!",
            "auth.welcome_signup": "\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E!",
            "countdown.d": "\u0434",
            "countdown.h": "\u0433",
            "countdown.m": "\u0445\u0432",
            "countdown.s": "\u0441",
            "cta.close": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
            "cta.continue": "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438",
            "cta.get_lifetime_access": "\u041A\u0443\u043F\u0438\u0442\u0438 \u043D\u0430\u0437\u0430\u0432\u0436\u0434\u0438",
            "cta.get_plan_daily": "\u041A\u0443\u043F\u0438\u0442\u0438 \u0434\u0435\u043D\u043D\u0438\u0439 \u0442\u0430\u0440\u0438\u0444",
            "cta.get_plan_generic": "\u041A\u0443\u043F\u0438\u0442\u0438 {interval} \u0442\u0430\u0440\u0438\u0444",
            "cta.get_plan_monthly": "\u041A\u0443\u043F\u0438\u0442\u0438 \u043C\u0456\u0441\u044F\u0447\u043D\u0438\u0439 \u0442\u0430\u0440\u0438\u0444",
            "cta.get_plan_weekly": "\u041A\u0443\u043F\u0438\u0442\u0438 \u0442\u0438\u0436\u043D\u0435\u0432\u0438\u0439 \u0442\u0430\u0440\u0438\u0444",
            "cta.get_plan_yearly": "\u041A\u0443\u043F\u0438\u0442\u0438 \u0440\u0456\u0447\u043D\u0438\u0439 \u0442\u0430\u0440\u0438\u0444",
            "cta.start_trial": "\u041F\u043E\u0447\u0430\u0442\u0438 {days}-\u0434\u0435\u043D\u043D\u0438\u0439 \u043F\u0440\u043E\u0431\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434",
            "modal.close_aria": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
            "modal.continue": "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438",
            "modal.error_generic": "\u0429\u043E\u0441\u044C \u043F\u0456\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A",
            "modal.loading": "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F\u2026",
            "modal.purchase_restored_subtitle": "\u0423\u0441\u0435 \u0433\u043E\u0442\u043E\u0432\u043E \u2014 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0439\u0442\u0435\u0441\u044F!",
            "modal.purchase_restored_title": "\u0406\u0437 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F\u043C",
            "modal.purchase_success_subtitle": "\u0423\u0441\u0435 \u0433\u043E\u0442\u043E\u0432\u043E \u2014 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0439\u0442\u0435\u0441\u044F!",
            "modal.purchase_success_title": "\u041F\u043B\u0430\u0442\u0456\u0436 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E",
            "modal.verifying_subscription": "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u044F\u0454\u043C\u043E \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443\u2026",
            "nav.back": "\u2190 \u041D\u0430\u0437\u0430\u0434",
            "nav.back_aria": "\u041D\u0430\u0437\u0430\u0434",
            "offer.limited_time": "\u041E\u0431\u043C\u0435\u0436\u0435\u043D\u0430 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u044F",
            "payment.awaiting_subtitle": "\u041C\u0438 \u0432\u0438\u0437\u043D\u0430\u0447\u0438\u043C\u043E \u043E\u043F\u043B\u0430\u0442\u0443 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u2014 \u0430\u0431\u043E \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443, \u043A\u043E\u043B\u0438 \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0442\u0435.",
            "payment.awaiting_title": "\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u043F\u043B\u0430\u0442\u0438...",
            "payment.checking": "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u044F\u0454\u043C\u043E\u2026",
            "payment.ive_paid": "\u042F \u0441\u043F\u043B\u0430\u0442\u0438\u0432",
            "payment.open_checkout_again": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043E\u043F\u043B\u0430\u0442\u0443 \u0437\u043D\u043E\u0432\u0443",
            "payment.open_checkout_button": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043E\u043F\u043B\u0430\u0442\u0443",
            "payment.popup_blocked_message": "\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u0437\u0430\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0432 \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u0437 \u043E\u043F\u043B\u0430\u0442\u043E\u044E. \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043D\u0438\u0436\u0447\u0435, \u0449\u043E\u0431 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0457\u0457.",
            "payment.popup_blocked_title": "\u0414\u043E\u0437\u0432\u043E\u043B\u044C\u0442\u0435 \u0441\u043F\u043B\u0438\u0432\u0430\u044E\u0447\u0456 \u0432\u0456\u043A\u043D\u0430, \u0449\u043E\u0431 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438",
            "payment.popup_help_text": "\u0412\u0456\u043A\u043D\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u043D\u0435 \u0432\u0456\u0434\u043A\u0440\u0438\u043B\u043E\u0441\u044F \u0430\u0431\u043E \u0437\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u0435? \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0442\u0443\u0442, \u0449\u043E\u0431 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0437\u043D\u043E\u0432\u0443.",
            "payment.still_processing": "\u041F\u043B\u0430\u0442\u0456\u0436 \u0449\u0435 \u043E\u0431\u0440\u043E\u0431\u043B\u044F\u0454\u0442\u044C\u0441\u044F. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437 \u0437\u0430 \u043C\u0438\u0442\u044C.",
            "payment.tab_closed_retry": "\u0417\u0430\u043A\u0440\u0438\u043B\u0438 \u0432\u043A\u043B\u0430\u0434\u043A\u0443? \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u043D\u043E\u0432\u0443",
            "pricing.free_trial_days": "{days}-\u0434\u0435\u043D\u043D\u0438\u0439 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u043F\u0440\u043E\u0431\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434",
            "pricing.included_per": "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0437\u0430 {interval}:",
            "pricing.interval.day": "\u0434\u0435\u043D\u044C",
            "pricing.interval.lifetime_short": "\u043D\u0430\u0437\u0430\u0432\u0436\u0434\u0438",
            "pricing.interval.month": "\u043C\u0456\u0441\u044F\u0446\u044C",
            "pricing.interval.period": "\u043F\u0435\u0440\u0456\u043E\u0434",
            "pricing.interval.week": "\u0442\u0438\u0436\u0434\u0435\u043D\u044C",
            "pricing.interval.year": "\u0440\u0456\u043A",
            "pricing.money_back": "30-\u0434\u0435\u043D\u043D\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u044F \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u043A\u043E\u0448\u0442\u0456\u0432",
            "pricing.most_popular": "\u041D\u0430\u0439\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456\u0448\u0438\u0439",
            "pricing.no_prices": "\u0422\u0430\u0440\u0438\u0444\u0456\u0432 \u043D\u0435\u043C\u0430\u0454.",
            "pricing.plan_label.daily": "\u0429\u041E\u0414\u0415\u041D\u041D\u0418\u0419 \u0422\u0410\u0420\u0418\u0424",
            "pricing.plan_label.lifetime": "\u043D\u0430\u0437\u0430\u0432\u0436\u0434\u0438",
            "pricing.plan_label.monthly": "\u0449\u043E\u043C\u0456\u0441\u044F\u0447\u043D\u0438\u0439 \u0442\u0430\u0440\u0438\u0444",
            "pricing.plan_label.weekly": "\u0449\u043E\u0442\u0438\u0436\u043D\u0435\u0432\u0438\u0439 \u0442\u0430\u0440\u0438\u0444",
            "pricing.plan_label.yearly": "\u0449\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u0442\u0430\u0440\u0438\u0444",
            "pricing.plans_aria": "\u0422\u0430\u0440\u0438\u0444\u0438",
            "session.contact_support": "\u0417\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u0434\u043E \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438",
            "session.restore_purchases": "\u0412\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438",
            "session.sign_out": "\u0412\u0438\u0439\u0442\u0438",
            "session.signed_in_as_prefix": "\u0412\u0438 \u0443\u0432\u0456\u0439\u0448\u043B\u0438 \u044F\u043A",
            "session.signing_out": "\u0412\u0438\u0445\u0456\u0434\u2026",
            "support.attachments_aria": "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0432\u043A\u043B\u0430\u0434\u0435\u043D\u044C",
            "support.attachments_label": "\u0412\u043A\u043B\u0430\u0434\u0435\u043D\u043D\u044F",
            "support.close_button": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
            "support.done_button": "\u0413\u043E\u0442\u043E\u0432\u043E",
            "support.dropzone_text": "\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u044E\u0434\u0438 \u0430\u0431\u043E \u043A\u043B\u0430\u0446\u043D\u0456\u0442\u044C \u0434\u043B\u044F \u0432\u0438\u0431\u043E\u0440\u0443",
            "support.email_placeholder": "\u0412\u0432\u0435\u0434\u0456\u0442\u044C email",
            "support.file_requirements": "JPEG/PNG/WebP, \u0434\u043E {max} \u0444\u0430\u0439\u043B\u0456\u0432, \u2264 {size} \u041C\u0411 \u043A\u043E\u0436\u0435\u043D",
            "support.heading": "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430",
            "support.instruction": "\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \u043D\u0438\u0436\u0447\u0435 \u0434\u043B\u044F \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0437\u0430\u043F\u0438\u0442\u0443 \u0432 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0443.",
            "support.invalid_email": "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 email",
            "support.invalid_file": "\u041B\u0438\u0448\u0435 JPEG/PNG/WebP, \u2264 {size} \u041C\u0411 \u043A\u043E\u0436\u0435\u043D",
            "support.message_length": "1\u20135000 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
            "support.message_placeholder": "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F",
            "support.remove_file_aria": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 {filename}",
            "support.required": "\u041E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E",
            "support.send_another": "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0449\u0435 \u0437\u0430\u043F\u0438\u0442",
            "support.send_button": "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438",
            "support.sending": "\u041D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u2026",
            "support.sending_as": "\u041D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0432\u0456\u0434",
            "support.subject_length": "3\u2013200 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
            "support.subject_placeholder": "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0442\u0435\u043C\u0443",
            "support.success_heading": "\u0417\u0430\u043F\u0438\u0442 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E",
            "support.success_message_prefix": "\u041C\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 \u0432\u0430\u0448\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0442\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u043C\u043E \u043D\u0430",
            "support.too_many_files": "\u0414\u043E {max} \u0444\u0430\u0439\u043B\u0456\u0432"
        }
    }
    );
    var Ai = {};
    E(Ai, {
        default: () => Cr
    });
    var Cr, Pi = T( () => {
        Cr = {
            "anon.heading_default": "Ti\u1EBFp t\u1EE5c v\u1EDBi t\u01B0 c\xE1ch kh\xE1ch",
            "anon.try_again": "Th\u1EED l\u1EA1i",
            "auth.back_to_login": "Quay l\u1EA1i \u0111\u0103ng nh\u1EADp",
            "auth.check_email_message": "Ki\u1EC3m tra email c\u1EE7a b\u1EA1n \u0111\u1EC3 xem m\xE3 x\xE1c nh\u1EADn.",
            "auth.check_email_title": "Ki\u1EC3m tra email c\u1EE7a b\u1EA1n",
            "auth.confirm_email_title": "X\xE1c nh\u1EADn email c\u1EE7a b\u1EA1n",
            "auth.confirmation_code": "M\xE3 x\xE1c nh\u1EADn",
            "auth.continue_with_apple": "Ti\u1EBFp t\u1EE5c v\u1EDBi Apple",
            "auth.continue_with_facebook": "Ti\u1EBFp t\u1EE5c v\u1EDBi Facebook",
            "auth.continue_with_github": "Ti\u1EBFp t\u1EE5c v\u1EDBi GitHub",
            "auth.continue_with_google": "Ti\u1EBFp t\u1EE5c v\u1EDBi Google",
            "auth.create_account": "T\u1EA1o t\xE0i kho\u1EA3n",
            "auth.default_subtitle": "\u0110\u0103ng nh\u1EADp \u0111\u1EC3 truy c\u1EADp t\u1EA5t c\u1EA3 t\xEDnh n\u0103ng v\xE0 \u0111\u1ED3ng b\u1ED9 d\u1EEF li\u1EC7u c\u1EE7a b\u1EA1n.",
            "auth.email": "\u0110\u1ECBa ch\u1EC9 email",
            "auth.email_already_registered": "Email n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u0103ng k\xFD. \u0110\u0103ng nh\u1EADp b\xEAn d\u01B0\u1EDBi b\u1EB1ng m\u1EADt kh\u1EA9u ho\u1EB7c t\xE0i kho\u1EA3n b\u1EA1n \u0111\xE3 d\xF9ng \u0111\u1EC3 \u0111\u0103ng k\xFD.",
            "auth.email_exists": "T\xE0i kho\u1EA3n v\u1EDBi email n\xE0y \u0111\xE3 t\u1ED3n t\u1EA1i.",
            "auth.email_not_confirmed": "Vui l\xF2ng x\xE1c nh\u1EADn email tr\u01B0\u1EDBc.",
            "auth.forgot_password": "Qu\xEAn m\u1EADt kh\u1EA9u?",
            "auth.forgot_password_title": "Qu\xEAn m\u1EADt kh\u1EA9u?",
            "auth.forgot_subtitle": "Nh\u1EADp email c\u1EE7a b\u1EA1n v\xE0 ch\xFAng t\xF4i s\u1EBD g\u1EEDi li\xEAn k\u1EBFt \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u.",
            "auth.generic_error": "\u0110\xE3 x\u1EA3y ra l\u1ED7i",
            "auth.have_account": "\u0110\xE3 c\xF3 t\xE0i kho\u1EA3n?",
            "auth.hide_password": "\u1EA8n m\u1EADt kh\u1EA9u",
            "auth.identity_already_linked": "T\xE0i kho\u1EA3n n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u0103ng k\xFD. \u0110\u0103ng nh\u1EADp b\u1EB1ng t\xE0i kho\u1EA3n n\xE0y b\xEAn d\u01B0\u1EDBi.",
            "auth.invalid_credentials": "Email ho\u1EB7c m\u1EADt kh\u1EA9u kh\xF4ng \u0111\xFAng",
            "auth.invalid_otp": "M\xE3 kh\xF4ng h\u1EE3p l\u1EC7 ho\u1EB7c \u0111\xE3 h\u1EBFt h\u1EA1n.",
            "auth.last_used": "D\xF9ng g\u1EA7n nh\u1EA5t \xB7 {email}",
            "auth.last_used_no_email": "D\xF9ng g\u1EA7n nh\u1EA5t",
            "auth.link_purchase_subheading": "Ch\xFAng t\xF4i s\u1EBD li\xEAn k\u1EBFt giao d\u1ECBch v\u1EDBi t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n \u0111\u1EC3 gi\u1EEF quy\u1EC1n truy c\u1EADp.",
            "auth.log_in": "\u0110\u0103ng nh\u1EADp",
            "auth.log_in_link": "\u0110\u0103ng nh\u1EADp",
            "auth.login_continue_purchase": "\u0110\u0103ng nh\u1EADp \u0111\u1EC3 ti\u1EBFp t\u1EE5c giao d\u1ECBch",
            "auth.network_error": "L\u1ED7i m\u1EA1ng. Vui l\xF2ng ki\u1EC3m tra k\u1EBFt n\u1ED1i v\xE0 th\u1EED l\u1EA1i.",
            "auth.no_account": "Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n?",
            "auth.or": "ho\u1EB7c",
            "auth.password": "M\u1EADt kh\u1EA9u",
            "auth.passwords_mismatch": "M\u1EADt kh\u1EA9u kh\xF4ng kh\u1EDBp",
            "auth.rate_limited": "Qu\xE1 nhi\u1EC1u y\xEAu c\u1EA7u. Vui l\xF2ng th\u1EED l\u1EA1i sau.",
            "auth.repeat_password": "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u",
            "auth.reset_link_valid": "Li\xEAn k\u1EBFt c\xF3 hi\u1EC7u l\u1EF1c trong 1 gi\u1EDD.",
            "auth.reset_password_title": "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u",
            "auth.reset_sent_message": "N\u1EBFu email \u0111\xF3 t\u1ED3n t\u1EA1i, m\xE3 \u0111\u1EB7t l\u1EA1i \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi.",
            "auth.reset_sent_subtitle": "Ch\xFAng t\xF4i \u0111\xE3 g\u1EEDi li\xEAn k\u1EBFt \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u. L\xE0m theo h\u01B0\u1EDBng d\u1EABn trong email.",
            "auth.restore_purchases_heading": "Kh\xF4i ph\u1EE5c giao d\u1ECBch",
            "auth.restore_purchases_subheading": "Vui l\xF2ng \u0111\u0103ng nh\u1EADp \u0111\u1EC3 kh\xF4i ph\u1EE5c giao d\u1ECBch c\u1EE7a b\u1EA1n.",
            "auth.send_reset": "G\u1EEDi email \u0111\u1EB7t l\u1EA1i",
            "auth.service_unavailable": "D\u1ECBch v\u1EE5 t\u1EA1m th\u1EDDi kh\xF4ng kh\u1EA3 d\u1EE5ng. Vui l\xF2ng th\u1EED l\u1EA1i sau.",
            "auth.show_password": "Hi\u1EC7n m\u1EADt kh\u1EA9u",
            "auth.sign_out": "\u0110\u0103ng xu\u1EA5t",
            "auth.sign_up": "\u0110\u0103ng k\xFD",
            "auth.sign_up_link": "\u0110\u0103ng k\xFD",
            "auth.signed_in": "\u0110\xE3 \u0111\u0103ng nh\u1EADp",
            "auth.signin_failed": "\u0110\u0103ng nh\u1EADp th\u1EA5t b\u1EA1i",
            "auth.signup_failed": "\u0110\u0103ng k\xFD th\u1EA5t b\u1EA1i",
            "auth.verify": "X\xE1c minh",
            "auth.weak_password": "M\u1EADt kh\u1EA9u qu\xE1 y\u1EBFu.",
            "auth.welcome": "Ch\xE0o m\u1EEBng!",
            "auth.welcome_signup": "Ch\xE0o m\u1EEBng!",
            "cta.close": "\u0110\xF3ng",
            "cta.continue": "Ti\u1EBFp t\u1EE5c",
            "cta.get_lifetime_access": "Nh\u1EADn quy\u1EC1n truy c\u1EADp tr\u1ECDn \u0111\u1EDDi",
            "cta.get_plan_daily": "Ch\u1ECDn g\xF3i h\u1EB1ng ng\xE0y",
            "cta.get_plan_monthly": "Ch\u1ECDn g\xF3i h\u1EB1ng th\xE1ng",
            "cta.get_plan_weekly": "Ch\u1ECDn g\xF3i h\u1EB1ng tu\u1EA7n",
            "cta.get_plan_yearly": "Ch\u1ECDn g\xF3i h\u1EB1ng n\u0103m",
            "cta.start_trial": "B\u1EAFt \u0111\u1EA7u d\xF9ng th\u1EED {days} ng\xE0y mi\u1EC5n ph\xED",
            "modal.close_aria": "\u0110\xF3ng",
            "modal.continue": "Ti\u1EBFp t\u1EE5c",
            "modal.error_generic": "\u0110\xE3 x\u1EA3y ra l\u1ED7i",
            "modal.loading": "\u0110ang t\u1EA3i\u2026",
            "modal.purchase_restored_subtitle": "M\u1ECDi th\u1EE9 \u0111\xE3 s\u1EB5n s\xE0ng \u2014 ch\xFAc b\u1EA1n vui v\u1EBB!",
            "modal.purchase_restored_title": "Ch\xE0o m\u1EEBng tr\u1EDF l\u1EA1i",
            "modal.purchase_success_subtitle": "M\u1ECDi th\u1EE9 \u0111\xE3 s\u1EB5n s\xE0ng \u2014 ch\xFAc b\u1EA1n vui v\u1EBB!",
            "modal.purchase_success_title": "\u0110\xE3 nh\u1EADn thanh to\xE1n",
            "modal.verifying_subscription": "\u0110ang ki\u1EC3m tra \u0111\u0103ng k\xFD\u2026",
            "nav.back": "\u2190 Quay l\u1EA1i",
            "nav.back_aria": "Quay l\u1EA1i",
            "offer.limited_time": "\u01AFu \u0111\xE3i c\xF3 th\u1EDDi h\u1EA1n",
            "payment.awaiting_title": "Ho\xE0n t\u1EA5t thanh to\xE1n trong tab m\u1EDBi",
            "payment.checking": "\u0110ang ki\u1EC3m tra\u2026",
            "payment.ive_paid": "T\xF4i \u0111\xE3 thanh to\xE1n",
            "payment.open_checkout_again": "M\u1EDF l\u1EA1i thanh to\xE1n",
            "payment.open_checkout_button": "M\u1EDF thanh to\xE1n",
            "pricing.free_trial_days": "{days} ng\xE0y d\xF9ng th\u1EED mi\u1EC5n ph\xED",
            "pricing.included_per": "Bao g\u1ED3m m\u1ED7i {interval}:",
            "pricing.interval.day": "ng\xE0y",
            "pricing.interval.lifetime_short": "tr\u1ECDn \u0111\u1EDDi",
            "pricing.interval.month": "th\xE1ng",
            "pricing.interval.period": "k\u1EF3",
            "pricing.interval.week": "tu\u1EA7n",
            "pricing.interval.year": "n\u0103m",
            "pricing.money_back": "\u0110\u1EA3m b\u1EA3o ho\xE0n ti\u1EC1n trong 30 ng\xE0y",
            "pricing.most_popular": "Ph\u1ED5 bi\u1EBFn nh\u1EA5t",
            "pricing.no_prices": "Kh\xF4ng c\xF3 gi\xE1 kh\u1EA3 d\u1EE5ng.",
            "pricing.plan_label.daily": "G\xD3I H\u1EB0NG NG\xC0Y",
            "pricing.plan_label.lifetime": "tr\u1ECDn \u0111\u1EDDi",
            "pricing.plan_label.monthly": "g\xF3i h\xE0ng th\xE1ng",
            "pricing.plan_label.weekly": "g\xF3i h\xE0ng tu\u1EA7n",
            "pricing.plan_label.yearly": "g\xF3i h\xE0ng n\u0103m",
            "pricing.plans_aria": "G\xF3i",
            "session.contact_support": "Li\xEAn h\u1EC7 h\u1ED7 tr\u1EE3",
            "session.restore_purchases": "Kh\xF4i ph\u1EE5c mua h\xE0ng",
            "session.sign_out": "\u0110\u0103ng xu\u1EA5t",
            "session.signed_in_as_prefix": "\u0110\xE3 \u0111\u0103ng nh\u1EADp v\u1EDBi t\u01B0 c\xE1ch",
            "session.signing_out": "\u0110ang \u0111\u0103ng xu\u1EA5t\u2026",
            "support.attachments_label": "T\u1EC7p \u0111\xEDnh k\xE8m",
            "support.close_button": "\u0110\xF3ng",
            "support.done_button": "Xong",
            "support.email_placeholder": "Nh\u1EADp email c\u1EE7a b\u1EA1n",
            "support.heading": "H\u1ED7 tr\u1EE3",
            "support.instruction": "Vui l\xF2ng \u0111i\u1EC1n v\xE0o bi\u1EC3u m\u1EABu b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 g\u1EEDi y\xEAu c\u1EA7u h\u1ED7 tr\u1EE3 c\u1EE7a b\u1EA1n.",
            "support.invalid_email": "Email kh\xF4ng h\u1EE3p l\u1EC7",
            "support.message_length": "1\u20135000 k\xFD t\u1EF1",
            "support.message_placeholder": "Nh\u1EADp tin nh\u1EAFn c\u1EE7a b\u1EA1n",
            "support.required": "B\u1EAFt bu\u1ED9c",
            "support.send_another": "G\u1EEDi y\xEAu c\u1EA7u kh\xE1c",
            "support.send_button": "G\u1EEDi",
            "support.sending": "\u0110ang g\u1EEDi\u2026",
            "support.subject_length": "3\u2013200 k\xFD t\u1EF1",
            "support.subject_placeholder": "Nh\u1EADp ti\xEAu \u0111\u1EC1",
            "support.success_heading": "Y\xEAu c\u1EA7u \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi",
            "support.success_message_prefix": "Ch\xFAng t\xF4i \u0111\xE3 nh\u1EADn \u0111\u01B0\u1EE3c tin nh\u1EAFn c\u1EE7a b\u1EA1n v\xE0 s\u1EBD ph\u1EA3n h\u1ED3i \u0111\u1EBFn"
        }
    }
    );
    var Bi = {};
    E(Bi, {
        default: () => jr
    });
    var jr, Ti = T( () => {
        jr = {
            "anon.description_default": "\u6B63\u5728\u8BBE\u7F6E\u8BBF\u5BA2\u4F1A\u8BDD\u2026",
            "anon.heading_default": "\u4EE5\u8BBF\u5BA2\u8EAB\u4EFD\u7EE7\u7EED",
            "anon.try_again": "\u91CD\u8BD5",
            "auth.back_to_login": "\u8FD4\u56DE\u767B\u5F55",
            "auth.check_email_message": "\u8BF7\u67E5\u770B\u90AE\u4EF6\u4EE5\u83B7\u53D6\u786E\u8BA4\u7801\u3002",
            "auth.check_email_title": "\u8BF7\u67E5\u770B\u90AE\u4EF6",
            "auth.confirm_email_subtitle": "\u8BF7\u8F93\u5165\u6211\u4EEC\u53D1\u9001\u5230\u60A8\u90AE\u7BB1\u7684\u4EE3\u7801\u4EE5\u5B8C\u6210\u6CE8\u518C\u3002",
            "auth.confirm_email_title": "\u786E\u8BA4\u60A8\u7684\u90AE\u7BB1",
            "auth.confirmation_code": "\u786E\u8BA4\u7801",
            "auth.continue_with_apple": "\u4F7F\u7528 Apple \u7EE7\u7EED",
            "auth.continue_with_facebook": "\u4F7F\u7528 Facebook \u7EE7\u7EED",
            "auth.continue_with_github": "\u4F7F\u7528 GitHub \u7EE7\u7EED",
            "auth.continue_with_google": "\u4F7F\u7528 Google \u7EE7\u7EED",
            "auth.create_account": "\u521B\u5EFA\u8D26\u6237",
            "auth.default_subtitle": "\u767B\u5F55\u4EE5\u8BBF\u95EE\u6240\u6709\u529F\u80FD\u5E76\u540C\u6B65\u60A8\u7684\u6570\u636E\u3002",
            "auth.email": "\u90AE\u7BB1\u5730\u5740",
            "auth.email_already_registered": "\u8BE5\u90AE\u7BB1\u5DF2\u6CE8\u518C\u3002\u8BF7\u5728\u4E0B\u65B9\u4F7F\u7528\u5BC6\u7801\u6216\u60A8\u6CE8\u518C\u65F6\u4F7F\u7528\u7684\u8D26\u6237\u767B\u5F55\u3002",
            "auth.email_exists": "\u8BE5\u90AE\u7BB1\u5DF2\u6CE8\u518C\u8D26\u6237\u3002",
            "auth.email_not_confirmed": "\u8BF7\u5148\u786E\u8BA4\u60A8\u7684\u90AE\u7BB1\u3002",
            "auth.forgot_password": "\u5FD8\u8BB0\u5BC6\u7801?",
            "auth.forgot_password_title": "\u5FD8\u8BB0\u5BC6\u7801?",
            "auth.forgot_subtitle": "\u8F93\u5165\u60A8\u7684\u90AE\u7BB1,\u6211\u4EEC\u5C06\u5411\u60A8\u53D1\u9001\u5BC6\u7801\u91CD\u7F6E\u94FE\u63A5\u3002",
            "auth.generic_error": "\u51FA\u9519\u4E86",
            "auth.have_account": "\u5DF2\u6709\u8D26\u6237?",
            "auth.hide_password": "\u9690\u85CF\u5BC6\u7801",
            "auth.identity_already_linked": "\u8BE5\u8D26\u6237\u5DF2\u6CE8\u518C\u3002\u8BF7\u5728\u4E0B\u65B9\u767B\u5F55\u3002",
            "auth.invalid_credentials": "\u90AE\u7BB1\u6216\u5BC6\u7801\u9519\u8BEF",
            "auth.invalid_otp": "\u9A8C\u8BC1\u7801\u65E0\u6548\u6216\u5DF2\u8FC7\u671F\u3002",
            "auth.last_used": "\u4E0A\u6B21\u4F7F\u7528 \xB7 {email}",
            "auth.last_used_no_email": "\u4E0A\u6B21\u4F7F\u7528",
            "auth.link_purchase_subheading": "\u6211\u4EEC\u5C06\u628A\u8D2D\u4E70\u5173\u8054\u5230\u60A8\u7684\u8D26\u6237\u4EE5\u4FDD\u7559\u8BBF\u95EE\u6743\u9650\u3002",
            "auth.log_in": "\u767B\u5F55",
            "auth.log_in_link": "\u767B\u5F55",
            "auth.login_continue_purchase": "\u767B\u5F55\u4EE5\u7EE7\u7EED\u8D2D\u4E70",
            "auth.network_error": "\u7F51\u7EDC\u9519\u8BEF\u3002\u8BF7\u68C0\u67E5\u8FDE\u63A5\u540E\u91CD\u8BD5\u3002",
            "auth.new_password_optional": "\u65B0\u5BC6\u7801\uFF08\u53EF\u9009 \u2014 \u4EC5\u7528\u4E8E\u5BC6\u7801\u91CD\u7F6E\uFF09",
            "auth.no_account": "\u6CA1\u6709\u8D26\u6237?",
            "auth.or": "\u6216",
            "auth.password": "\u5BC6\u7801",
            "auth.passwords_mismatch": "\u5BC6\u7801\u4E0D\u5339\u914D",
            "auth.rate_limited": "\u8BF7\u6C42\u8FC7\u591A\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002",
            "auth.repeat_password": "\u91CD\u590D\u5BC6\u7801",
            "auth.reset_link_valid": "\u94FE\u63A5\u6709\u6548\u671F\u4E3A 1 \u5C0F\u65F6\u3002",
            "auth.reset_password_subtitle": "\u8BF7\u8F93\u5165\u90AE\u4EF6\u4E2D\u7684\u4EE3\u7801\u548C\u65B0\u5BC6\u7801\u3002",
            "auth.reset_password_title": "\u91CD\u7F6E\u5BC6\u7801",
            "auth.reset_sent_message": "\u5982\u679C\u8BE5\u90AE\u7BB1\u5B58\u5728\uFF0C\u5DF2\u53D1\u9001\u91CD\u7F6E\u7801\u3002",
            "auth.reset_sent_subtitle": "\u6211\u4EEC\u5DF2\u53D1\u9001\u5BC6\u7801\u91CD\u7F6E\u94FE\u63A5\u3002\u8BF7\u6309\u90AE\u4EF6\u4E2D\u7684\u8BF4\u660E\u64CD\u4F5C\u3002",
            "auth.restore_purchases_heading": "\u6062\u590D\u8D2D\u4E70",
            "auth.restore_purchases_subheading": "\u8BF7\u767B\u5F55\u4EE5\u6062\u590D\u60A8\u7684\u8D2D\u4E70\u3002",
            "auth.send_reset": "\u53D1\u9001\u91CD\u7F6E\u90AE\u4EF6",
            "auth.service_unavailable": "\u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002",
            "auth.show_password": "\u663E\u793A\u5BC6\u7801",
            "auth.sign_out": "\u9000\u51FA",
            "auth.sign_up": "\u6CE8\u518C",
            "auth.sign_up_link": "\u6CE8\u518C",
            "auth.signed_in": "\u5DF2\u767B\u5F55",
            "auth.signin_failed": "\u767B\u5F55\u5931\u8D25",
            "auth.signup_failed": "\u6CE8\u518C\u5931\u8D25",
            "auth.verify": "\u9A8C\u8BC1",
            "auth.weak_password": "\u5BC6\u7801\u5F3A\u5EA6\u592A\u5F31\u3002",
            "auth.welcome": "\u6B22\u8FCE!",
            "auth.welcome_signup": "\u6B22\u8FCE\uFF01",
            "countdown.d": "\u5929",
            "countdown.h": "\u5C0F\u65F6",
            "countdown.m": "\u5206",
            "countdown.s": "\u79D2",
            "cta.close": "\u5173\u95ED",
            "cta.continue": "\u7EE7\u7EED",
            "cta.get_lifetime_access": "\u83B7\u53D6\u7EC8\u8EAB\u8BBF\u95EE",
            "cta.get_plan_daily": "\u83B7\u53D6\u65E5\u4ED8\u8BA1\u5212",
            "cta.get_plan_generic": "\u83B7\u53D6 {interval} \u8BA1\u5212",
            "cta.get_plan_monthly": "\u83B7\u53D6\u6BCF\u6708\u8BA1\u5212",
            "cta.get_plan_weekly": "\u83B7\u53D6\u6BCF\u5468\u8BA1\u5212",
            "cta.get_plan_yearly": "\u83B7\u53D6\u5E74\u5EA6\u8BA1\u5212",
            "cta.start_trial": "\u5F00\u59CB{days}\u5929\u514D\u8D39\u8BD5\u7528",
            "modal.close_aria": "\u5173\u95ED",
            "modal.continue": "\u7EE7\u7EED",
            "modal.error_generic": "\u51FA\u9519\u4E86",
            "modal.loading": "\u52A0\u8F7D\u4E2D\u2026",
            "modal.purchase_restored_subtitle": "\u4E00\u5207\u5C31\u7EEA \u2014 \u5C3D\u60C5\u4EAB\u53D7\u5427\uFF01",
            "modal.purchase_restored_title": "\u6B22\u8FCE\u56DE\u6765",
            "modal.purchase_success_subtitle": "\u4E00\u5207\u5C31\u7EEA \u2014 \u5C3D\u60C5\u4EAB\u53D7\u5427\uFF01",
            "modal.purchase_success_title": "\u5DF2\u6536\u5230\u4ED8\u6B3E",
            "modal.verifying_subscription": "\u6B63\u5728\u68C0\u67E5\u60A8\u7684\u8BA2\u9605\u2026",
            "nav.back": "\u2190 \u8FD4\u56DE",
            "nav.back_aria": "\u8FD4\u56DE",
            "offer.limited_time": "\u9650\u65F6\u4F18\u60E0",
            "payment.awaiting_subtitle": "\u6211\u4EEC\u5C06\u81EA\u52A8\u68C0\u6D4B\u4ED8\u6B3E \u2014 \u6216\u5728\u5B8C\u6210\u540E\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u3002",
            "payment.awaiting_title": "\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u5B8C\u6210\u4ED8\u6B3E",
            "payment.checking": "\u6B63\u5728\u68C0\u67E5\u2026",
            "payment.ive_paid": "\u6211\u5DF2\u4ED8\u6B3E",
            "payment.open_checkout_again": "\u91CD\u65B0\u6253\u5F00\u7ED3\u8D26",
            "payment.open_checkout_button": "\u6253\u5F00\u7ED3\u8D26",
            "payment.popup_blocked_message": "\u60A8\u7684\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\u7ED3\u8D26\u6807\u7B7E\u9875\u3002\u70B9\u51FB\u4E0B\u65B9\u6253\u5F00\u3002",
            "payment.popup_blocked_title": "\u5141\u8BB8\u5F39\u51FA\u7A97\u53E3\u4EE5\u7EE7\u7EED",
            "payment.popup_help_text": "\u7ED3\u8D26\u7A97\u53E3\u672A\u6253\u5F00\u6216\u88AB\u963B\u6B62\uFF1F\u70B9\u51FB\u6B64\u5904\u91CD\u65B0\u6253\u5F00\u3002",
            "payment.still_processing": "\u4ED8\u6B3E\u4ECD\u5728\u5904\u7406\u4E2D\u3002\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002",
            "payment.tab_closed_retry": "\u5173\u95ED\u4E86\u6807\u7B7E\u9875\uFF1F\u91CD\u8BD5",
            "pricing.free_trial_days": "{days}\u5929\u514D\u8D39\u8BD5\u7528",
            "pricing.included_per": "\u6BCF{interval}\u5305\u542B:",
            "pricing.interval.day": "\u5929",
            "pricing.interval.lifetime_short": "\u6C38\u4E45",
            "pricing.interval.month": "\u6708",
            "pricing.interval.period": "\u5468\u671F",
            "pricing.interval.week": "\u5468",
            "pricing.interval.year": "\u5E74",
            "pricing.money_back": "30\u5929\u9000\u6B3E\u4FDD\u8BC1",
            "pricing.most_popular": "\u6700\u53D7\u6B22\u8FCE",
            "pricing.no_prices": "\u6682\u65E0\u4EF7\u683C\u3002",
            "pricing.plan_label.daily": "\u65E5\u4ED8\u8BA1\u5212",
            "pricing.plan_label.lifetime": "\u7EC8\u8EAB",
            "pricing.plan_label.monthly": "\u6BCF\u6708\u5957\u9910",
            "pricing.plan_label.weekly": "\u6BCF\u5468\u5957\u9910",
            "pricing.plan_label.yearly": "\u6BCF\u5E74\u5957\u9910",
            "pricing.plans_aria": "\u8BA1\u5212",
            "session.contact_support": "\u8054\u7CFB\u652F\u6301",
            "session.restore_purchases": "\u6062\u590D\u8D2D\u4E70",
            "session.sign_out": "\u9000\u51FA",
            "session.signed_in_as_prefix": "\u5DF2\u767B\u5F55\u4E3A",
            "session.signing_out": "\u9000\u51FA\u4E2D\u2026",
            "support.attachments_aria": "\u4E0A\u4F20\u9644\u4EF6",
            "support.attachments_label": "\u9644\u4EF6",
            "support.close_button": "\u5173\u95ED",
            "support.done_button": "\u5B8C\u6210",
            "support.dropzone_text": "\u5C06\u56FE\u7247\u62D6\u653E\u5230\u6B64\u5904\u6216\u70B9\u51FB\u9009\u62E9",
            "support.email_placeholder": "\u8F93\u5165\u60A8\u7684\u90AE\u7BB1",
            "support.file_requirements": "JPEG/PNG/WebP\uFF0C\u6700\u591A {max} \u4E2A\u6587\u4EF6\uFF0C\u6BCF\u4E2A \u2264 {size}MB",
            "support.heading": "\u652F\u6301",
            "support.instruction": "\u8BF7\u586B\u5199\u4E0B\u65B9\u8868\u5355\u4EE5\u63D0\u4EA4\u60A8\u7684\u652F\u6301\u8BF7\u6C42\u3002",
            "support.invalid_email": "\u65E0\u6548\u7684\u90AE\u7BB1",
            "support.invalid_file": "\u4EC5\u9650 JPEG/PNG/WebP\uFF0C\u6BCF\u4E2A \u2264 {size}MB",
            "support.message_length": "1-5000\u4E2A\u5B57\u7B26",
            "support.message_placeholder": "\u8F93\u5165\u60A8\u7684\u6D88\u606F",
            "support.remove_file_aria": "\u79FB\u9664 {filename}",
            "support.required": "\u5FC5\u586B",
            "support.send_another": "\u53D1\u9001\u53E6\u4E00\u4E2A\u8BF7\u6C42",
            "support.send_button": "\u53D1\u9001",
            "support.sending": "\u53D1\u9001\u4E2D\u2026",
            "support.sending_as": "\u4EE5\u4EE5\u4E0B\u8EAB\u4EFD\u53D1\u9001",
            "support.subject_length": "3-200\u4E2A\u5B57\u7B26",
            "support.subject_placeholder": "\u8F93\u5165\u4E3B\u9898",
            "support.success_heading": "\u8BF7\u6C42\u5DF2\u63D0\u4EA4",
            "support.success_message_prefix": "\u6211\u4EEC\u5DF2\u6536\u5230\u60A8\u7684\u6D88\u606F,\u5C06\u56DE\u590D\u81F3",
            "support.too_many_files": "\u6700\u591A {max} \u4E2A\u6587\u4EF6"
        }
    }
    );
    var m = class extends Error {
        constructor(e, a, i={}) {
            super(a),
            this.name = "PaywallError",
            this.code = e,
            this.status = i.status,
            this.cause = i.cause,
            i.originRetryable !== void 0 && (this.originRetryable = i.originRetryable)
        }
    }
      , ge = class extends m {
        constructor(e) {
            super("not_enough_queries", e.message ?? "Not enough queries", {
                status: 402
            }),
            this.name = "QuotaExceededError",
            this.balances = e.balances,
            this.queryType = e.queryType,
            this.currentBalance = e.currentBalance
        }
    }
      , _e = 1;
    function Et(t) {
        if (t.name === "PaywallError") {
            let a = new m(t.code,t.message,{
                status: t.status
            });
            return t.stack && (a.stack = t.stack),
            a
        }
        let e = new Error(t.message);
        return e.name = t.name,
        t.stack && (e.stack = t.stack),
        e
    }
    function ln(t) {
        let e = !1
          , a = new Set
          , i = new Set
          , n = o => {
            for (let l of a)
                l(o)
        }
          , r = () => {
            if (!e) {
                e = !0;
                for (let o of i)
                    o();
                t.onMessage.removeListener(n),
                t.onDisconnect.removeListener(r)
            }
        }
        ;
        return t.onMessage.addListener(n),
        t.onDisconnect.addListener(r),
        {
            send(o) {
                if (!e)
                    try {
                        t.postMessage(o)
                    } catch (l) {
                        throw r(),
                        l
                    }
            },
            onMessage(o) {
                return a.add(o),
                () => a.delete(o)
            },
            onDisconnect(o) {
                return e ? (queueMicrotask(o),
                () => {}
                ) : (i.add(o),
                () => i.delete(o))
            },
            close() {
                e || (t.disconnect(),
                r())
            }
        }
    }
    function Lt(t) {
        let e = chrome.runtime.connect({
            name: t
        });
        return ln(e)
    }
    var Ot = "@monetize.software/sdk-extension";
    var cn = "3.5.1";
    function un() {
        return typeof chrome < "u" && !!chrome?.storage?.local && !!chrome?.runtime?.id
    }
    var pn = {
        getItem(t) {
            return new Promise(e => {
                chrome.storage.local.get([t], a => {
                    let i = a[t];
                    e(typeof i == "string" ? i : null)
                }
                )
            }
            )
        },
        setItem(t, e) {
            return new Promise(a => {
                chrome.storage.local.set({
                    [t]: e
                }, () => a())
            }
            )
        },
        removeItem(t) {
            return new Promise(e => {
                chrome.storage.local.remove([t], () => e())
            }
            )
        },
        watch(t, e) {
            let a = chrome?.storage?.onChanged;
            if (!a)
                return () => {}
                ;
            let i = (n, r) => {
                if (r !== "local")
                    return;
                let o = n[t];
                o && e(typeof o.newValue == "string" ? o.newValue : null)
            }
            ;
            return a.addListener(i),
            () => a.removeListener(i)
        }
    }
      , dn = {
        async getItem(t) {
            try {
                return window.localStorage.getItem(t)
            } catch {
                return null
            }
        },
        async setItem(t, e) {
            try {
                window.localStorage.setItem(t, e)
            } catch {}
        },
        async removeItem(t) {
            try {
                window.localStorage.removeItem(t)
            } catch {}
        },
        watch(t, e) {
            if (typeof window > "u")
                return () => {}
                ;
            let a = i => {
                i.storageArea === window.localStorage && i.key === t && e(i.newValue)
            }
            ;
            return window.addEventListener("storage", a),
            () => window.removeEventListener("storage", a)
        }
    };
    function hn(t) {
        return {
            async getItem(e) {
                return t.get(e) ?? null
            },
            async setItem(e, a) {
                t.set(e, a)
            },
            async removeItem(e) {
                t.delete(e)
            }
        }
    }
    var gn = new Map;
    function Zt(t) {
        return t || (un() ? pn : typeof window < "u" && "localStorage" in window ? dn : hn(typeof window > "u" ? new Map : gn))
    }
    var q = {
        visitorId: "pw-visitor-id",
        lastLoginMethod: t => `pw-${t}-last-login-method`,
        lastLoginEmail: t => `pw-${t}-last-login-email`,
        userState: (t, e) => `pw-${t}-${e}-user-v1`,
        authSession: t => `pw-${t}-auth-v1`,
        anonRefreshToken: t => `pw-${t}-anon-rt-v1`,
        bootstrap: t => `pw-${t}-bootstrap-v1`,
        checkoutPending: t => `pw-${t}-checkout-pending-v1`,
        balances: (t, e) => `pw-${t}-${e}-balances-v1`,
        edgeState: t => `pw-edge-${t}-v1`,
        experiment: t => `pw-${t}-exp-v1`
    };
    function Yt() {
        let t = typeof globalThis < "u" ? globalThis.crypto : void 0;
        if (t && typeof t.randomUUID == "function")
            return t.randomUUID();
        let e = new Uint8Array(16);
        if (t && typeof t.getRandomValues == "function")
            t.getRandomValues(e);
        else
            for (let i = 0; i < 16; i++)
                e[i] = Math.floor(Math.random() * 256);
        e[6] = e[6] & 15 | 64,
        e[8] = e[8] & 63 | 128;
        let a = Array.from(e, i => i.toString(16).padStart(2, "0")).join("");
        return `${a.slice(0, 8)}-${a.slice(8, 12)}-${a.slice(12, 16)}-${a.slice(16, 20)}-${a.slice(20)}`
    }
    async function Ut(t) {
        try {
            let a = await t.getItem(q.visitorId);
            if (a && typeof a == "string" && a.length >= 16)
                return a
        } catch {}
        let e = Yt();
        try {
            await t.setItem(q.visitorId, e)
        } catch {}
        return e
    }
    var Mt = "edge."
      , Nt = 1800 * 1e3
      , _n = 5e3
      , mn = 3e4
      , fn = 3e4;
    function fe(t) {
        return t && typeof t == "object" && "name" in t ? String(t.name) : void 0
    }
    function Xt(t, e={}) {
        let a = null, i, n = !1, r, o = () => {
            if (a)
                return a;
            if (a = new AbortController,
            t)
                if (t.aborted)
                    a.abort(t.reason);
                else {
                    let p = () => a.abort(t.reason);
                    t.addEventListener("abort", p),
                    r = () => t.removeEventListener("abort", p)
                }
            return a
        }
        ;
        e.eager && o();
        let l = () => {
            i !== void 0 && clearTimeout(i),
            i = void 0
        }
        ;
        return {
            get signal() {
                return a ? a.signal : t ?? void 0
            },
            timedOut: () => n,
            arm(p) {
                if (l(),
                p == null)
                    return;
                let c = o();
                i = setTimeout( () => {
                    n = !0,
                    c.abort()
                }
                , p)
            },
            disarm: l,
            dispose() {
                l(),
                r?.()
            }
        }
    }
    function yn(t) {
        let e;
        try {
            e = new URL(t)
        } catch {
            return null
        }
        if (e.protocol !== "https:")
            return null;
        let a = e.hostname;
        return a.startsWith(Mt) || !a.includes(".") || a.includes(":") || /^[\d.]+$/.test(a) ? null : `https://${Mt}${a}${e.port ? `:${e.port}` : ""}`
    }
    var re = new Map
      , ye = class {
        constructor(e) {
            this.primary = e.apiOrigin,
            this.storage = e.storage;
            let a;
            try {
                a = new URL(this.primary).host
            } catch {
                a = this.primary
            }
            this.storageKey = q.edgeState(a);
            let i;
            if (e.edgeFallback === !1)
                i = null;
            else if (typeof e.edgeFallback == "string")
                try {
                    i = new URL(e.edgeFallback).origin
                } catch {
                    throw new m("invalid_config",`edgeFallback is not a valid origin: "${e.edgeFallback}"`)
                }
            else
                i = yn(this.primary);
            this.edge = i === this.primary ? null : i,
            this.ready = this.hydrate()
        }
        async hydrate() {
            if (!(!this.storage || !this.edge || re.has(this.primary)))
                try {
                    let e = await this.storage.getItem(this.storageKey);
                    if (!e)
                        return;
                    let a = JSON.parse(e);
                    (a.active === "edge" || a.active === "primary") && typeof a.switchedAt == "number" && !re.has(this.primary) && re.set(this.primary, {
                        active: a.active,
                        switchedAt: a.switchedAt
                    })
                } catch {}
        }
        candidates() {
            if (!this.edge)
                return [this.primary];
            let e = re.get(this.primary);
            return e?.active === "edge" && Date.now() - e.switchedAt < Nt ? [this.edge, this.primary] : [this.primary, this.edge]
        }
        noteSuccess(e) {
            if (!this.edge)
                return;
            let a = re.get(this.primary);
            if (e === this.edge) {
                if (a?.active === "edge" && Date.now() - a.switchedAt < Nt)
                    return;
                this.setState({
                    active: "edge",
                    switchedAt: Date.now()
                })
            } else
                e === this.primary && a?.active === "edge" && this.setState({
                    active: "primary",
                    switchedAt: Date.now()
                })
        }
        setState(e) {
            re.set(this.primary, e),
            this.storage && this.storage.setItem(this.storageKey, JSON.stringify(e)).then(void 0, () => {}
            )
        }
    }
    ;
    async function Qt(t, e, a={}) {
        await t.ready;
        let i = t.candidates()
          , n = a.firstOnly ? i.slice(0, 1) : i;
        for (let r = 0; r < n.length; r++) {
            let o = r === n.length - 1;
            try {
                let l = await e(n[r], o, n.length);
                return t.noteSuccess(n[r]),
                l
            } catch (l) {
                let p = l instanceof m && l.code === "network_error" && l.originRetryable !== !1;
                if (o || !p)
                    throw l
            }
        }
        throw new m("network_error","Network request failed")
    }
    var be = cn
      , we = class {
        constructor(e) {
            this.opts = e,
            this.resolver = new ye({
                apiOrigin: e.apiOrigin,
                edgeFallback: e.edgeFallback,
                storage: e.storage
            })
        }
        activeOrigin() {
            return this.resolver.candidates()[0]
        }
        async request(e, a={}) {
            return Qt(this.resolver, (i, n, r) => this.attempt(i, e, a, n, r))
        }
        async attempt(e, a, i, n, r) {
            let o = new URL(a,e).toString()
              , l = this.opts.fetch ?? fetch
              , p = r > 1
              , c = (i.method ?? "GET").toUpperCase()
              , d = typeof FormData < "u" && i.body instanceof FormData
              , g = i.replayable ?? (c === "GET" || c === "HEAD")
              , u = p && !d ? n ? mn : _n : null
              , h = p ? fn : null
              , f = Xt(i.signal, {
                eager: u != null || h != null
            })
              , w = !1
              , y = _ => f.timedOut() ? v("Request deadline exceeded", _) : new m("aborted","Request aborted",{
                cause: _
            })
              , v = (_, b) => new m("network_error",_,{
                cause: b,
                originRetryable: w ? g : !0
            });
            try {
                let _ = async x => {
                    let C = new Headers(i.headers);
                    C.set("Accept", "application/json"),
                    C.set("X-SDK-Version", be),
                    C.set("X-Paywall-Id", this.opts.paywallId),
                    this.opts.capabilities?.length && C.set("X-SDK-Capabilities", this.opts.capabilities.join(",")),
                    x && C.set("Authorization", `Bearer ${x}`),
                    i.body && !C.has("Content-Type") && !d && C.set("Content-Type", "application/json"),
                    f.arm(u);
                    try {
                        let U = await l(o, {
                            ...i,
                            headers: C,
                            signal: f.signal,
                            credentials: "omit"
                        });
                        return w = !0,
                        U
                    } catch (U) {
                        throw fe(U) === "AbortError" ? y(U) : v("Network request failed", U)
                    } finally {
                        f.disarm()
                    }
                }
                  , b = await this.opts.getAuthToken?.() ?? null
                  , S = await _(b);
                if (S.status === 401 && b && this.opts.onUnauthorized) {
                    let x = await this.opts.onUnauthorized().catch( () => null);
                    x && x !== b && (w = !1,
                    S = await _(x))
                }
                f.arm(h);
                let L = (S.headers.get("content-type") ?? "").includes("application/json")
                  , G = null;
                if (L)
                    try {
                        G = await S.json()
                    } catch (x) {
                        if (!(x instanceof SyntaxError || fe(x) === "SyntaxError"))
                            throw fe(x) === "AbortError" ? y(x) : v("Response body read failed", x)
                    }
                if (!S.ok) {
                    let x = G && typeof G == "object" ? G : null
                      , C = x && typeof x.error == "string" ? x.error : null
                      , U = !!C && /^[a-z0-9_.-]{1,64}$/i.test(C)
                      , A = x && "code" in x && x.code != null && String(x.code) || (U ? C : null) || `http_${S.status}`
                      , O = x && "message" in x && x.message != null && String(x.message) || (C && !U ? C : null) || S.statusText || "Request failed";
                    throw new m(A,O,{
                        status: S.status,
                        cause: G
                    })
                }
                return G
            } finally {
                f.dispose()
            }
        }
    }
    ;
    function ea(t) {
        let e = new Uint8Array(t)
          , a = typeof globalThis < "u" ? globalThis.crypto : void 0;
        if (a && typeof a.getRandomValues == "function")
            a.getRandomValues(e);
        else
            for (let i = 0; i < t; i++)
                e[i] = Math.floor(Math.random() * 256);
        return e
    }
    function Ye(t) {
        let e = "";
        for (let a = 0; a < t.length; a++)
            e += String.fromCharCode(t[a]);
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
    }
    function bn() {
        return Ye(ea(64))
    }
    async function wn(t) {
        let e = new TextEncoder().encode(t)
          , a = globalThis.crypto;
        if (!a?.subtle?.digest)
            throw new Error("crypto.subtle is required for PKCE");
        let i = await a.subtle.digest("SHA-256", e);
        return Ye(new Uint8Array(i))
    }
    function vn() {
        return Ye(ea(16))
    }
    var kn = 6e4
      , xn = 600 * 1e3
      , ce = class {
        constructor(e) {
            if (this.session = null,
            this.inflightRefresh = null,
            this.inflightAnonSignin = null,
            this.listeners = new Set,
            this.storageUnwatch = null,
            this.destroyed = !1,
            this.oauthFlows = new Map,
            !e.paywallId)
                throw new m("invalid_config","paywallId is required");
            if (!e.apiOrigin)
                throw new m("invalid_config","apiOrigin is required. Pass the paywall custom_domain configured in the platform.");
            this.paywallId = e.paywallId,
            this.apiOrigin = e.apiOrigin,
            this.storage = Zt(e.storage),
            this.api = new we({
                apiOrigin: this.apiOrigin,
                paywallId: e.paywallId,
                fetch: e.fetch,
                edgeFallback: e.edgeFallback,
                storage: this.storage
            }),
            this.openPopup = e.openPopup ?? ( (a, i) => typeof window > "u" ? null : window.open(a, i, "width=480,height=640,popup=yes")),
            this.hydrated = this.hydrate(),
            this.startStorageWatch()
        }
        startStorageWatch() {
            typeof this.storage.watch == "function" && (this.storageUnwatch = this.storage.watch(this.storageKey(), e => {
                this.applyExternalSession(e)
            }
            ))
        }
        async applyExternalSession(e) {
            if (!this.destroyed && (await this.hydrated,
            !this.destroyed)) {
                if (e == null) {
                    this.session && this.setSession(null, {
                        skipPersist: !0,
                        event: "SIGNED_OUT"
                    });
                    return
                }
                try {
                    let a = JSON.parse(e);
                    if (!a || typeof a.access_token != "string" || typeof a.refresh_token != "string" || typeof a.expires_at != "number" || !a.user)
                        return;
                    let i = !this.session || this.session.user.id !== a.user.id ? "SIGNED_IN" : "TOKEN_REFRESHED";
                    this.setSession(a, {
                        skipPersist: !0,
                        event: i
                    })
                } catch {}
            }
        }
        ready() {
            return this.hydrated
        }
        getCachedSession() {
            return this.session
        }
        getCachedUser() {
            return this.session?.user ?? null
        }
        async getAccessToken() {
            if (await this.hydrated,
            !this.session && (await this.rehydrateFromStorage(),
            !this.session))
                return null;
            if (this.isFresh(this.session))
                return this.session.access_token;
            try {
                return (await this.refresh())?.access_token ?? null
            } catch {
                return this.session?.access_token ?? null
            }
        }
        async signInWithEmail(e) {
            await this.hydrated;
            let a = await this.readVisitorId()
              , i = {};
            e.idempotencyKey && (i["Idempotency-Key"] = e.idempotencyKey);
            let n = await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/email/signin`, {
                method: "POST",
                headers: Object.keys(i).length ? i : void 0,
                body: JSON.stringify({
                    email: e.email,
                    password: e.password,
                    visitor_id: a,
                    user_meta: e.userMeta
                })
            })
              , r = this.toSession(n, n.user);
            return this.setSession(r, {
                event: "SIGNED_IN"
            }),
            this.recordLastLogin("email", e.email),
            r
        }
        async signUp(e) {
            await this.hydrated;
            let a = await this.readVisitorId()
              , i = {};
            e.idempotencyKey && (i["Idempotency-Key"] = e.idempotencyKey);
            let n = await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/email/signup`, {
                method: "POST",
                headers: Object.keys(i).length ? i : void 0,
                body: JSON.stringify({
                    email: e.email,
                    password: e.password,
                    visitor_id: a,
                    user_meta: e.userMeta
                })
            });
            if (n.status === "already_registered")
                return {
                    kind: "already_registered",
                    email: n.email
                };
            if (n.status === "confirmation_required")
                return this.recordLastLogin("email", e.email),
                {
                    kind: "confirmation_required",
                    user: n.user
                };
            let r = this.toSession(n, n.user);
            return this.setSession(r, {
                event: "SIGNED_IN"
            }),
            this.recordLastLogin("email", e.email),
            {
                kind: "signed_in",
                session: r
            }
        }
        async resendConfirmation(e) {
            await this.hydrated;
            let a = {};
            e.idempotencyKey && (a["Idempotency-Key"] = e.idempotencyKey),
            await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/email/resend`, {
                method: "POST",
                headers: Object.keys(a).length ? a : void 0,
                body: JSON.stringify({
                    email: e.email
                })
            })
        }
        async sendOtp(e) {
            await this.hydrated,
            await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/otp/send`, {
                method: "POST",
                body: JSON.stringify({
                    email: e.email,
                    create_user: e.createUser ?? !0,
                    user_meta: e.userMeta
                })
            })
        }
        async verifyOtp(e) {
            await this.hydrated;
            let a = await this.readVisitorId()
              , i = await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/otp/verify`, {
                method: "POST",
                body: JSON.stringify({
                    email: e.email,
                    token: e.token,
                    type: e.type ?? "email",
                    visitor_id: a,
                    user_meta: e.userMeta
                })
            })
              , n = this.toSession(i, i.user)
              , r = e.type === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN";
            return this.setSession(n, {
                event: r
            }),
            n
        }
        async requestPasswordReset(e) {
            await this.hydrated,
            await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/password/request-reset`, {
                method: "POST",
                body: JSON.stringify({
                    email: e.email
                })
            })
        }
        async updatePassword(e) {
            await this.hydrated;
            let a = await this.getAccessToken();
            if (!a)
                throw new m("not_authenticated","no active session");
            await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/password/update`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${a}`
                },
                body: JSON.stringify({
                    password: e.password
                })
            })
        }
        async signInAnonymously(e={}) {
            if (this.inflightAnonSignin)
                return this.inflightAnonSignin;
            this.inflightAnonSignin = (async () => {
                if (await this.hydrated,
                !e.forceNewAnon && this.session?.user.is_anonymous === !0)
                    return this.session;
                if (!e.forceNewAnon) {
                    let o = await this.resumeAnonymous();
                    if (o)
                        return o
                }
                let a = await this.readVisitorId()
                  , i = await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/anonymous/signin`, {
                    method: "POST",
                    body: JSON.stringify({
                        ...e.captchaToken ? {
                            captcha_token: e.captchaToken
                        } : {},
                        visitor_id: a,
                        user_meta: e.userMeta
                    })
                })
                  , n = {
                    ...i.user,
                    email: i.user.email ?? null,
                    is_anonymous: !0
                }
                  , r = this.toSession(i, n);
                return this.setSession(r, {
                    event: "SIGNED_IN"
                }),
                await this.writeAnonRefreshToken(r.refresh_token),
                r
            }
            )();
            try {
                return await this.inflightAnonSignin
            } finally {
                this.inflightAnonSignin = null
            }
        }
        async resumeAnonymous() {
            let e = await this.readAnonRefreshToken();
            if (!e)
                return null;
            try {
                let a = await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/refresh`, {
                    method: "POST",
                    body: JSON.stringify({
                        refresh_token: e
                    })
                })
                  , i = this.session?.user.is_anonymous === !0 ? this.session.user : {
                    id: "",
                    email: null,
                    is_anonymous: !0
                }
                  , n = this.toSession(a, i);
                return this.setSession(n, {
                    event: "SIGNED_IN"
                }),
                await this.writeAnonRefreshToken(n.refresh_token),
                n
            } catch (a) {
                if (a instanceof m && a.status === 401)
                    return await this.clearAnonRefreshToken(),
                    null;
                throw a
            }
        }
        async upgradeAnonymousToEmail(e) {
            await this.hydrated;
            let a = await this.getAccessToken();
            if (!a)
                throw new m("not_authenticated","no active session");
            let i = {
                Authorization: `Bearer ${a}`
            };
            e.idempotencyKey && (i["Idempotency-Key"] = e.idempotencyKey);
            let n = await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/anonymous/upgrade`, {
                method: "POST",
                headers: i,
                body: JSON.stringify({
                    email: e.email,
                    password: e.password,
                    user_meta: e.userMeta
                })
            });
            if (n.status === "confirmation_required")
                return {
                    kind: "confirmation_required",
                    email: n.email
                };
            let r = this.session;
            if (!r)
                throw new m("not_authenticated","session disappeared during upgrade");
            let o = {
                ...r.user,
                id: n.user.id,
                email: n.user.email,
                is_anonymous: n.user.is_anonymous ?? !1
            }
              , l = {
                ...r,
                user: o
            };
            return this.setSession(l, {
                event: "USER_UPDATED"
            }),
            await this.clearAnonRefreshToken(),
            {
                kind: "updated",
                session: l
            }
        }
        async signInWithOAuth(e) {
            if (typeof window > "u")
                throw new m("oauth_unavailable","window is required for OAuth");
            let {authorize_url: a, state: i} = await this.startOAuthFlow({
                provider: e.provider,
                scopes: e.scopes,
                userMeta: e.userMeta,
                switchAccount: e.switchAccount
            })
              , n = this.openPopup(a, `pw-oauth-${i}`);
            if (!n)
                throw this.oauthFlows.delete(i),
                new m("popup_blocked","browser blocked auth popup \u2014 call from a user gesture");
            e.onPopupOpened?.();
            let r = await Xe(n, i);
            try {
                n.close()
            } catch {}
            if (this.destroyed)
                throw this.oauthFlows.delete(i),
                new m("aborted","AuthClient destroyed mid-flow");
            if (r.kind === "cancelled")
                throw new m("oauth_cancelled","auth popup was closed");
            if (r.kind === "timeout")
                throw new m("oauth_timeout","OAuth flow timed out");
            if (r.kind === "error")
                throw this.oauthFlows.delete(i),
                new m(Qe(r) ? "oauth_identity_already_linked" : "oauth_failed",r.description || r.error || "OAuth provider returned error");
            return this.completeOAuthFlow({
                state: i,
                code: r.code
            })
        }
        async startOAuthFlow(e) {
            await this.hydrated,
            this.gcOAuthFlows();
            let a = bn()
              , i = await wn(a)
              , n = vn()
              , r = {};
            if (!e.switchAccount) {
                let l = await this.getAccessToken().catch( () => null);
                l && (r.Authorization = `Bearer ${l}`)
            }
            let {authorize_url: o} = await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/oauth/init`, {
                method: "POST",
                headers: Object.keys(r).length ? r : void 0,
                body: JSON.stringify({
                    provider: e.provider,
                    code_challenge: i,
                    code_challenge_method: "s256",
                    scopes: e.scopes
                })
            });
            return this.oauthFlows.set(n, {
                verifier: a,
                userMeta: e.userMeta,
                provider: e.provider,
                startedAt: Date.now()
            }),
            this.recordLastLoginMethod(e.provider),
            {
                authorize_url: o,
                state: n
            }
        }
        async completeOAuthFlow(e) {
            await this.hydrated;
            let a = this.oauthFlows.get(e.state);
            if (!a)
                throw new m("oauth_invalid_state","OAuth flow not found \u2014 start with startOAuthFlow first or check TTL");
            this.oauthFlows.delete(e.state);
            let i = await this.readVisitorId()
              , n = await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/oauth/exchange`, {
                method: "POST",
                body: JSON.stringify({
                    auth_code: e.code,
                    code_verifier: a.verifier,
                    visitor_id: i,
                    user_meta: a.userMeta
                })
            });
            if (this.destroyed)
                throw new m("aborted","AuthClient destroyed mid-flow");
            let r = this.toSession(n, n.user);
            return this.setSession(r, {
                event: "SIGNED_IN"
            }),
            r.user.email && this.recordLastLoginEmail(r.user.email),
            r
        }
        gcOAuthFlows() {
            let e = Date.now() - xn;
            for (let[a,i] of this.oauthFlows)
                i.startedAt < e && this.oauthFlows.delete(a)
        }
        async refresh() {
            if (await this.hydrated,
            !this.session)
                return null;
            if (this.inflightRefresh)
                return this.inflightRefresh;
            let e = this.session.refresh_token
              , a = this.session.user;
            return this.inflightRefresh = (async () => {
                try {
                    let i = await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/refresh`, {
                        method: "POST",
                        body: JSON.stringify({
                            refresh_token: e
                        })
                    })
                      , n = this.toSession(i, a);
                    return this.setSession(n, {
                        event: "TOKEN_REFRESHED"
                    }),
                    a.is_anonymous === !0 && await this.writeAnonRefreshToken(n.refresh_token),
                    n
                } catch (i) {
                    if (i instanceof m && i.status === 401)
                        return a.is_anonymous === !0 && await this.clearAnonRefreshToken(),
                        this.setSession(null, {
                            event: "SIGNED_OUT"
                        }),
                        null;
                    throw i
                } finally {
                    this.inflightRefresh = null
                }
            }
            )(),
            this.inflightRefresh
        }
        async revokeAllSessions() {
            await this.hydrated;
            let e = this.session?.access_token;
            if (!e)
                throw new m("not_authenticated","no active session");
            await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/revoke-all`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${e}`
                }
            }),
            this.setSession(null, {
                event: "SIGNED_OUT"
            })
        }
        async signOut(e={}) {
            await this.hydrated;
            let a = this.session?.access_token
              , i = this.session?.user.is_anonymous === !0;
            if (this.setSession(null, {
                event: "SIGNED_OUT"
            }),
            e.forgetAnonymous && await this.clearAnonRefreshToken(),
            !!a && !(i && !e.forgetAnonymous))
                try {
                    await this.api.request(`/api/v1/paywall/${this.paywallId}/auth/signout`, {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${a}`
                        }
                    })
                } catch {}
        }
        onAuthChange(e) {
            return this.listeners.add(e),
            this.hydrated.then( () => {
                if (this.destroyed || !this.listeners.has(e))
                    return;
                let a = this.session;
                try {
                    e("INITIAL_SESSION", a)
                } catch (i) {
                    console.warn("[paywall] onAuthChange INITIAL_SESSION threw", i)
                }
            }
            ),
            () => {
                this.listeners.delete(e)
            }
        }
        isFresh(e) {
            return e.expires_at - Date.now() > kn
        }
        toSession(e, a) {
            let i = e.expires_at != null ? e.expires_at * 1e3 : Date.now() + e.expires_in * 1e3;
            return {
                access_token: e.access_token,
                refresh_token: e.refresh_token,
                expires_at: i,
                user: a
            }
        }
        setSession(e, a) {
            if (this.destroyed)
                return;
            let i = this.session;
            this.session = e,
            a.skipPersist || this.persist(),
            Cn(i, e) || this.emit(a.event)
        }
        emit(e) {
            for (let a of this.listeners)
                try {
                    a(e, this.session)
                } catch (i) {
                    console.warn("[paywall] onAuthChange listener threw", i)
                }
        }
        storageKey() {
            return q.authSession(this.paywallId)
        }
        async hydrate() {
            try {
                let e = await this.storage.getItem(this.storageKey());
                if (!e)
                    return;
                let a = JSON.parse(e);
                if (!a || typeof a.access_token != "string" || typeof a.refresh_token != "string" || typeof a.expires_at != "number" || !a.user)
                    return;
                this.session = a
            } catch {}
        }
        async rehydrateFromStorage() {
            try {
                let e = await this.storage.getItem(this.storageKey());
                if (!e)
                    return;
                let a = JSON.parse(e);
                if (!a || typeof a.access_token != "string" || typeof a.refresh_token != "string" || typeof a.expires_at != "number" || !a.user)
                    return;
                this.setSession(a, {
                    skipPersist: !0,
                    event: "SIGNED_IN"
                })
            } catch {}
        }
        destroy() {
            this.destroyed = !0,
            this.storageUnwatch && (this.storageUnwatch(),
            this.storageUnwatch = null),
            this.listeners.clear(),
            this.inflightRefresh = null
        }
        isDestroyed() {
            return this.destroyed
        }
        async persist() {
            try {
                this.session ? await this.storage.setItem(this.storageKey(), JSON.stringify(this.session)) : await this.storage.removeItem(this.storageKey())
            } catch {}
        }
        async readAnonRefreshToken() {
            try {
                let e = await this.storage.getItem(q.anonRefreshToken(this.paywallId));
                return typeof e == "string" && e.length > 0 ? e : null
            } catch {
                return null
            }
        }
        async writeAnonRefreshToken(e) {
            try {
                await this.storage.setItem(q.anonRefreshToken(this.paywallId), e)
            } catch {}
        }
        async clearAnonRefreshToken() {
            try {
                await this.storage.removeItem(q.anonRefreshToken(this.paywallId))
            } catch {}
        }
        async getLastLogin() {
            try {
                let[e,a] = await Promise.all([this.storage.getItem(q.lastLoginMethod(this.paywallId)), this.storage.getItem(q.lastLoginEmail(this.paywallId))]);
                return !e || !zn(e) ? null : {
                    method: e,
                    email: typeof a == "string" && a ? a : null
                }
            } catch {
                return null
            }
        }
        recordLastLogin(e, a) {
            this.recordLastLoginMethod(e),
            a && this.recordLastLoginEmail(a)
        }
        recordLastLoginMethod(e) {
            this.storage.setItem(q.lastLoginMethod(this.paywallId), e).catch( () => {}
            )
        }
        recordLastLoginEmail(e) {
            this.storage.setItem(q.lastLoginEmail(this.paywallId), e).catch( () => {}
            )
        }
        async readVisitorId() {
            try {
                let e = await this.storage.getItem(q.visitorId);
                return typeof e == "string" && e.length >= 16 ? e : void 0
            } catch {
                return
            }
        }
    }
      , Sn = 5 * 6e4
      , In = 500;
    function Xe(t, e) {
        return new Promise(a => {
            let i = !1
              , n = () => {
                i = !0,
                window.removeEventListener("message", r),
                clearInterval(o),
                clearTimeout(l)
            }
              , r = p => {
                if (i)
                    return;
                let c = p.data;
                !c || c.type !== "pw-oauth" || c.messageId === e && (c.status === "success" && c.code ? (n(),
                a({
                    kind: "code",
                    code: c.code
                })) : c.status === "error" && (n(),
                a({
                    kind: "error",
                    error: c.error || "oauth_error",
                    errorCode: c.errorCode,
                    description: c.description
                })))
            }
              , o = setInterval( () => {
                if (i)
                    return;
                let p;
                try {
                    p = t.closed
                } catch {
                    return
                }
                p && (n(),
                a({
                    kind: "cancelled"
                }))
            }
            , In)
              , l = setTimeout( () => {
                i || (n(),
                a({
                    kind: "timeout"
                }))
            }
            , Sn);
            window.addEventListener("message", r)
        }
        )
    }
    function Qe(t) {
        if (t.kind !== "error")
            return !1;
        if (t.errorCode === "identity_already_exists")
            return !0;
        let e = `${t.error ?? ""} ${t.description ?? ""}`.toLowerCase();
        return e.includes("identity_already_exists") || e.includes("already linked")
    }
    function zn(t) {
        return t === "google" || t === "apple" || t === "github" || t === "facebook" || t === "email"
    }
    function Cn(t, e) {
        return t === e ? !0 : !t || !e ? !1 : t.access_token === e.access_token && t.refresh_token === e.refresh_token && t.expires_at === e.expires_at && t.user.id === e.user.id && t.user.email === e.user.email
    }
    var Je = class {
        constructor(e) {
            if (!e.paywallId)
                throw new m("invalid_config","paywallId is required");
            if (!e.apiOrigin)
                throw new m("invalid_config","apiOrigin is required. Pass the paywall custom_domain configured in the platform.");
            this.paywallId = e.paywallId,
            this.apiOrigin = e.apiOrigin,
            this.auth = e.auth,
            this.userId = e.userId,
            this.capabilities = e.capabilities,
            this.customFetch = e.fetch,
            this.onChargeSuccess = e.onChargeSuccess,
            this.onQuotaExceeded = e.onQuotaExceeded,
            this.resolver = new ye({
                apiOrigin: this.apiOrigin,
                edgeFallback: e.edgeFallback
            }),
            e.userId && !e.auth && typeof window < "u" && typeof window.document < "u" && console.warn("[paywall] WARNING: ApiGatewayClient.userId set without auth in browser. Client can spoof userId. Use AuthClient + Bearer for trusted user.id.")
        }
        async call(e) {
            let a = e.path ? e.path.replace(/^\/+/, "") : ""
              , i = w => {
                let y = new URL(`/api/v1/api-gateway/${encodeURIComponent(e.providerId)}${a ? `/${a}` : ""}`,w);
                return y.searchParams.set("paywall_id", this.paywallId),
                y.toString()
            }
              , n = new Headers(e.headers);
            n.set("X-SDK-Version", be),
            n.set("X-Paywall-Id", this.paywallId),
            this.capabilities?.length && n.set("X-SDK-Capabilities", this.capabilities.join(","));
            let r = await this.auth?.getAccessToken();
            r ? n.set("Authorization", `Bearer ${r}`) : this.userId && n.set("X-User-ID", this.userId);
            let o = typeof FormData < "u" && e.body instanceof FormData, l = typeof Blob < "u" && e.body instanceof Blob, p = typeof ReadableStream < "u" && e.body instanceof ReadableStream, c = typeof e.body == "string", d;
            e.body === void 0 || e.body === null ? d = void 0 : o || l || p || c ? d = e.body : (d = JSON.stringify(e.body),
            n.has("Content-Type") || n.set("Content-Type", "application/json"));
            let g = this.customFetch ?? fetch
              , u = async w => {
                let y = Xt(e.signal);
                try {
                    return await g(w, {
                        method: e.method ?? "POST",
                        headers: n,
                        body: d,
                        signal: y.signal,
                        credentials: "omit"
                    })
                } catch (v) {
                    if (fe(v) === "AbortError")
                        throw new m("aborted","Request aborted",{
                            cause: v
                        });
                    let _ = v instanceof Error ? v.message : String(v);
                    throw new m("network_error",`Network request failed: ${_}`,{
                        cause: v
                    })
                } finally {
                    y.dispose()
                }
            }
              , h = await Qt(this.resolver, async w => {
                let y = i(w)
                  , v = await u(y);
                if (v.status === 401 && r && this.auth && !p) {
                    let _ = await this.auth.refresh().then(b => b?.access_token ?? null).catch( () => null);
                    _ && _ !== r && (n.set("Authorization", `Bearer ${_}`),
                    v = await u(y))
                }
                return v
            }
            , {
                firstOnly: p
            });
            if (h.status === 402) {
                let w = await jn(h);
                throw this.onQuotaExceeded?.(w),
                w
            }
            if (!h.ok) {
                let w = await An(h.clone());
                throw new m(w ?? `http_${h.status}`,h.statusText || "Gateway request failed",{
                    status: h.status
                })
            }
            let f = h.headers.get("X-Query-Type") ?? void 0;
            return this.onChargeSuccess?.(f),
            h
        }
    }
    ;
    async function jn(t) {
        let e = {};
        try {
            e = await t.json()
        } catch {}
        let a = e.details?.balances
          , i = [];
        if (Array.isArray(a)) {
            let n = a[0];
            Array.isArray(n) ? i = n : n && Array.isArray(n.balances) && (i = n.balances)
        }
        return new ge({
            balances: i,
            queryType: e.details?.queryType ?? "",
            currentBalance: e.details?.currentBalance ?? null
        })
    }
    async function An(t) {
        if (!(t.headers.get("content-type") ?? "").includes("application/json"))
            return null;
        try {
            let e = await t.json();
            return e.code || e.error || null
        } catch {
            return null
        }
    }
    function Pn(t) {
        let e = 2166136261;
        for (let a = 0; a < t.length; a++)
            e ^= t.charCodeAt(a),
            e = Math.imul(e, 16777619);
        return e >>> 0
    }
    function Bn(t, e) {
        let a = t.variants.filter(o => o && typeof o.key == "string")
          , i = a.reduce( (o, l) => o + Math.max(0, l.weight || 0), 0);
        if (i <= 0)
            return null;
        let n = Pn(`${e}:${t.id}`) % i
          , r = 0;
        for (let o of a)
            if (r += Math.max(0, o.weight || 0),
            n < r)
                return o.key;
        return a[a.length - 1]?.key ?? null
    }
    async function Tn(t, e, a, i) {
        let n = q.experiment(e);
        try {
            let p = await t.getItem(n);
            if (p) {
                let c = JSON.parse(p);
                if (c && c.experimentId === a.id && a.variants.some(d => d.key === c.variant))
                    return {
                        experimentId: c.experimentId,
                        variant: c.variant
                    }
            }
        } catch {}
        let r = await i()
          , o = Bn(a, r);
        if (!o)
            return null;
        let l = {
            experimentId: a.id,
            variant: o
        };
        try {
            let p = {
                ...l,
                at: Date.now()
            };
            await t.setItem(n, JSON.stringify(p))
        } catch {}
        return l
    }
    function En(t, e) {
        let a = t.experiment;
        if (!a || a.id !== e.experimentId || (a.assigned_variant = e.variant,
        a.kind !== "prices"))
            return;
        let i = a.variants.find(n => n.key === e.variant);
        i && Ln(t, i)
    }
    function Ln(t, e) {
        let a = new Map;
        for (let r of e.prices ?? [])
            r.replaces != null && a.set(String(r.replaces), r);
        if (a.size === 0)
            return;
        t.prices = t.prices.map(r => a.get(r.id) ?? r);
        let i = new Map;
        a.forEach( (r, o) => i.set(o, r.id));
        let n = r => i.get(r) ?? r;
        for (let r of t.layout?.blocks ?? [])
            r.type === "price_grid" ? (r.priceIds && (r.priceIds = r.priceIds.map(n)),
            r.popular_price_id && (r.popular_price_id = n(r.popular_price_id))) : r.type === "cta_button" && r.priceId && (r.priceId = n(r.priceId));
        for (let r of t.offers ?? [])
            r.price_id != null && (r.price_id = n(r.price_id))
    }
    var qt = 5e3
      , ta = 30 * 6e4
      , Dt = 60 * 6e4
      , On = 5 * 6e4
      , Ke = {
        has_active_subscription: !1,
        purchases: [],
        trial: null,
        had_previous_trial: !1
    };
    function Gt(t) {
        return t && (t.email || t.userId || t.anonymousId) || "guest"
    }
    function Un(t, e) {
        return t === e ? !0 : !t || !e ? !1 : JSON.stringify(t) === JSON.stringify(e)
    }
    var Mn = 5e3
      , Ft = 5 * 6e4
      , Nn = ta
      , qn = 3e4;
    function Dn(t, e) {
        if (t === e)
            return !0;
        if (!t || !e || t.length !== e.length)
            return !1;
        for (let a = 0; a < t.length; a++)
            if (t[a].type !== e[a].type || t[a].count !== e[a].count)
                return !1;
        return !0
    }
    var ve = class {
        constructor(e) {
            if (this.cachedBootstrap = null,
            this.cachedBootstrapAt = 0,
            this.inflightBootstrap = null,
            this.bootstrapListeners = new Set,
            this.bootstrapStorageUnwatch = null,
            this.authUnsubscribe = null,
            this.cachedUser = null,
            this.cachedUserAt = 0,
            this.inflightUser = null,
            this.userListeners = new Set,
            this.userHydration = Promise.resolve(),
            this.visitorIdPromise = null,
            this.visitorId = null,
            this.inflightCheckouts = new Map,
            this.cachedBalances = null,
            this.cachedBalancesAt = 0,
            this.balancesStorageUnwatch = null,
            this.inflightBalances = null,
            this.balanceListeners = new Set,
            this.previewVersionCounter = 0,
            !e.paywallId)
                throw new m("invalid_config","paywallId is required");
            if (!e.apiOrigin)
                throw new m("invalid_config",'apiOrigin is required. Pass the paywall custom_domain configured in the platform (e.g. "https://pay.your-domain.com"). The legacy "appbox.space" fallback is not used in SDK 3.0.');
            this.paywallId = e.paywallId,
            this.apiOrigin = e.apiOrigin,
            this.capabilities = e.capabilities,
            this.auth = e.auth,
            this.previewMode = e.preview === !0;
            let a = e.auth?.getCachedUser();
            if (this.identity = e.identity ?? (a ? He(a) : void 0),
            this.apiKey = e.apiKey,
            this.fetchImpl = e.fetch,
            e.apiKey && typeof window < "u" && typeof window.document < "u") {
                if (!e.allowInsecureBrowserUsage)
                    throw new m("apikey_in_browser","BillingClient.apiKey detected in browser context. This is a server-SDK key and exposes your entire account. Move BillingClient to a trusted backend, or pass allowInsecureBrowserUsage:true if this is intentional (e2e tests).");
                console.error("[paywall] SECURITY: BillingClient.apiKey detected in browser context (allowInsecureBrowserUsage). This is a server-SDK key and exposes your account. Never ship this to production.")
            }
            this.storage = Zt(e.storage),
            this.api = new we({
                apiOrigin: this.apiOrigin,
                paywallId: e.paywallId,
                capabilities: e.capabilities,
                fetch: e.fetch,
                edgeFallback: e.edgeFallback,
                storage: this.storage,
                getAuthToken: e.auth ? () => e.auth.getAccessToken() : void 0,
                onUnauthorized: e.auth ? async () => {
                    try {
                        return (await e.auth.refresh())?.access_token ?? null
                    } catch {
                        return null
                    }
                }
                : void 0
            }),
            e.auth && (this.authUnsubscribe = e.auth.onAuthChange( (i, n) => {
                let r = n ? He(n.user) : void 0;
                Vt(this.identity, r) || this.setIdentity(r)
            }
            )),
            this.auth && !this.identity || (this.userHydration = this.hydrateUserFromStorage()),
            this.hydrateBootstrapFromStorage(),
            this.subscribeBootstrapStorage(),
            this.hydrateBalancesFromStorage(),
            this.subscribeBalancesStorage(),
            this.visitorIdPromise = Ut(this.storage).then(i => (this.visitorId = i,
            i))
        }
        async getVisitorId() {
            return this.visitorId ? this.visitorId : (this.visitorIdPromise || (this.visitorIdPromise = Ut(this.storage).then(e => (this.visitorId = e,
            e))),
            this.visitorIdPromise)
        }
        getCachedVisitorId() {
            return this.visitorId
        }
        setIdentity(e) {
            this.identity = e,
            this.cachedUser = null,
            this.cachedUserAt = 0,
            this.inflightUser = null,
            this.cachedBalances = null,
            this.cachedBalancesAt = 0,
            this.inflightBalances = null,
            this.balancesStorageUnwatch && (this.balancesStorageUnwatch(),
            this.balancesStorageUnwatch = null),
            this.hydrateBalancesFromStorage(),
            this.subscribeBalancesStorage(),
            this.userHydration = this.hydrateUserFromStorage(),
            e ? this.getUser({
                force: !0
            }).catch( () => {}
            ) : (this.applyUser(Ke),
            this.applyBalances([]))
        }
        destroy() {
            this.authUnsubscribe && (this.authUnsubscribe(),
            this.authUnsubscribe = null),
            this.bootstrapStorageUnwatch && (this.bootstrapStorageUnwatch(),
            this.bootstrapStorageUnwatch = null),
            this.balancesStorageUnwatch && (this.balancesStorageUnwatch(),
            this.balancesStorageUnwatch = null),
            this.userListeners.clear(),
            this.balanceListeners.clear(),
            this.bootstrapListeners.clear()
        }
        getIdentity() {
            return this.identity
        }
        getStorage() {
            return this.storage
        }
        async peekCachedUser() {
            return await this.userHydration.catch( () => {}
            ),
            this.cachedUser
        }
        activeApiOrigin() {
            return this.api.activeOrigin()
        }
        async bootstrap(e=!1) {
            let a = typeof e == "boolean" ? {
                force: e
            } : e;
            if (this.previewMode) {
                if (this.cachedBootstrap)
                    return this.cachedBootstrap;
                throw new m("invalid_config","BillingClient in preview mode but cachedBootstrap is not seeded. Call setBootstrap(bootstrap) before open().")
            }
            let i = Date.now()
              , n = this.cachedBootstrap && this.cachedBootstrapAt > 0 && i - this.cachedBootstrapAt < Dt;
            return !a.force && n ? (i - this.cachedBootstrapAt > On && this.revalidateBootstrap(a.signal).catch( () => {}
            ),
            {
                ...this.cachedBootstrap,
                user: this.cachedUser ?? void 0
            }) : this.inflightBootstrap ? this.inflightBootstrap : (this.inflightBootstrap = this.fetchBootstrap({
                ifVersion: a.force ? void 0 : this.cachedBootstrap?.version,
                signal: a.signal
            }).finally( () => {
                this.inflightBootstrap = null
            }
            ),
            this.inflightBootstrap)
        }
        onBootstrapChange(e) {
            return this.bootstrapListeners.add(e),
            () => {
                this.bootstrapListeners.delete(e)
            }
        }
        setBootstrap(e) {
            let a = this.cachedBootstrap ?? {
                settings: {
                    id: this.paywallId,
                    name: ""
                },
                prices: [],
                offers: []
            }
              , i = {
                ...a,
                ...e,
                settings: e.settings !== void 0 ? {
                    ...a.settings,
                    ...e.settings
                } : a.settings,
                prices: e.prices !== void 0 ? e.prices : a.prices,
                offers: e.offers !== void 0 ? e.offers : a.offers,
                version: `preview:${++this.previewVersionCounter}`
            };
            i.layout || (i.layout = Kt(i.settings, i.prices)),
            me(i),
            this.cachedBootstrap = i,
            this.cachedBootstrapAt = Date.now();
            for (let n of this.bootstrapListeners)
                try {
                    n(i)
                } catch (r) {
                    console.warn("[paywall] onBootstrapChange listener threw", r)
                }
        }
        async fetchBootstrap(e) {
            let a = {};
            this.identity?.email && (a["X-User-Email"] = this.identity.email);
            let i = e.ifVersion ? `/api/v1/paywall/${this.paywallId}/bootstrap?if_version=${encodeURIComponent(e.ifVersion)}` : `/api/v1/paywall/${this.paywallId}/bootstrap`
              , n = await this.api.request(i, {
                ...Object.keys(a).length ? {
                    headers: a
                } : {},
                signal: e.signal
            });
            if ("unchanged" in n && n.unchanged)
                return this.cachedBootstrap ? (this.cachedBootstrapAt = Date.now(),
                n.user && this.applyUser(n.user),
                {
                    ...this.cachedBootstrap,
                    user: this.cachedUser ?? void 0
                }) : this.fetchBootstrap({
                    signal: e.signal
                });
            let r = n;
            return Gn(r.settings.custom_domain, this.apiOrigin),
            r.layout || (r.layout = Kt(r.settings, r.prices)),
            me(r),
            await this.materializeExperiment(r),
            this.applyBootstrap(r, {
                persist: !0
            }),
            r.user && this.applyUser(r.user),
            r
        }
        async materializeExperiment(e) {
            let a = e.experiment;
            if (!(!a || !Array.isArray(a.variants) || a.variants.length === 0))
                try {
                    let i = await Tn(this.storage, this.paywallId, a, () => this.getVisitorId());
                    i && En(e, i)
                } catch {}
        }
        revalidateBootstrap(e) {
            return this.inflightBootstrap ? this.inflightBootstrap : (this.inflightBootstrap = this.fetchBootstrap({
                ifVersion: this.cachedBootstrap?.version,
                signal: e
            }).finally( () => {
                this.inflightBootstrap = null
            }
            ),
            this.inflightBootstrap)
        }
        applyBootstrap(e, {persist: a}) {
            let i = !this.cachedBootstrap || this.cachedBootstrap.version !== e.version;
            if (this.cachedBootstrap = e,
            this.cachedBootstrapAt = Date.now(),
            a && this.persistBootstrap(e),
            i)
                for (let n of this.bootstrapListeners)
                    try {
                        n(e)
                    } catch (r) {
                        console.warn("[paywall] onBootstrapChange listener threw", r)
                    }
        }
        async hydrateBootstrapFromStorage() {
            if (!this.cachedBootstrap)
                try {
                    let e = await this.storage.getItem(q.bootstrap(this.paywallId));
                    if (!e)
                        return;
                    let a = JSON.parse(e);
                    if (!a?.bootstrap || Date.now() - a.at > Dt || this.cachedBootstrap || (me(a.bootstrap),
                    await this.materializeExperiment(a.bootstrap),
                    this.cachedBootstrap))
                        return;
                    this.cachedBootstrap = a.bootstrap,
                    this.cachedBootstrapAt = a.at;
                    for (let i of this.bootstrapListeners)
                        try {
                            i(a.bootstrap)
                        } catch (n) {
                            console.warn("[paywall] onBootstrapChange listener threw", n)
                        }
                } catch {}
        }
        async persistBootstrap(e) {
            if (e.version)
                try {
                    let {user: a, ...i} = e;
                    await this.storage.setItem(q.bootstrap(this.paywallId), JSON.stringify({
                        at: Date.now(),
                        bootstrap: i
                    }))
                } catch {}
        }
        subscribeBootstrapStorage() {
            typeof this.storage.watch == "function" && (this.bootstrapStorageUnwatch = this.storage.watch(q.bootstrap(this.paywallId), e => {
                if (e)
                    try {
                        let a = JSON.parse(e);
                        if (!a?.bootstrap)
                            return;
                        if (this.cachedBootstrap?.version && this.cachedBootstrap.version === a.bootstrap.version) {
                            this.cachedBootstrapAt = a.at;
                            return
                        }
                        me(a.bootstrap),
                        this.materializeExperiment(a.bootstrap).then( () => {
                            this.applyBootstrap(a.bootstrap, {
                                persist: !1
                            })
                        }
                        )
                    } catch {}
            }
            ))
        }
        getCachedBootstrap() {
            return this.cachedBootstrap
        }
        getExperimentAssignment() {
            let e = this.cachedBootstrap?.experiment;
            return e?.assigned_variant ? {
                experimentId: e.id,
                variant: e.assigned_variant
            } : null
        }
        async getPrices(e={}) {
            return (await this.bootstrap(e)).prices
        }
        getCachedPrices() {
            return this.cachedBootstrap?.prices ?? null
        }
        getCachedOffers() {
            return this.cachedBootstrap?.offers ?? null
        }
        getUserLanguage() {
            let e = typeof navigator < "u" && navigator.language ? navigator.language : null
              , a = this.cachedBootstrap?.settings.locale_default ?? null
              , i = this.cachedBootstrap ? aa(this.cachedBootstrap) : null;
            return {
                tag: i ?? e ?? a,
                applied: i,
                browserLanguage: e,
                countryLanguage: a
            }
        }
        async getUser({force: e=!1, signal: a}={}) {
            if (!e && this.cachedUser && Date.now() - this.cachedUserAt < qt)
                return this.cachedUser;
            if (this.inflightUser)
                return this.inflightUser;
            if (!this.identity?.email && this.auth) {
                if (await this.auth.ready().catch( () => {}
                ),
                this.inflightUser)
                    return this.inflightUser;
                if (!e && this.cachedUser && Date.now() - this.cachedUserAt < qt)
                    return this.cachedUser
            }
            return this.inflightUser = (async () => {
                try {
                    if (!this.identity?.email)
                        return this.applyUser(Ke),
                        Ke;
                    let i = await this.api.request(`/api/v1/paywall/${this.paywallId}/user-state`, {
                        headers: {
                            "X-User-Email": this.identity.email
                        },
                        signal: a
                    });
                    return this.applyUser(i),
                    i
                } finally {
                    this.inflightUser = null
                }
            }
            )(),
            this.inflightUser
        }
        onUserChange(e, a={}) {
            this.userListeners.add(e);
            let i = a.immediate ?? "microtask";
            if (this.cachedUser && i !== "none") {
                let n = this.cachedUser;
                if (i === "sync")
                    try {
                        e(n)
                    } catch (r) {
                        console.warn("[paywall] onUserChange initial sync threw", r)
                    }
                else
                    queueMicrotask( () => {
                        this.userListeners.has(e) && e(n)
                    }
                    )
            }
            return () => {
                this.userListeners.delete(e)
            }
        }
        getCachedUser() {
            return this.cachedUser
        }
        async getSettledUser(e={}) {
            if (this.auth && (await this.auth.ready().catch( () => {}
            ),
            this.syncIdentityFromAuth()),
            await this.userHydration.catch( () => {}
            ),
            this.cachedUser) {
                if (this.cachedUser.has_active_subscription)
                    return this.cachedUser;
                if (!await this.consumeCheckoutPending())
                    return this.cachedUser;
                try {
                    return await this.getUser({
                        force: !0,
                        signal: e.signal
                    })
                } catch {
                    return this.cachedUser
                }
            }
            try {
                return await this.getUser({
                    signal: e.signal
                })
            } catch {
                return this.cachedUser
            }
        }
        async consumeCheckoutPending() {
            let e = q.checkoutPending(this.paywallId);
            try {
                let a = await this.storage.getItem(e);
                if (!a)
                    return !1;
                Promise.resolve(this.storage.removeItem(e)).catch( () => {}
                );
                let i = JSON.parse(a);
                return typeof i?.at != "number" ? !1 : Date.now() - i.at <= Nn
            } catch {
                return !1
            }
        }
        syncIdentityFromAuth() {
            if (!this.auth)
                return;
            let e = this.auth.getCachedSession()
              , a = e ? He(e.user) : void 0;
            Vt(this.identity, a) || this.setIdentity(a)
        }
        applyUser(e) {
            let a = !Un(this.cachedUser, e);
            if (this.cachedUser = e,
            this.cachedUserAt = Date.now(),
            a) {
                this.persistUser(e);
                for (let i of this.userListeners)
                    try {
                        i(e)
                    } catch (n) {
                        console.warn("[paywall] onUserChange listener threw", n)
                    }
            }
        }
        storageKey() {
            return q.userState(this.paywallId, Gt(this.identity))
        }
        async hydrateUserFromStorage() {
            if (!this.cachedUser)
                try {
                    let e = await this.storage.getItem(this.storageKey());
                    if (!e)
                        return;
                    let a = JSON.parse(e);
                    if (!a?.user || Date.now() - a.at > ta || this.cachedUser)
                        return;
                    this.applyUser(a.user)
                } catch {}
        }
        async persistUser(e) {
            try {
                await this.storage.setItem(this.storageKey(), JSON.stringify({
                    at: Date.now(),
                    user: e
                }))
            } catch {}
        }
        async getBalances({force: e=!1, signal: a}={}) {
            let i = Date.now()
              , n = this.cachedBalances ? i - this.cachedBalancesAt : 1 / 0;
            return !e && this.cachedBalances && (n < Mn || n < qn) ? this.cachedBalances : !e && this.cachedBalances && n < Ft ? (this.fetchBalances({
                signal: a
            }).catch( () => {}
            ),
            this.cachedBalances) : this.inflightBalances ? this.inflightBalances : this.fetchBalances({
                signal: a
            })
        }
        fetchBalances({signal: e}={}) {
            return this.inflightBalances ? this.inflightBalances : (this.inflightBalances = (async () => {
                try {
                    if (!this.auth)
                        return this.applyBalances([]),
                        [];
                    let a = await this.api.request(`/api/v1/paywall/${this.paywallId}/balances`, {
                        signal: e
                    })
                      , i = Array.isArray(a.balances) ? a.balances : [];
                    return this.applyBalances(i),
                    i
                } finally {
                    this.inflightBalances = null
                }
            }
            )(),
            this.inflightBalances)
        }
        getCachedBalances() {
            return this.cachedBalances
        }
        onBalanceChange(e, a={}) {
            this.balanceListeners.add(e);
            let i = a.immediate ?? "microtask";
            if (this.cachedBalances && i !== "none") {
                let n = this.cachedBalances;
                if (i === "sync")
                    try {
                        e(n)
                    } catch (r) {
                        console.warn("[paywall] onBalanceChange initial sync threw", r)
                    }
                else
                    queueMicrotask( () => {
                        this.balanceListeners.has(e) && e(n)
                    }
                    )
            }
            return () => {
                this.balanceListeners.delete(e)
            }
        }
        decrementBalanceLocal(e) {
            if (!e) {
                this.getBalances({
                    force: !0
                });
                return
            }
            if (!this.cachedBalances)
                return;
            let a = this.cachedBalances.findIndex(n => n.type === e);
            if (a < 0 || this.cachedBalances[a].count <= 0)
                return;
            let i = this.cachedBalances.map( (n, r) => r === a ? {
                ...n,
                count: n.count - 1
            } : n);
            this.applyBalances(i)
        }
        refreshBalances() {
            return this.getBalances({
                force: !0
            })
        }
        createApiGatewayClient(e={}) {
            let a = e.onChargeSuccess
              , i = e.onQuotaExceeded;
            return new Je({
                paywallId: this.paywallId,
                apiOrigin: this.apiOrigin,
                auth: this.auth,
                userId: this.auth ? void 0 : this.identity?.userId,
                capabilities: this.capabilities,
                fetch: this.fetchImpl,
                ...e,
                onChargeSuccess: n => {
                    this.decrementBalanceLocal(n),
                    a?.(n)
                }
                ,
                onQuotaExceeded: n => {
                    this.refreshBalances(),
                    i?.(n)
                }
            })
        }
        applyBalances(e, {persist: a=!0}={}) {
            let i = !Dn(this.cachedBalances, e);
            if (this.cachedBalances = e,
            this.cachedBalancesAt = Date.now(),
            a && this.persistBalances(e),
            i)
                for (let n of this.balanceListeners)
                    try {
                        n(e)
                    } catch (r) {
                        console.warn("[paywall] onBalanceChange listener threw", r)
                    }
        }
        balancesStorageKey() {
            return q.balances(this.paywallId, Gt(this.identity))
        }
        async hydrateBalancesFromStorage() {
            if (!this.cachedBalances)
                try {
                    let e = await this.storage.getItem(this.balancesStorageKey());
                    if (!e)
                        return;
                    let a = JSON.parse(e);
                    if (!a?.balances || !Array.isArray(a.balances) || Date.now() - a.at > Ft || this.cachedBalances)
                        return;
                    this.cachedBalances = a.balances,
                    this.cachedBalancesAt = a.at;
                    for (let i of this.balanceListeners)
                        try {
                            i(a.balances)
                        } catch (n) {
                            console.warn("[paywall] onBalanceChange listener threw", n)
                        }
                } catch {}
        }
        async persistBalances(e) {
            try {
                await this.storage.setItem(this.balancesStorageKey(), JSON.stringify({
                    at: Date.now(),
                    balances: e
                }))
            } catch {}
        }
        subscribeBalancesStorage() {
            typeof this.storage.watch == "function" && (this.balancesStorageUnwatch = this.storage.watch(this.balancesStorageKey(), e => {
                if (e)
                    try {
                        let a = JSON.parse(e);
                        if (!a?.balances || !Array.isArray(a.balances) || a.at <= this.cachedBalancesAt)
                            return;
                        this.applyBalances(a.balances, {
                            persist: !1
                        })
                    } catch {}
            }
            ))
        }
        async createCheckout(e) {
            if (!this.identity?.email)
                throw new m("identity_required","createCheckout requires identity with email");
            let a = e.idempotencyKey ?? `auto:${e.priceId}`
              , i = this.inflightCheckouts.get(a);
            if (i)
                return i;
            let n = {
                "Idempotency-Key": e.idempotencyKey ?? Yt()
            };
            this.apiKey && (n["X-Api-Key"] = this.apiKey);
            let r = this.cachedBootstrap?.settings
              , o = e.successUrl ?? r?.success_redirect_url ?? void 0
              , l = e.shopUrl ?? r?.checkout_shop_url ?? void 0
              , p = this.cachedBootstrap?.prices.find(u => String(u.id) === String(e.priceId))?.local?.currency ?? void 0
              , c = this.cachedBootstrap?.experiment
              , d = this.getCachedVisitorId() ?? void 0
              , g = this.api.request(`/api/v1/paywall/${this.paywallId}/start-checkout`, {
                method: "POST",
                headers: n,
                signal: e.signal,
                body: JSON.stringify({
                    email: this.identity.email,
                    priceId: Number(e.priceId),
                    offerId: e.offerId,
                    successUrl: o,
                    errorUrl: e.errorUrl,
                    shopUrl: l,
                    productName: r?.checkout_product_name ?? void 0,
                    trial_days: e.trialDays,
                    ignoreActivePurchase: e.ignoreActivePurchase ? !0 : void 0,
                    userMeta: this.identity.userId ? {
                        userId: this.identity.userId
                    } : void 0,
                    localCurrency: p,
                    visitorId: d,
                    experimentId: c?.assigned_variant ? c.id : void 0,
                    variantKey: c?.assigned_variant ?? void 0
                })
            }).then(u => ({
                url: u.checkoutUrl,
                acquiring: u.acquiring
            })).catch(u => {
                throw u instanceof m && u.status === 409 && u.cause && typeof u.cause == "object" && u.cause.hasActivePurchase === !0 ? new m("already_purchased","You already have an active subscription",{
                    status: 409,
                    cause: u.cause
                }) : u
            }
            );
            return this.inflightCheckouts.set(a, g),
            g.finally( () => {
                this.inflightCheckouts.get(a) === g && this.inflightCheckouts.delete(a)
            }
            ).catch( () => {}
            ),
            g
        }
        async getCustomerPortalUrl(e={}) {
            if (!this.auth && !this.apiKey && !this.identity?.email)
                throw new m("identity_required","getCustomerPortalUrl requires auth, apiKey, or identity.email");
            let a = {};
            this.apiKey && (a["X-Api-Key"] = this.apiKey);
            let i = this.auth && this.auth.getCachedSession() ? {
                returnUrl: e.returnUrl
            } : {
                email: this.identity?.email,
                userMeta: this.identity?.userId ? {
                    userId: this.identity.userId
                } : void 0,
                returnUrl: e.returnUrl
            };
            return {
                url: (await this.api.request(`/api/v1/paywall/${this.paywallId}/get-customer-portal`, {
                    method: "POST",
                    headers: Object.keys(a).length ? a : void 0,
                    body: JSON.stringify(i),
                    signal: e.signal
                })).url
            }
        }
        async listPurchases(e={}) {
            let a = !!(this.identity?.email || this.identity?.userId);
            if (!this.auth && !(this.apiKey && a))
                throw new m("identity_required","listPurchases requires AuthClient (Bearer) or apiKey + identity.email/userId");
            let i = {};
            this.apiKey && (i["X-Api-Key"] = this.apiKey);
            let n = new URLSearchParams;
            this.apiKey && this.identity?.email && n.set("email", this.identity.email),
            this.apiKey && this.identity?.userId && n.set("user_id", this.identity.userId);
            let r = n.toString()
              , o = r ? `/api/v1/paywall/${this.paywallId}/user?${r}` : `/api/v1/paywall/${this.paywallId}/user`;
            return (await this.api.request(o, {
                method: "GET",
                headers: i,
                signal: e.signal
            })).purchases ?? []
        }
        async creditTokens(e) {
            return this.adjustTokens("credit", e)
        }
        async debitTokens(e) {
            return this.adjustTokens("debit", e)
        }
        async adjustTokens(e, a) {
            if (!this.apiKey)
                throw new m("apikey_required","creditTokens/debitTokens are server-SDK only \u2014 set apiKey + identity. Token balance changes must not be callable from the browser.");
            if (!this.identity?.email && !this.identity?.userId)
                throw new m("identity_required","creditTokens/debitTokens require identity.email or identity.userId");
            if (!a.type || !Number.isInteger(a.amount) || a.amount <= 0)
                throw new m("invalid_argument","type is required and amount must be a positive integer");
            let i = await this.api.request(`/api/v1/paywall/${this.paywallId}/balances`, {
                method: "POST",
                headers: {
                    "X-Api-Key": this.apiKey
                },
                body: JSON.stringify({
                    email: this.identity?.email,
                    user_id: this.identity?.userId,
                    type: a.type,
                    amount: a.amount,
                    op: e
                }),
                signal: a.signal
            });
            return {
                type: i.type,
                count: i.count
            }
        }
        async cancelSubscription(e) {
            let a = !!(this.identity?.email || this.identity?.userId);
            if (!this.auth && !(this.apiKey && a))
                throw new m("identity_required","cancelSubscription requires AuthClient (Bearer) or apiKey + identity.email/userId");
            let i = {};
            this.apiKey && (i["X-Api-Key"] = this.apiKey);
            let n = {
                subscriptionId: e.subscriptionId,
                paywallId: this.paywallId,
                cancellationReason: e.reason
            };
            return this.apiKey && this.identity?.email && (n.email = this.identity.email),
            this.apiKey && this.identity?.userId && (n.userId = this.identity.userId),
            this.api.request("/api/paywall/cancel-subscription", {
                method: "POST",
                headers: i,
                body: JSON.stringify(n),
                signal: e.signal
            })
        }
        async createSupportTicket(e) {
            let a = e.email ?? this.identity?.email ?? null
              , i = `/api/v1/paywall/${this.paywallId}/support/ticket`;
            if (e.files && e.files.length > 0) {
                let n = new FormData;
                n.set("subject", e.subject),
                n.set("content", e.content),
                a && n.set("customer_email", a);
                for (let r of e.files)
                    n.append("files", r);
                return this.api.request(i, {
                    method: "POST",
                    body: n
                })
            }
            return this.api.request(i, {
                method: "POST",
                body: JSON.stringify({
                    subject: e.subject,
                    content: e.content,
                    customer_email: a
                })
            })
        }
    }
    ;
    function He(t) {
        return {
            email: t.email,
            userId: t.id
        }
    }
    function Vt(t, e) {
        return t === e ? !0 : !t || !e ? !1 : t.email === e.email && t.userId === e.userId && t.anonymousId === e.anonymousId
    }
    function Rt(t) {
        if (!t)
            return null;
        let e = t.trim();
        if (!e)
            return null;
        try {
            return new URL(e.includes("://") ? e : `https://${e}`).origin
        } catch {
            return null
        }
    }
    function Gn(t, e) {
        let a = Rt(t);
        if (!(!a || Rt(e) === a))
            throw new m("invalid_config",`apiOrigin mismatch: SDK initialized with "${e}" but paywall is configured with custom_domain "${t}". Use the custom_domain from the platform paywall settings.`)
    }
    function Kt(t, e) {
        return {
            type: "modal",
            blocks: [{
                type: "heading",
                text: t.name || "Upgrade",
                level: 1
            }, {
                type: "price_grid",
                priceIds: e.map(a => a.id)
            }, {
                type: "cta_button",
                action: "checkout"
            }, {
                type: "guarantee_badge"
            }, {
                type: "current_session"
            }]
        }
    }
    function aa(t) {
        let e = t.locales;
        if (!e)
            return null;
        let a = [];
        if (typeof navigator < "u") {
            navigator.language && a.push(navigator.language);
            let n = navigator.language?.split("-")[0];
            n && n !== navigator.language && a.push(n)
        }
        let i = t.settings.locale_default;
        i && a.push(i);
        for (let n of a)
            if (n && Object.prototype.hasOwnProperty.call(e, n))
                return n;
        return null
    }
    function me(t) {
        let e = aa(t);
        if (!e)
            return;
        let a = t.locales?.[e];
        a && (a.layout && (t.layout = a.layout),
        a.prices && (t.prices = t.prices.map(i => {
            let n = a.prices?.[i.id];
            if (!n)
                return i;
            let r = {
                ...i
            };
            return "label" in n && (r.label = n.label ?? null),
            "description" in n && (r.description = n.description ?? null),
            r
        }
        )))
    }
    var Fn = 1500
      , Vn = 20
      , Ht = 100
      , ke = class {
        constructor(e) {
            this.buffer = [],
            this.flushTimer = null,
            this.destroyed = !1,
            this.unloadHandler = null,
            this.visibilityHandler = null,
            this.opts = e,
            this.isEnabled() && this.attachUnloadHandlers()
        }
        isEnabled() {
            return this.opts.enabled !== !1
        }
        endpoint() {
            return typeof this.opts.endpoint == "function" ? this.opts.endpoint() : this.opts.endpoint
        }
        track(e, a) {
            if (this.destroyed || !this.isEnabled() || typeof e != "string" || e.length === 0)
                return;
            let i = null;
            try {
                i = this.opts.getExperimentContext?.() ?? null
            } catch {}
            let n = i ? {
                ...i,
                ...a
            } : a;
            this.buffer.push({
                type: e,
                ts: Date.now(),
                props: n
            });
            let r = this.opts.maxBufferSize ?? Vn;
            if (this.buffer.length >= r) {
                this.flush();
                return
            }
            this.buffer.length > Ht && (this.buffer = this.buffer.slice(-Ht)),
            this.scheduleFlush()
        }
        scheduleFlush() {
            if (this.flushTimer || this.destroyed)
                return;
            let e = this.opts.flushIntervalMs ?? Fn;
            this.flushTimer = setTimeout( () => {
                this.flushTimer = null,
                this.flush()
            }
            , e)
        }
        async flush() {
            if (this.buffer.length === 0)
                return;
            this.flushTimer && (clearTimeout(this.flushTimer),
            this.flushTimer = null);
            let e = this.buffer;
            this.buffer = [];
            try {
                let a = await this.opts.getVisitorId()
                  , i = this.opts.getUserId?.() ?? null
                  , n = JSON.stringify({
                    events: e
                })
                  , r = this.opts.fetch ?? (typeof fetch < "u" ? fetch : void 0);
                if (!r)
                    return;
                await r(this.endpoint(), {
                    method: "POST",
                    credentials: "omit",
                    keepalive: !0,
                    headers: this.buildHeaders(a, i),
                    body: n
                })
            } catch {}
        }
        flushBeacon() {
            if (this.buffer.length === 0)
                return;
            let e = this.buffer;
            this.buffer = [];
            let a = this.opts.getCachedVisitorId?.() ?? null
              , i = this.opts.getUserId?.() ?? null;
            if (!a) {
                this.buffer.unshift(...e),
                this.flush();
                return
            }
            let n = JSON.stringify({
                events: e,
                visitor_id: a,
                user_id: i,
                sdk_version: be,
                paywall_id: this.opts.paywallId,
                capabilities: this.opts.capabilities?.join(",") ?? ""
            })
              , r = this.opts.sendBeacon ?? (typeof navigator < "u" && typeof navigator.sendBeacon == "function" ? navigator.sendBeacon.bind(navigator) : null);
            if (!r) {
                this.buffer.unshift(...e),
                this.flush();
                return
            }
            try {
                r(this.endpoint(), n) || (this.buffer.unshift(...e),
                this.flush())
            } catch {
                this.buffer.unshift(...e),
                this.flush()
            }
        }
        buildHeaders(e, a) {
            let i = {
                "Content-Type": "application/json",
                "X-SDK-Version": be,
                "X-Paywall-Id": this.opts.paywallId,
                "X-Visitor-Id": e
            };
            return this.opts.capabilities?.length && (i["X-SDK-Capabilities"] = this.opts.capabilities.join(",")),
            a && (i["X-User-Id"] = a),
            i
        }
        attachUnloadHandlers() {
            typeof window > "u" || (this.unloadHandler = () => this.flushBeacon(),
            this.visibilityHandler = () => {
                typeof document < "u" && document.visibilityState === "hidden" && this.flushBeacon()
            }
            ,
            window.addEventListener("pagehide", this.unloadHandler),
            typeof document < "u" && document.addEventListener("visibilitychange", this.visibilityHandler))
        }
        detachUnloadHandlers() {
            typeof window > "u" || (this.unloadHandler && window.removeEventListener("pagehide", this.unloadHandler),
            this.visibilityHandler && typeof document < "u" && document.removeEventListener("visibilitychange", this.visibilityHandler),
            this.unloadHandler = null,
            this.visibilityHandler = null)
        }
        destroy() {
            this.destroyed || (this.destroyed = !0,
            this.flushTimer && (clearTimeout(this.flushTimer),
            this.flushTimer = null),
            this.flush(),
            this.detachUnloadHandlers())
        }
    }
      , $t = 3600 * 1e3;
    function $e(t) {
        return `paywall-${t}-trial-time-first-open`
    }
    function We(t) {
        return `paywall-${t}-skip-times`
    }
    var xe = class {
        constructor(e, a, i) {
            this.storage = e,
            this.paywallId = a,
            this.config = i
        }
        async check() {
            return this.config.mode === "time" ? this.checkTime() : this.checkOpens()
        }
        async recordBlock() {
            return this.config.mode === "time" ? this.recordTime() : this.recordOpens()
        }
        async reset() {
            await this.storage.removeItem(this.config.mode === "time" ? $e(this.paywallId) : We(this.paywallId))
        }
        async checkTime() {
            let e = this.config.payload * $t
              , a = await this.storage.getItem($e(this.paywallId))
              , i = a ? Number(a) : null;
            if (!i || !Number.isFinite(i))
                return {
                    mode: "time",
                    blocked: !0,
                    startedAt: null,
                    expiresAt: null,
                    remainingMs: e,
                    totalMs: e
                };
            let n = i + e
              , r = Math.max(0, n - Date.now());
            return {
                mode: "time",
                blocked: r > 0,
                startedAt: i,
                expiresAt: n,
                remainingMs: r,
                totalMs: e
            }
        }
        async checkOpens() {
            let e = this.config.payload
              , a = await this.storage.getItem(We(this.paywallId))
              , i = a ? Number(a) : 0
              , n = Number.isFinite(i) ? i : 0
              , r = n < e
              , o = Math.max(0, e - n);
            return {
                mode: "opens",
                blocked: r,
                remainingActions: o,
                totalActions: e
            }
        }
        async recordTime() {
            let e = this.config.payload * $t
              , a = $e(this.paywallId)
              , i = await this.storage.getItem(a)
              , n = i ? Number(i) : null;
            (!n || !Number.isFinite(n)) && (n = Date.now(),
            await this.storage.setItem(a, String(n)));
            let r = n + e
              , o = Math.max(0, r - Date.now());
            return {
                mode: "time",
                blocked: o > 0,
                startedAt: n,
                expiresAt: r,
                remainingMs: o,
                totalMs: e
            }
        }
        async recordOpens() {
            let e = this.config.payload
              , a = We(this.paywallId)
              , i = await this.storage.getItem(a)
              , n = i ? Number(i) : 0
              , r = Number.isFinite(n) ? n : 0
              , o = Math.min(e, r + 1);
            await this.storage.setItem(a, String(o));
            let l = Math.max(0, e - o);
            return {
                mode: "opens",
                blocked: o < e,
                remainingActions: l,
                totalActions: e
            }
        }
    }
      , Wt = !1
      , Ze = class {
        constructor(e, a, i) {
            Wt || (Wt = !0,
            console.warn('[paywall] trial.storage="server" is not implemented yet \u2014 falling back to client storage. State lives in localStorage; users can reset trial by clearing site data.')),
            this.fallback = new xe(e,a,i)
        }
        check() {
            return this.fallback.check()
        }
        recordBlock() {
            return this.fallback.recordBlock()
        }
        reset() {
            return this.fallback.reset()
        }
    }
    ;
    function ia(t, e, a) {
        return a.storage === "server" ? new Ze(t,e,a) : new xe(t,e,a)
    }
    var Jt = 32768;
    function na(t) {
        let e = "";
        for (let a = 0; a < t.length; a += Jt) {
            let i = t.subarray(a, a + Jt);
            e += String.fromCharCode.apply(null, i)
        }
        return btoa(e)
    }
    var et = 5
      , tt = 5 * 1024 * 1024;
    var Be, j, la, Rn, Y, ra, ca, ua, at, Ie, ue, pa, st, it, nt, da, je = {}, Ae = [], Kn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Te = Array.isArray;
    function Z(t, e) {
        for (var a in e)
            t[a] = e[a];
        return t
    }
    function ot(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
    }
    function Ee(t, e, a) {
        var i, n, r, o = {};
        for (r in e)
            r == "key" ? i = e[r] : r == "ref" ? n = e[r] : o[r] = e[r];
        if (arguments.length > 2 && (o.children = arguments.length > 3 ? Be.call(arguments, 2) : a),
        typeof t == "function" && t.defaultProps != null)
            for (r in t.defaultProps)
                o[r] === void 0 && (o[r] = t.defaultProps[r]);
        return ze(t, o, i, n, null)
    }
    function ze(t, e, a, i, n) {
        var r = {
            type: t,
            props: e,
            key: a,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __c: null,
            constructor: void 0,
            __v: n ?? ++la,
            __i: -1,
            __u: 0
        };
        return n == null && j.vnode != null && j.vnode(r),
        r
    }
    function J(t) {
        return t.children
    }
    function Ce(t, e) {
        this.props = t,
        this.context = e
    }
    function te(t, e) {
        if (e == null)
            return t.__ ? te(t.__, t.__i + 1) : null;
        for (var a; e < t.__k.length; e++)
            if ((a = t.__k[e]) != null && a.__e != null)
                return a.__e;
        return typeof t.type == "function" ? te(t) : null
    }
    function Hn(t) {
        if (t.__P && t.__d) {
            var e = t.__v
              , a = e.__e
              , i = []
              , n = []
              , r = Z({}, e);
            r.__v = e.__v + 1,
            j.vnode && j.vnode(r),
            lt(t.__P, r, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [a] : null, i, a ?? te(e), !!(32 & e.__u), n),
            r.__v = e.__v,
            r.__.__k[r.__i] = r,
            fa(i, r, n),
            e.__e = e.__ = null,
            r.__e != a && ha(r)
        }
    }
    function ha(t) {
        if ((t = t.__) != null && t.__c != null)
            return t.__e = t.__c.base = null,
            t.__k.some(function(e) {
                if (e != null && e.__e != null)
                    return t.__e = t.__c.base = e.__e
            }),
            ha(t)
    }
    function rt(t) {
        (!t.__d && (t.__d = !0) && Y.push(t) && !Pe.__r++ || ra != j.debounceRendering) && ((ra = j.debounceRendering) || ca)(Pe)
    }
    function Pe() {
        try {
            for (var t, e = 1; Y.length; )
                Y.length > e && Y.sort(ua),
                t = Y.shift(),
                e = Y.length,
                Hn(t)
        } finally {
            Y.length = Pe.__r = 0
        }
    }
    function ga(t, e, a, i, n, r, o, l, p, c, d) {
        var g, u, h, f, w, y, v = i && i.__k || Ae, _ = e.length;
        for (p = $n(a, e, v, p, _),
        g = 0; g < _; g++)
            (h = a.__k[g]) != null && (u = h.__i != -1 && v[h.__i] || je,
            h.__i = g,
            y = lt(t, h, u, n, r, o, l, p, c, d),
            f = h.__e,
            h.ref && u.ref != h.ref && (u.ref && ct(u.ref, null, h),
            d.push(h.ref, h.__c || f, h)),
            w == null && f != null && (w = f),
            4 & h.__u ? (p = _a(h, p, t),
            u.__e && (u.__e = null)) : typeof h.type == "function" && y !== void 0 ? p = y : f && (p = f.nextSibling),
            h.__u &= -7);
        return a.__e = w,
        p
    }
    function $n(t, e, a, i, n) {
        var r, o, l, p, c, d = a.length, g = d, u = 0;
        for (t.__k = new Array(n),
        r = 0; r < n; r++)
            (o = e[r]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = t.__k[r] = ze(null, o, null, null, null) : Te(o) ? o = t.__k[r] = ze(J, {
                children: o
            }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = t.__k[r] = ze(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : t.__k[r] = o,
            p = r + u,
            o.__ = t,
            o.__b = t.__b + 1,
            l = null,
            (c = o.__i = Wn(o, a, p, g)) != -1 && (g--,
            (l = a[c]) && (l.__u |= 2)),
            l == null || l.__v == null ? (c == -1 && (n > d ? u-- : n < d && u++),
            typeof o.type != "function" && (o.__u |= 4)) : c != p && (c == p - 1 ? u-- : c == p + 1 ? u++ : (c > p ? u-- : u++,
            o.__u |= 4))) : t.__k[r] = null;
        if (g)
            for (r = 0; r < d; r++)
                (l = a[r]) != null && (2 & l.__u) == 0 && (l.__e == i && (i = te(l)),
                ba(l, l));
        return i
    }
    function _a(t, e, a) {
        var i, n;
        if (typeof t.type == "function") {
            for (i = t.__k,
            n = 0; i && n < i.length; n++)
                i[n] && (i[n].__ = t,
                e = _a(i[n], e, a));
            return e
        }
        t.__e != e && (e && t.type && !e.parentNode && (e = te(t)),
        e = a.insertBefore(t.__e, e || null));
        do
            e = e && e.nextSibling;
        while (e != null && e.nodeType == 8);
        return e
    }
    function Wn(t, e, a, i) {
        var n, r, o, l = t.key, p = t.type, c = e[a], d = c != null && (2 & c.__u) == 0;
        if (c === null && l == null || d && l == c.key && p == c.type)
            return a;
        if (i > (d ? 1 : 0)) {
            for (n = a - 1,
            r = a + 1; n >= 0 || r < e.length; )
                if ((c = e[o = n >= 0 ? n-- : r++]) != null && (2 & c.__u) == 0 && l == c.key && p == c.type)
                    return o
        }
        return -1
    }
    function sa(t, e, a) {
        e[0] == "-" ? t.setProperty(e, a ?? "") : t[e] = a == null ? "" : typeof a != "number" || Kn.test(e) ? a : a + "px"
    }
    function Se(t, e, a, i, n) {
        var r, o;
        e: if (e == "style")
            if (typeof a == "string")
                t.style.cssText = a;
            else {
                if (typeof i == "string" && (t.style.cssText = i = ""),
                i)
                    for (e in i)
                        a && e in a || sa(t.style, e, "");
                if (a)
                    for (e in a)
                        i && a[e] == i[e] || sa(t.style, e, a[e])
            }
        else if (e[0] == "o" && e[1] == "n")
            r = e != (e = e.replace(pa, "$1")),
            o = e.toLowerCase(),
            e = o in t || e == "onFocusOut" || e == "onFocusIn" ? o.slice(2) : e.slice(2),
            t.l || (t.l = {}),
            t.l[e + r] = a,
            a ? i ? a[ue] = i[ue] : (a[ue] = st,
            t.addEventListener(e, r ? nt : it, r)) : t.removeEventListener(e, r ? nt : it, r);
        else {
            if (n == "http://www.w3.org/2000/svg")
                e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t)
                try {
                    t[e] = a ?? "";
                    break e
                } catch {}
            typeof a == "function" || (a == null || a === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && a == 1 ? "" : a))
        }
    }
    function oa(t) {
        return function(e) {
            if (this.l) {
                var a = this.l[e.type + t];
                if (e[Ie] == null)
                    e[Ie] = st++;
                else if (e[Ie] < a[ue])
                    return;
                return a(j.event ? j.event(e) : e)
            }
        }
    }
    function lt(t, e, a, i, n, r, o, l, p, c) {
        var d, g, u, h, f, w, y, v, _, b, S, L, G, x, C, U, A = e.type;
        if (e.constructor !== void 0)
            return null;
        128 & a.__u && (p = !!(32 & a.__u),
        r = [l = e.__e = a.__e]),
        (d = j.__b) && d(e);
        e: if (typeof A == "function") {
            g = o.length;
            try {
                if (_ = e.props,
                b = A.prototype && A.prototype.render,
                S = (d = A.contextType) && i[d.__c],
                L = d ? S ? S.props.value : d.__ : i,
                a.__c ? v = (u = e.__c = a.__c).__ = u.__E : (b ? e.__c = u = new A(_,L) : (e.__c = u = new Ce(_,L),
                u.constructor = A,
                u.render = Zn),
                S && S.sub(u),
                u.state || (u.state = {}),
                u.__n = i,
                h = u.__d = !0,
                u.__h = [],
                u._sb = []),
                b && u.__s == null && (u.__s = u.state),
                b && A.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Z({}, u.__s)),
                Z(u.__s, A.getDerivedStateFromProps(_, u.__s))),
                f = u.props,
                w = u.state,
                u.__v = e,
                h)
                    b && A.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(),
                    b && u.componentDidMount != null && u.__h.push(u.componentDidMount);
                else {
                    if (b && A.getDerivedStateFromProps == null && _ !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(_, L),
                    e.__v == a.__v || !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(_, u.__s, L) === !1) {
                        e.__v != a.__v && (u.props = _,
                        u.state = u.__s,
                        u.__d = !1),
                        e.__e = a.__e,
                        e.__k = a.__k,
                        e.__k.some(function(O) {
                            O && (O.__ = e)
                        }),
                        Ae.push.apply(u.__h, u._sb),
                        u._sb = [],
                        u.__h.length && o.push(u),
                        l = te(a);
                        break e
                    }
                    u.componentWillUpdate != null && u.componentWillUpdate(_, u.__s, L),
                    b && u.componentDidUpdate != null && u.__h.push(function() {
                        u.componentDidUpdate(f, w, y)
                    })
                }
                if (u.context = L,
                u.props = _,
                u.__P = t,
                u.__e = !1,
                G = j.__r,
                x = 0,
                b)
                    u.state = u.__s,
                    u.__d = !1,
                    G && G(e),
                    d = u.render(u.props, u.state, u.context),
                    Ae.push.apply(u.__h, u._sb),
                    u._sb = [];
                else
                    do
                        u.__d = !1,
                        G && G(e),
                        d = u.render(u.props, u.state, u.context),
                        u.state = u.__s;
                    while (u.__d && ++x < 25);
                u.state = u.__s,
                u.getChildContext != null && (i = Z(Z({}, i), u.getChildContext())),
                b && !h && u.getSnapshotBeforeUpdate != null && (y = u.getSnapshotBeforeUpdate(f, w)),
                C = d != null && d.type === J && d.key == null ? ya(d.props.children) : d,
                l = ga(t, Te(C) ? C : [C], e, a, i, n, r, o, l, p, c),
                u.base = e.__e,
                e.__u &= -161,
                u.__h.length && o.push(u),
                v && (u.__E = u.__ = null)
            } catch (O) {
                if (o.length = g,
                e.__v = null,
                p || r != null) {
                    if (O.then) {
                        for (e.__u |= p ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; )
                            l = l.nextSibling;
                        r != null && (r[r.indexOf(l)] = null),
                        e.__e = l
                    } else if (r != null)
                        for (U = r.length; U--; )
                            ot(r[U])
                } else
                    e.__e = a.__e;
                e.__k == null && (e.__k = a.__k || []),
                O.then || ma(e),
                j.__e(O, e, a)
            }
        } else
            r == null && e.__v == a.__v ? (e.__k = a.__k,
            e.__e = a.__e) : l = e.__e = Jn(a.__e, e, a, i, n, r, o, p, c);
        return (d = j.diffed) && d(e),
        128 & e.__u ? void 0 : l
    }
    function ma(t) {
        t && (t.__c && (t.__c.__e = !0),
        t.__k && t.__k.some(ma))
    }
    function fa(t, e, a) {
        for (var i = 0; i < a.length; i++)
            ct(a[i], a[++i], a[++i]);
        j.__c && j.__c(e, t),
        t.some(function(n) {
            try {
                t = n.__h,
                n.__h = [],
                t.some(function(r) {
                    r.call(n)
                })
            } catch (r) {
                j.__e(r, n.__v)
            }
        })
    }
    function ya(t) {
        return typeof t != "object" || t == null || t.__b > 0 ? t : Te(t) ? t.map(ya) : t.constructor !== void 0 ? null : Z({}, t)
    }
    function Jn(t, e, a, i, n, r, o, l, p) {
        var c, d, g, u, h, f, w, y = a.props || je, v = e.props, _ = e.type;
        if (_ == "svg" ? n = "http://www.w3.org/2000/svg" : _ == "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"),
        r != null) {
            for (c = 0; c < r.length; c++)
                if ((h = r[c]) && "setAttribute" in h == !!_ && (_ ? h.localName == _ : h.nodeType == 3)) {
                    t = h,
                    r[c] = null;
                    break
                }
        }
        if (t == null) {
            if (_ == null)
                return document.createTextNode(v);
            t = document.createElementNS(n, _, v.is && v),
            l && (j.__m && j.__m(e, r),
            l = !1),
            r = null
        }
        if (_ == null)
            y === v || l && t.data == v || (t.data = v);
        else {
            if (r = _ == "textarea" && v.defaultValue != null ? null : r && Be.call(t.childNodes),
            !l && r != null)
                for (y = {},
                c = 0; c < t.attributes.length; c++)
                    y[(h = t.attributes[c]).name] = h.value;
            for (c in y)
                h = y[c],
                c == "dangerouslySetInnerHTML" ? g = h : c == "children" || c in v || c == "value" && "defaultValue" in v || c == "checked" && "defaultChecked" in v || Se(t, c, null, h, n);
            for (c in v)
                h = v[c],
                c == "children" ? u = h : c == "dangerouslySetInnerHTML" ? d = h : c == "value" ? f = h : c == "checked" ? w = h : l && typeof h != "function" || y[c] === h || Se(t, c, h, y[c], n);
            if (d)
                l || g && (d.__html == g.__html || d.__html == t.innerHTML) || (t.innerHTML = d.__html),
                e.__k = [];
            else if (g && (t.innerHTML = ""),
            ga(e.type == "template" ? t.content : t, Te(u) ? u : [u], e, a, i, _ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, o, r ? r[0] : a.__k && te(a, 0), l, p),
            r != null)
                for (c = r.length; c--; )
                    ot(r[c]);
            l && _ != "textarea" || (c = "value",
            _ == "progress" && f == null ? t.removeAttribute("value") : f != null && (f !== t[c] || _ == "progress" && !f || _ == "option" && f != y[c]) && Se(t, c, f, y[c], n),
            c = "checked",
            w != null && w != t[c] && Se(t, c, w, y[c], n))
        }
        return t
    }
    function ct(t, e, a) {
        try {
            if (typeof t == "function") {
                var i = typeof t.__u == "function";
                i && t.__u(),
                i && e == null || (t.__u = t(e))
            } else
                t.current = e
        } catch (n) {
            j.__e(n, a)
        }
    }
    function ba(t, e, a) {
        var i, n;
        if (j.unmount && j.unmount(t),
        (i = t.ref) && (i.current && i.current != t.__e || ct(i, null, e)),
        (i = t.__c) != null) {
            if (i.componentWillUnmount)
                try {
                    i.componentWillUnmount()
                } catch (r) {
                    j.__e(r, e)
                }
            i.base = i.__P = i.__n = null
        }
        if (i = t.__k)
            for (n = 0; n < i.length; n++)
                i[n] && ba(i[n], e, a || typeof t.type != "function");
        a || ot(t.__e),
        t.__c = t.__ = t.__e = void 0
    }
    function Zn(t, e, a) {
        return this.constructor(t, a)
    }
    function Le(t, e, a) {
        var i, n, r, o;
        e == document && (e = document.documentElement),
        j.__ && j.__(t, e),
        n = (i = typeof a == "function") ? null : a && a.__k || e.__k,
        r = [],
        o = [],
        lt(e, t = (!i && a || e).__k = Ee(J, null, [t]), n || je, je, e.namespaceURI, !i && a ? [a] : n ? null : e.firstChild ? Be.call(e.childNodes) : null, r, !i && a ? a : n ? n.__e : e.firstChild, i, o),
        fa(r, t, o),
        t.props.children = null
    }
    function wa(t) {
        function e(a) {
            var i, n;
            return this.getChildContext || (i = new Set,
            (n = {})[e.__c] = this,
            this.getChildContext = function() {
                return n
            }
            ,
            this.componentWillUnmount = function() {
                i = null
            }
            ,
            this.shouldComponentUpdate = function(r) {
                this.props.value != r.value && i.forEach(function(o) {
                    o.__e = !0,
                    rt(o)
                })
            }
            ,
            this.sub = function(r) {
                i.add(r);
                var o = r.componentWillUnmount;
                r.componentWillUnmount = function() {
                    i && i.delete(r),
                    o && o.call(r)
                }
            }
            ),
            a.children
        }
        return e.__c = "__cC" + da++,
        e.__ = t,
        e.Provider = e.__l = (e.Consumer = function(a, i) {
            return a.children(i)
        }
        ).contextType = e,
        e
    }
    Be = Ae.slice,
    j = {
        __e: function(t, e, a, i) {
            for (var n, r, o; e = e.__; )
                if ((n = e.__c) && !n.__)
                    try {
                        if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(t)),
                        o = n.__d),
                        n.componentDidCatch != null && (n.componentDidCatch(t, i || {}),
                        o = n.__d),
                        o)
                            return n.__E = n
                    } catch (l) {
                        t = l
                    }
            throw t
        }
    },
    la = 0,
    Rn = function(t) {
        return t != null && t.constructor === void 0
    }
    ,
    Ce.prototype.setState = function(t, e) {
        var a;
        a = this.__s != null && this.__s != this.state ? this.__s : this.__s = Z({}, this.state),
        typeof t == "function" && (t = t(Z({}, a), this.props)),
        t && Z(a, t),
        t != null && this.__v && (e && this._sb.push(e),
        rt(this))
    }
    ,
    Ce.prototype.forceUpdate = function(t) {
        this.__v && (this.__e = !0,
        t && this.__h.push(t),
        rt(this))
    }
    ,
    Ce.prototype.render = J,
    Y = [],
    ca = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    ua = function(t, e) {
        return t.__v.__b - e.__v.__b
    }
    ,
    Pe.__r = 0,
    at = Math.random().toString(8),
    Ie = "__d" + at,
    ue = "__a" + at,
    pa = /(PointerCapture)$|Capture$/i,
    st = 0,
    it = oa(!1),
    nt = oa(!0),
    da = 0;
    var Yn = 0;
    function s(t, e, a, i, n, r) {
        e || (e = {});
        var o, l, p = e;
        if ("ref" in p)
            for (l in p = {},
            e)
                l == "ref" ? o = e[l] : p[l] = e[l];
        var c = {
            type: t,
            props: p,
            key: a,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __c: null,
            constructor: void 0,
            __v: --Yn,
            __i: -1,
            __u: 0,
            __source: n,
            __self: r
        };
        if (typeof t == "function" && (o = t.defaultProps))
            for (l in o)
                p[l] === void 0 && (p[l] = o[l]);
        return j.vnode && j.vnode(c),
        c
    }
    var ae, M, ut, va, Ue = 0, Aa = [], D = j, ka = D.__b, xa = D.__r, Sa = D.diffed, Ia = D.__c, za = D.unmount, Ca = D.__;
    function pe(t, e) {
        D.__h && D.__h(M, t, Ue || e),
        Ue = 0;
        var a = M.__H || (M.__H = {
            __: [],
            __h: []
        });
        return t >= a.__.length && a.__.push({}),
        a.__[t]
    }
    function I(t) {
        return Ue = 1,
        Xn(Ta, t)
    }
    function Xn(t, e, a) {
        var i = pe(ae++, 2);
        if (i.t = t,
        !i.__c && (i.__ = [a ? a(e) : Ta(void 0, e), function(l) {
            var p = i.__N ? i.__N[0] : i.__[0]
              , c = i.t(p, l);
            p !== c && (i.__N = [c, i.__[1]],
            i.__c.setState({}))
        }
        ],
        i.__c = M,
        !M.__f)) {
            var n = function(l, p, c) {
                if (!i.__c.__H)
                    return !0;
                var d = !1
                  , g = i.__c.props !== l;
                if (i.__c.__H.__.some(function(h) {
                    if (h.__N) {
                        d = !0;
                        var f = h.__[0];
                        h.__ = h.__N,
                        h.__N = void 0,
                        f !== h.__[0] && (g = !0)
                    }
                }),
                r) {
                    var u = r.call(this, l, p, c);
                    return d ? u || g : u
                }
                return !d || g
            };
            M.__f = !0;
            var r = M.shouldComponentUpdate
              , o = M.componentWillUpdate;
            M.componentWillUpdate = function(l, p, c) {
                if (this.__e) {
                    var d = r;
                    r = void 0,
                    n(l, p, c),
                    r = d
                }
                o && o.call(this, l, p, c)
            }
            ,
            M.shouldComponentUpdate = n
        }
        return i.__N || i.__
    }
    function R(t, e) {
        var a = pe(ae++, 3);
        !D.__s && dt(a.__H, e) && (a.__ = t,
        a.u = e,
        M.__H.__h.push(a))
    }
    function Pa(t, e) {
        var a = pe(ae++, 4);
        !D.__s && dt(a.__H, e) && (a.__ = t,
        a.u = e,
        M.__h.push(a))
    }
    function $(t) {
        return Ue = 5,
        Me(function() {
            return {
                current: t
            }
        }, [])
    }
    function Me(t, e) {
        var a = pe(ae++, 7);
        return dt(a.__H, e) && (a.__ = t(),
        a.__H = e,
        a.__h = t),
        a.__
    }
    function Ba(t) {
        var e = M.context[t.__c]
          , a = pe(ae++, 9);
        return a.c = t,
        e ? (a.__ == null && (a.__ = !0,
        e.sub(M)),
        e.props.value) : t.__
    }
    function Qn() {
        for (var t; t = Aa.shift(); ) {
            var e = t.__H;
            if (t.__P && e)
                try {
                    e.__h.some(Oe),
                    e.__h.some(pt),
                    e.__h = []
                } catch (a) {
                    e.__h = [],
                    D.__e(a, t.__v)
                }
        }
    }
    D.__b = function(t) {
        M = null,
        ka && ka(t)
    }
    ,
    D.__ = function(t, e) {
        t && e.__k && e.__k.__m && (t.__m = e.__k.__m),
        Ca && Ca(t, e)
    }
    ,
    D.__r = function(t) {
        xa && xa(t),
        ae = 0;
        var e = (M = t.__c).__H;
        e && (ut === M ? (e.__h = [],
        M.__h = [],
        e.__.some(function(a) {
            a.__N && (a.__ = a.__N),
            a.u = a.__N = void 0
        })) : (e.__h.some(Oe),
        e.__h.some(pt),
        e.__h = [],
        ae = 0)),
        ut = M
    }
    ,
    D.diffed = function(t) {
        Sa && Sa(t);
        var e = t.__c;
        e && e.__H && (e.__H.__h.length && (Aa.push(e) !== 1 && va === D.requestAnimationFrame || ((va = D.requestAnimationFrame) || er)(Qn)),
        e.__H.__.some(function(a) {
            a.u && (a.__H = a.u,
            a.u = void 0)
        })),
        ut = M = null
    }
    ,
    D.__c = function(t, e) {
        e.some(function(a) {
            try {
                a.__h.some(Oe),
                a.__h = a.__h.filter(function(i) {
                    return !i.__ || pt(i)
                })
            } catch (i) {
                e.some(function(n) {
                    n.__h && (n.__h = [])
                }),
                e = [],
                D.__e(i, a.__v)
            }
        }),
        Ia && Ia(t, e)
    }
    ,
    D.unmount = function(t) {
        za && za(t);
        var e, a = t.__c;
        a && a.__H && (a.__H.__.some(function(i) {
            try {
                Oe(i)
            } catch (n) {
                e = n
            }
        }),
        a.__H = void 0,
        e && D.__e(e, a.__v))
    }
    ;
    var ja = typeof requestAnimationFrame == "function";
    function er(t) {
        var e, a = function() {
            clearTimeout(i),
            ja && cancelAnimationFrame(e),
            setTimeout(t)
        }, i = setTimeout(a, 35);
        ja && (e = requestAnimationFrame(a))
    }
    function Oe(t) {
        var e = M
          , a = t.__c;
        typeof a == "function" && (t.__c = void 0,
        a()),
        M = e
    }
    function pt(t) {
        var e = M;
        t.__c = t.__(),
        M = e
    }
    function dt(t, e) {
        return !t || t.length !== e.length || e.some(function(a, i) {
            return a !== t[i]
        })
    }
    function Ta(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    var Ne = class {
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
            let a = e.onMessage(n => this.handleMessage(n))
              , i = e.onDisconnect( () => this.handleDisconnect());
            return this.channelDisposers = [a, i],
            this.request("handshake", {
                protocolVersion: _e,
                clientId: this.clientId
            }).then(n => {
                n.protocolVersion !== _e && console.warn(`[sdk-extension] protocol version mismatch: client=${_e}, offscreen=${n.protocolVersion}. Update host's @monetize.software/sdk-extension.`)
            }
            ).catch( () => {}
            ),
            e
        }
        handleMessage(e) {
            if (tr(e)) {
                if (e.type === "response") {
                    let a = this.pending.get(e.id);
                    if (!a)
                        return;
                    this.pending.delete(e.id),
                    a.signal?.removeEventListener("abort", a.abortListener),
                    e.ok ? a.resolve(e.result) : a.reject(Et(e.error));
                    return
                }
                if (e.type === "event") {
                    let a = this.listeners.get(e.kind);
                    if (!a)
                        return;
                    for (let i of [...a])
                        try {
                            i(e.payload)
                        } catch (n) {
                            console.error("[sdk-extension] event handler threw", n)
                        }
                }
            }
        }
        handleDisconnect() {
            for (let a of this.channelDisposers)
                a();
            this.channelDisposers = [],
            this.channel = null;
            let e = Array.from(this.pending.values());
            this.pending.clear();
            for (let a of e)
                a.signal?.removeEventListener("abort", a.abortListener),
                a.reject(new ht)
        }
        request(e, a, i={}) {
            if (this.destroyed)
                return Promise.reject(new Error("TransportClient destroyed"));
            if (i.signal?.aborted)
                return Promise.reject(new DOMException("Aborted","AbortError"));
            let n = this.ensureChannel()
              , r = `r${++this.nextId}`;
            return new Promise( (o, l) => {
                let p = {
                    resolve: o,
                    reject: l,
                    signal: i.signal
                };
                i.signal && (p.abortListener = () => {
                    if (this.pending.delete(r)) {
                        l(new DOMException("Aborted","AbortError"));
                        try {
                            n.send({
                                type: "cancel",
                                id: r
                            })
                        } catch {}
                    }
                }
                ,
                i.signal.addEventListener("abort", p.abortListener)),
                this.pending.set(r, p);
                let c = {
                    type: "request",
                    id: r,
                    kind: e,
                    params: a
                };
                try {
                    n.send(c)
                } catch (d) {
                    this.pending.delete(r),
                    i.signal?.removeEventListener("abort", p.abortListener),
                    l(d)
                }
            }
            )
        }
        on(e, a) {
            let i = this.listeners.get(e);
            i || (i = new Set,
            this.listeners.set(e, i));
            let n = a;
            return i.add(n),
            this.ensureChannel(),
            () => {
                i.delete(n)
            }
        }
        destroy() {
            if (this.destroyed)
                return;
            this.destroyed = !0;
            for (let a of this.channelDisposers)
                a();
            this.channelDisposers = [],
            this.listeners.clear();
            let e = Array.from(this.pending.values());
            this.pending.clear();
            for (let a of e)
                a.signal?.removeEventListener("abort", a.abortListener),
                a.reject(new Error("TransportClient destroyed"));
            this.channel?.close(),
            this.channel = null
        }
    }
      , ht = class extends Error {
        constructor() {
            super("Transport channel disconnected mid-request"),
            this.code = "transport_disconnected",
            this.name = "TransportDisconnectedError"
        }
    }
    ;
    function tr(t) {
        if (typeof t != "object" || t === null)
            return !1;
        let e = t.type;
        return e === "request" || e === "response" || e === "event"
    }
    function Ar(t) {
        return `pw-offer-${t}-start`
    }
    function Ki(t, e) {
        return !t || t.length === 0 ? null : t.find(i => i.price_id != null && String(i.price_id) === String(e) && (i.discount_percent ?? 0) > 0) || (t.find(i => i.price_id == null && (i.discount_percent ?? 0) > 0) ?? null)
    }
    function oe(t, e, a={}) {
        let i = Ki(t, e);
        return i && Hi(i, a) ? i : null
    }
    function Hi(t, e={}) {
        let a = t.discount_percent ?? 0;
        if (a <= 0)
            return null;
        let i = e.now ?? Date.now()
          , n = Pr(t, e.readStart)
          , r = Br(t, n)
          , o = n !== null ? Math.max(0, n - i) : null;
        return n !== null && n <= i ? null : {
            offer: t,
            discountPercent: a,
            remainingMs: o,
            totalMs: r,
            expiresAt: n
        }
    }
    function Pr(t, e) {
        if (t.expires_at) {
            let a = Date.parse(t.expires_at);
            return Number.isFinite(a) ? a : null
        }
        if (t.duration_minutes && t.duration_minutes > 0 && e) {
            let a = e(t.id);
            if (!a)
                return null;
            let i = Date.parse(a);
            return Number.isFinite(i) ? i + t.duration_minutes * 6e4 : null
        }
        return null
    }
    function Br(t, e) {
        return t.duration_minutes && t.duration_minutes > 0 ? t.duration_minutes * 6e4 : e !== null ? e - Date.now() : null
    }
    function ie(t) {
        if (typeof window > "u")
            return null;
        try {
            return window.localStorage.getItem(Ar(t))
        } catch {
            return null
        }
    }
    var $i = '/*! tailwindcss v4.3.0 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-600:oklch(57.7% .245 27.325);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-500:oklch(69.6% .17 162.48);--color-emerald-700:oklch(50.8% .118 165.612);--color-slate-950:oklch(12.9% .042 264.695);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-normal:0em;--tracking-wide:.025em;--tracking-wider:.05em;--leading-tight:1.25;--leading-snug:1.375;--leading-relaxed:1.625;--radius-md:.375rem;--radius-xl:.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--animate-spin:spin 1s linear infinite;--animate-ping:ping 1s cubic-bezier(0, 0, .2, 1) infinite;--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:host{all:initial;color-scheme:light;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizelegibility;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}*,:before,:after{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box}button{cursor:pointer;font-family:inherit}button:disabled{cursor:not-allowed}[role=button],[role=radio]{cursor:pointer}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing) * 0)}.-top-2{top:calc(var(--spacing) * -2)}.-top-\\[9px\\]{top:-9px}.-top-\\[10px\\]{top:-10px}.top-1\\/2{top:50%}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.-right-\\[6px\\]{right:-6px}.right-3{right:calc(var(--spacing) * 3)}.right-4{right:calc(var(--spacing) * 4)}.left-1\\/2{left:50%}.z-10{z-index:10}.z-\\[1\\]{z-index:1}.z-\\[2147483647\\]{z-index:2147483647}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.-mt-3{margin-top:calc(var(--spacing) * -3)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-1\\.5{margin-top:calc(var(--spacing) * 1.5)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-2\\.5{margin-top:calc(var(--spacing) * 2.5)}.mt-3{margin-top:calc(var(--spacing) * 3)}.-mb-2{margin-bottom:calc(var(--spacing) * -2)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.-ml-1{margin-left:calc(var(--spacing) * -1)}.ml-2{margin-left:calc(var(--spacing) * 2)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.h-1{height:calc(var(--spacing) * 1)}.h-4{height:calc(var(--spacing) * 4)}.h-6{height:calc(var(--spacing) * 6)}.h-6\\.5{height:calc(var(--spacing) * 6.5)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-14{height:calc(var(--spacing) * 14)}.h-\\[22px\\]{height:22px}.h-full{height:100%}.h-px{height:1px}.max-h-\\[calc\\(100dvh-1rem\\)\\]{max-height:calc(100dvh - 1rem)}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-12{min-height:calc(var(--spacing) * 12)}.min-h-\\[2\\.4em\\]{min-height:2.4em}.min-h-\\[120px\\]{min-height:120px}.w-1{width:calc(var(--spacing) * 1)}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-6\\.5{width:calc(var(--spacing) * 6.5)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-11{width:calc(var(--spacing) * 11)}.w-14{width:calc(var(--spacing) * 14)}.w-full{width:100%}.max-w-\\[20rem\\]{max-width:20rem}.max-w-\\[22rem\\]{max-width:22rem}.max-w-\\[75\\%\\]{max-width:75%}.max-w-\\[320px\\]{max-width:320px}.max-w-\\[360px\\]{max-width:360px}.max-w-\\[400px\\]{max-width:400px}.flex-1{flex:1}.flex-shrink{flex-shrink:1}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-\\[pw-fade-in_180ms_ease-out\\]{animation:.18s ease-out pw-fade-in}.animate-\\[pw-scale-in_220ms_cubic-bezier\\(0\\.16\\,1\\,0\\.3\\,1\\)\\]{animation:.22s cubic-bezier(.16,1,.3,1) pw-scale-in}.animate-ping{animation:var(--animate-ping)}.animate-spin{animation:var(--animate-spin)}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.flex-row-reverse{flex-direction:row-reverse}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-x-1\\.5{column-gap:calc(var(--spacing) * 1.5)}.gap-x-2{column-gap:calc(var(--spacing) * 2)}.gap-y-1{row-gap:calc(var(--spacing) * 1)}.self-center{align-self:center}.self-start{align-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-\\[9px\\]{border-radius:9px}.rounded-\\[11px\\]{border-radius:11px}.rounded-full{border-radius:3.40282e38px}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-t-xl{border-top-left-radius:var(--radius-xl);border-top-right-radius:var(--radius-xl)}.rounded-tl-xl{border-top-left-radius:var(--radius-xl)}.rounded-tr-xl{border-top-right-radius:var(--radius-xl)}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-\\[2\\.5px\\]{border-style:var(--tw-border-style);border-width:2.5px}.border-\\[3px\\]{border-style:var(--tw-border-style);border-width:3px}.border-\\[5px\\]{border-style:var(--tw-border-style);border-width:5px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b,.border-b-1{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-\\[var\\(--pw-accent\\)\\]{border-color:var(--pw-accent)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-white{border-color:var(--color-white)}.border-white\\/40{border-color:#fff6}@supports (color:color-mix(in lab,red,red)){.border-white\\/40{border-color:color-mix(in oklab,var(--color-white) 40%,transparent)}}.border-t-\\[var\\(--pw-accent\\)\\]{border-top-color:var(--pw-accent)}.border-t-gray-700{border-top-color:var(--color-gray-700)}.border-t-white{border-top-color:var(--color-white)}.bg-\\[color-mix\\(in_srgb\\,var\\(--pw-accent\\)_6\\%\\,white\\)\\]{background-color:var(--pw-accent)}@supports (color:color-mix(in lab,red,red)){.bg-\\[color-mix\\(in_srgb\\,var\\(--pw-accent\\)_6\\%\\,white\\)\\]{background-color:color-mix(in srgb,var(--pw-accent) 6%,white)}}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black) 20%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-50\\/60{background-color:#f9fafb99}@supports (color:color-mix(in lab,red,red)){.bg-gray-50\\/60{background-color:color-mix(in oklab,var(--color-gray-50) 60%,transparent)}}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-red-50{background-color:var(--color-red-50)}.bg-slate-950\\/50{background-color:#02061880}@supports (color:color-mix(in lab,red,red)){.bg-slate-950\\/50{background-color:color-mix(in oklab,var(--color-slate-950) 50%,transparent)}}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.p-2{padding:calc(var(--spacing) * 2)}.p-3\\.5{padding:calc(var(--spacing) * 3.5)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.px-8{padding-inline:calc(var(--spacing) * 8)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-12{padding-block:calc(var(--spacing) * 12)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-3\\.5{padding-top:calc(var(--spacing) * 3.5)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pt-6{padding-top:calc(var(--spacing) * 6)}.pr-10{padding-right:calc(var(--spacing) * 10)}.pr-12{padding-right:calc(var(--spacing) * 12)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-3\\.5{padding-bottom:calc(var(--spacing) * 3.5)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-5{padding-bottom:calc(var(--spacing) * 5)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pl-5{padding-left:calc(var(--spacing) * 5)}.text-center{text-align:center}.text-left{text-align:left}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[0\\.9375rem\\]{font-size:.9375rem}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[15px\\]{font-size:15px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-normal{--tw-tracking:var(--tracking-normal);letter-spacing:var(--tracking-normal)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-balance{text-wrap:balance}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-emerald-500{color:var(--color-emerald-500)}.text-emerald-700{color:var(--color-emerald-700)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\/70{color:#1e2939b3}@supports (color:color-mix(in lab,red,red)){.text-gray-800\\/70{color:color-mix(in oklab,var(--color-gray-800) 70%,transparent)}}.text-gray-900{color:var(--color-gray-900)}.text-red-600{color:var(--color-red-600)}.text-transparent{color:#0000}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.line-through{text-decoration-line:line-through}.decoration-gray-400{-webkit-text-decoration-color:var(--color-gray-400);text-decoration-color:var(--color-gray-400)}.decoration-\\[1\\.5px\\]{text-decoration-thickness:1.5px}.underline-offset-2{text-underline-offset:2px}.opacity-0{opacity:0}.opacity-40{opacity:.4}.opacity-60{opacity:.6}.opacity-90{opacity:.9}.opacity-100{opacity:1}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_0_0_2px_rgba\\(239\\,68\\,68\\,0\\.5\\)\\]{--tw-shadow:0 0 0 2px var(--tw-shadow-color,#ef444480);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.\\!filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)!important}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.outline-none{--tw-outline-style:none;outline-style:none}.placeholder\\:text-gray-500::placeholder{color:var(--color-gray-500)}@media(hover:hover){.hover\\:-translate-y-px:hover{--tw-translate-y:-1px;translate:var(--tw-translate-x) var(--tw-translate-y)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-50\\/60:hover{background-color:#f9fafb99}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-50\\/60:hover{background-color:color-mix(in oklab,var(--color-gray-50) 60%,transparent)}}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200\\/60:hover{background-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-200\\/60:hover{background-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:text-red-600:hover{color:var(--color-red-600)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-80:hover{opacity:.8}.hover\\:brightness-105:hover{--tw-brightness:brightness(105%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}}.focus\\:bg-gray-200\\/60:focus{background-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.focus\\:bg-gray-200\\/60:focus{background-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.focus\\:shadow-\\[0_0_0_2px_color-mix\\(in_srgb\\,var\\(--pw-accent\\)_30\\%\\,transparent\\)\\]:focus{--tw-shadow:0 0 0 2px var(--tw-shadow-color,var(--pw-accent))}@supports (color:color-mix(in lab,red,red)){.focus\\:shadow-\\[0_0_0_2px_color-mix\\(in_srgb\\,var\\(--pw-accent\\)_30\\%\\,transparent\\)\\]:focus{--tw-shadow:0 0 0 2px var(--tw-shadow-color,color-mix(in srgb,var(--pw-accent) 30%,transparent))}}.focus\\:shadow-\\[0_0_0_2px_color-mix\\(in_srgb\\,var\\(--pw-accent\\)_30\\%\\,transparent\\)\\]:focus{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:opacity-80:focus-visible{opacity:.8}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-\\[var\\(--pw-accent\\)\\]:focus-visible{--tw-ring-color:var(--pw-accent)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-inset:focus-visible{--tw-ring-inset:inset}.active\\:scale-\\[0\\.98\\]:active{scale:.98}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-60:disabled{opacity:.6}@media(hover:hover){.disabled\\:hover\\:translate-y-0:disabled:hover{--tw-translate-y:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.disabled\\:hover\\:brightness-100:disabled:hover{--tw-brightness:brightness(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}}@media(min-width:40rem){.sm\\:max-h-\\[calc\\(100dvh-2rem\\)\\]{max-height:calc(100dvh - 2rem)}.sm\\:p-4{padding:calc(var(--spacing) * 4)}.sm\\:p-8{padding:calc(var(--spacing) * 8)}.sm\\:px-8{padding-inline:calc(var(--spacing) * 8)}.sm\\:pt-5{padding-top:calc(var(--spacing) * 5)}.sm\\:pt-8{padding-top:calc(var(--spacing) * 8)}.sm\\:pb-4{padding-bottom:calc(var(--spacing) * 4)}.sm\\:pb-8{padding-bottom:calc(var(--spacing) * 8)}.sm\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}}}.pw-cta-shimmer:before{content:"";z-index:1;background:linear-gradient(90deg,#0000,#ffffff59 50%,#0000);width:100%;height:100%;animation:3s infinite pw-cta-shimmer;position:absolute;top:0;left:-100%}@keyframes pw-cta-shimmer{0%{left:-100%}to{left:100%}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,to{opacity:0;transform:scale(2)}}'
      , Ei = !1;
    function Tr() {
        if (Ei || (Ei = !0,
        typeof CSS > "u" || typeof CSS.registerProperty != "function"))
            return;
        let t;
        try {
            let e = new CSSStyleSheet;
            e.replaceSync($i),
            t = e.cssRules
        } catch {
            return
        }
        for (let e of t) {
            if (e.constructor.name !== "CSSPropertyRule")
                continue;
            let a = e;
            try {
                CSS.registerProperty({
                    name: a.name,
                    syntax: a.syntax,
                    inherits: a.inherits,
                    ...a.initialValue != null ? {
                        initialValue: a.initialValue
                    } : {}
                })
            } catch {}
        }
    }
    function Er(t, e, a={}) {
        if (typeof document > "u")
            throw new Error("mountShadow called in non-DOM environment");
        Tr();
        let i = a.host ?? document.createElement("div");
        if (i.setAttribute("data-paywall-host", ""),
        i.style.cssText = a.inline ? "all: initial; position: absolute; inset: 0; z-index: 1; pointer-events: none;" : "all: initial; position: fixed; inset: 0; z-index: 2147483647; pointer-events: none;",
        !i.isConnected && !a.inline && document.body.appendChild(i),
        !a.inline && i.isConnected && typeof i.showPopover == "function")
            try {
                i.setAttribute("popover", "manual"),
                i.showPopover()
            } catch {
                i.removeAttribute("popover")
            }
        let n = i.attachShadow({
            mode: a.shadowMode ?? "closed"
        })
          , r = `
:host {
  all: initial !important;
  display: block !important;
  ${a.inline ? "position: absolute !important; inset: 0 !important; z-index: 1 !important; pointer-events: none !important;" : "position: fixed !important; inset: 0 !important; z-index: 2147483647 !important; pointer-events: none !important;"}
  color: #111827 !important;
  font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  font-style: normal !important;
  line-height: 1.5 !important;
  letter-spacing: normal !important;
  text-transform: none !important;
  text-decoration: none !important;
  text-align: left !important;
  direction: ltr !important;
  cursor: auto !important;
  visibility: visible !important;
}
`
          , o = document.createElement("style");
        o.textContent = r + $i + (a.injectCss ?? ""),
        n.appendChild(o);
        let l = document.createElement("div");
        l.style.pointerEvents = "auto",
        n.appendChild(l);
        let p = e;
        return Le(Ee(t, p), l),
        {
            shadowRoot: n,
            update(c) {
                p = {
                    ...p,
                    ...c
                },
                Le(Ee(t, p), l)
            },
            unmount() {
                Le(null, l),
                i.remove()
            }
        }
    }
    var Lr = (t, e, a) => {
        let i = t[e];
        return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise( (n, r) => {
            (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + e + (e.split("/").length !== a ? ". Note that variables only represent file names one level deep." : ""))))
        }
        )
    }
      , Or = ["ru", "uk", "de", "es", "fr", "it", "pt", "pl", "cs", "hu", "ro", "nl", "sv", "da", "no", "fi", "el", "tr", "id", "ar", "ja", "ko", "zh", "hi", "th", "vi", "he"]
      , Wi = (t, e, a) => Zi(e, a)
      , Ji = wa({
        t: Wi,
        locale: "en"
    });
    function Zi(t, e) {
        if (!e)
            return t;
        let a = t;
        for (let[i,n] of Object.entries(e))
            a = a.split(`{${i}}`).join(String(n));
        return a
    }
    var gt = new Map
      , _t = new Map;
    function Yi(t) {
        return Or.includes(t)
    }
    function Ur(t) {
        let e = [];
        if (typeof navigator < "u" && navigator.language) {
            e.push(navigator.language);
            let i = navigator.language.split("-")[0];
            i && i !== navigator.language && e.push(i)
        }
        let a = t.settings.locale_default;
        if (a) {
            e.push(a);
            let i = a.split("-")[0];
            i && i !== a && e.push(i)
        }
        for (let i of e)
            if (Yi(i))
                return i;
        return null
    }
    function Mr(t, e) {
        return !!t.locales && t.locales[e] !== void 0
    }
    async function Nr(t) {
        let e = gt.get(t);
        if (e)
            return e;
        let a = _t.get(t);
        if (a)
            return a;
        let i = Lr(Object.assign({
            "./locales/ar.ts": () => Promise.resolve().then( () => (La(),
            Ea)),
            "./locales/cs.ts": () => Promise.resolve().then( () => (Ua(),
            Oa)),
            "./locales/da.ts": () => Promise.resolve().then( () => (Na(),
            Ma)),
            "./locales/de.ts": () => Promise.resolve().then( () => (Da(),
            qa)),
            "./locales/el.ts": () => Promise.resolve().then( () => (Fa(),
            Ga)),
            "./locales/es.ts": () => Promise.resolve().then( () => (Ra(),
            Va)),
            "./locales/fi.ts": () => Promise.resolve().then( () => (Ha(),
            Ka)),
            "./locales/fr.ts": () => Promise.resolve().then( () => (Wa(),
            $a)),
            "./locales/he.ts": () => Promise.resolve().then( () => (Za(),
            Ja)),
            "./locales/hi.ts": () => Promise.resolve().then( () => (Xa(),
            Ya)),
            "./locales/hu.ts": () => Promise.resolve().then( () => (ei(),
            Qa)),
            "./locales/id.ts": () => Promise.resolve().then( () => (ai(),
            ti)),
            "./locales/it.ts": () => Promise.resolve().then( () => (ni(),
            ii)),
            "./locales/ja.ts": () => Promise.resolve().then( () => (si(),
            ri)),
            "./locales/ko.ts": () => Promise.resolve().then( () => (li(),
            oi)),
            "./locales/nl.ts": () => Promise.resolve().then( () => (ui(),
            ci)),
            "./locales/no.ts": () => Promise.resolve().then( () => (di(),
            pi)),
            "./locales/pl.ts": () => Promise.resolve().then( () => (gi(),
            hi)),
            "./locales/pt.ts": () => Promise.resolve().then( () => (mi(),
            _i)),
            "./locales/ro.ts": () => Promise.resolve().then( () => (yi(),
            fi)),
            "./locales/ru.ts": () => Promise.resolve().then( () => (wi(),
            bi)),
            "./locales/sv.ts": () => Promise.resolve().then( () => (ki(),
            vi)),
            "./locales/th.ts": () => Promise.resolve().then( () => (Si(),
            xi)),
            "./locales/tr.ts": () => Promise.resolve().then( () => (zi(),
            Ii)),
            "./locales/uk.ts": () => Promise.resolve().then( () => (ji(),
            Ci)),
            "./locales/vi.ts": () => Promise.resolve().then( () => (Pi(),
            Ai)),
            "./locales/zh.ts": () => Promise.resolve().then( () => (Ti(),
            Bi))
        }), `./locales/${t}.ts`, 3).then(n => {
            let r = n.default ?? {};
            return gt.set(t, r),
            r
        }
        ).catch(n => {
            console.warn(`[paywall] failed to load locale chunk "${t}"`, n);
            let r = {};
            return gt.set(t, r),
            r
        }
        ).finally( () => {
            _t.delete(t)
        }
        );
        return _t.set(t, i),
        i
    }
    function qr({bootstrap: t, forceLocale: e, children: a}) {
        let[i,n] = I("en")
          , [r,o] = I(null);
        R( () => {
            let p = (e && Yi(e) ? e : null) ?? ( () => {
                if (!t)
                    return null;
                let d = Ur(t);
                return !d || !Mr(t, d) ? null : d
            }
            )();
            if (!p) {
                (r !== null || i !== "en") && (n("en"),
                o(null));
                return
            }
            if (p === i && r)
                return;
            let c = !1;
            return Nr(p).then(d => {
                c || (n(p),
                o(d))
            }
            ),
            () => {
                c = !0
            }
        }
        , [t, e]);
        let l = {
            locale: i,
            t: r ? (p, c, d) => Zi(r[p] ?? c, d) : Wi
        };
        return s(Ji.Provider, {
            value: l,
            children: a
        })
    }
    function N() {
        return Ba(Ji)
    }
    var Dr = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    function Gr({open: t, onClose: e, labelledBy: a, brandColor: i, topBanner: n, allowClose: r=!0, hideCloseButton: o=!1, inline: l=!1, children: p}) {
        let {t: c} = N()
          , d = $(null)
          , g = $(null);
        return R( () => {
            if (!t)
                return;
            g.current = document.activeElement ?? null;
            let u = d.current;
            u && (u.querySelector("[data-pw-autofocus]") ?? u).focus({
                preventScroll: !0
            });
            let h = w => {
                if (w.key === "Escape") {
                    if (!r)
                        return;
                    w.stopPropagation(),
                    e();
                    return
                }
                if (w.key !== "Tab" || !d.current)
                    return;
                let y = Array.from(d.current.querySelectorAll(Dr)).filter(S => !S.hasAttribute("disabled") && S.tabIndex !== -1);
                if (y.length === 0) {
                    w.preventDefault();
                    return
                }
                let v = y[0]
                  , _ = y[y.length - 1]
                  , b = document.activeElement;
                w.shiftKey && b === v ? (w.preventDefault(),
                _.focus()) : !w.shiftKey && b === _ && (w.preventDefault(),
                v.focus())
            }
            ;
            document.addEventListener("keydown", h, !0);
            let f = document.body.style.overflow;
            return l || (document.body.style.overflow = "hidden"),
            () => {
                document.removeEventListener("keydown", h, !0),
                l || (document.body.style.overflow = f),
                g.current?.focus?.({
                    preventScroll: !0
                })
            }
        }
        , [t, e, r, l]),
        t ? s("div", {
            class: `${l ? "absolute z-[1]" : "fixed z-[2147483647]"} inset-0 flex items-center justify-center bg-slate-950/50 p-2 sm:p-4 backdrop-blur-md animate-[pw-fade-in_180ms_ease-out]`,
            onClick: u => {
                r && u.target === u.currentTarget && e()
            }
            ,
            "data-pw-root": !0,
            children: [s("div", {
                class: "relative flex w-full max-w-[400px] flex-col animate-[pw-scale-in_220ms_cubic-bezier(0.16,1,0.3,1)]",
                style: {
                    "--pw-accent": i ?? "#3b82f6"
                },
                children: [n, s("div", {
                    ref: d,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": a,
                    tabIndex: -1,
                    class: "relative flex max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)] w-full flex-col overflow-hidden rounded-xl bg-white outline-none",
                    style: {
                        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)"
                    },
                    children: [p, r && !o ? s("button", {
                        type: "button",
                        onClick: e,
                        "aria-label": c("modal.close_aria", "Close"),
                        class: "absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-500 backdrop-blur-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pw-accent)]",
                        children: s("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            "aria-hidden": "true",
                            children: s("path", {
                                d: "M3 3l10 10M13 3L3 13",
                                stroke: "currentColor",
                                "stroke-width": "1.75",
                                "stroke-linecap": "round"
                            })
                        })
                    }) : null]
                })]
            }), s("style", {
                children: `
        @keyframes pw-fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes pw-scale-in {
          from { opacity: 0; transform: translateY(12px) scale(0.96) }
          to { opacity: 1; transform: none }
        }
      `
            })]
        }) : null
    }
    function Li(t, e) {
        switch (t) {
        case "google":
            return e("auth.continue_with_google", "Continue with Google");
        case "apple":
            return e("auth.continue_with_apple", "Continue with Apple");
        case "github":
            return e("auth.continue_with_github", "Continue with GitHub");
        case "facebook":
            return e("auth.continue_with_facebook", "Continue with Facebook")
        }
    }
    function mt(t, e, a) {
        let i = e === "signup" ? a("auth.signup_failed", "Sign-up failed") : a("auth.signin_failed", "Sign-in failed");
        if (!(t instanceof m))
            return i;
        switch (t.code) {
        case "invalid_credentials":
            return a("auth.invalid_credentials", "Invalid email or password");
        case "email_not_confirmed":
            return a("auth.email_not_confirmed", "Please confirm your email before signing in.");
        case "email_exists":
        case "user_already_exists":
            return a("auth.email_exists", "An account with this email already exists.");
        case "weak_password":
            return a("auth.weak_password", "Password is too weak.");
        case "invalid_otp":
        case "otp_expired":
        case "token_expired":
            return a("auth.invalid_otp", "The code is invalid or has expired.");
        case "over_email_send_rate_limit":
        case "over_request_rate_limit":
        case "rate_limited":
        case "http_429":
            return a("auth.rate_limited", "Too many requests. Please try again later.");
        case "network_error":
            return a("auth.network_error", "Network error. Please check your connection and try again.");
        case "upstream":
        case "upstream_error":
        case "http_502":
        case "http_503":
        case "http_504":
            return a("auth.service_unavailable", "Service is temporarily unavailable. Please try again.");
        case "custom_domain_required":
            return a("auth.custom_domain_required", "Sign-in is not available: the paywall has no custom domain configured (platform settings \u2192 Custom domains).");
        default:
            return i
        }
    }
    function Xi({block: t, ctx: e}) {
        let a = e.auth
          , i = e.authSession
          , n = t.allow_signup !== !1
          , r = t.allow_password_reset !== !1
          , o = t.allow_email_code === !0
          , l = t.hide_when_authenticated !== !1;
        if (!a)
            return typeof console < "u" && console.warn("[paywall] auth_panel rendered without AuthClient \u2014 pass `auth: true` to PaywallUI"),
            null;
        let p = i && !i.user.is_anonymous ? i : null;
        return p && l ? null : p ? s(Fr, {
            email: p.user.email ?? "",
            onSignOut: () => a.signOut().catch( () => {}
            )
        }) : s(Vr, {
            block: t,
            allowSignup: n,
            allowReset: r,
            allowEmailCode: o,
            ctx: e
        })
    }
    function Fr({email: t, onSignOut: e}) {
        let {t: a} = N();
        return s("div", {
            class: "flex items-center justify-between gap-3 rounded-2xl bg-gray-100 px-4 py-3",
            children: [s("div", {
                class: "flex flex-col",
                children: [s("span", {
                    class: "text-[10px] font-semibold uppercase tracking-wider text-gray-500",
                    children: a("auth.signed_in", "Signed in")
                }), s("span", {
                    class: "text-sm font-medium text-gray-900",
                    children: t
                })]
            }), s("button", {
                type: "button",
                onClick: e,
                class: "rounded-md px-1.5 py-0.5 text-xs font-medium text-gray-600 transition-colors hover:bg-white hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pw-accent)]",
                children: a("auth.sign_out", "Sign out")
            })]
        })
    }
    function Vr({block: t, allowSignup: e, allowReset: a, allowEmailCode: i, ctx: n}) {
        let {t: r} = N()
          , o = n.auth
          , l = t.providers ?? []
          , p = n.initialAuthMode === "signup" && e ? "signup" : "signin"
          , [c,d] = I(p)
          , [g,u] = I("")
          , [h,f] = I("")
          , [w,y] = I("")
          , [v,_] = I("")
          , [b,S] = I(null)
          , L = $(!1)
          , [G,x] = I(null)
          , [C,U] = I(null)
          , [A,O] = I(!1)
          , [K,H] = I(null)
          , X = $(null)
          , [de,Fe] = I(null);
        R( () => {
            if (typeof o.getLastLogin != "function")
                return;
            let B = !1;
            return o.getLastLogin().then(F => {
                B || !F || (Fe(F),
                F.email && u(V => V === "" ? F.email : V))
            }
            , () => {}
            ),
            () => {
                B = !0
            }
        }
        , [o]);
        let Q = B => {
            d(B),
            x(null),
            U(null),
            O(!1),
            H(null),
            _(""),
            X.current = null
        }
        ;
        R( () => {
            if (c !== "signup_sent" || !X.current || typeof window > "u")
                return;
            let B = !1
              , F = !1
              , V = async () => {
                let Re = X.current;
                if (!(B || F || !Re)) {
                    F = !0;
                    try {
                        await o.signInWithEmail({
                            email: Re.email,
                            password: Re.password
                        }),
                        X.current = null
                    } catch {} finally {
                        F = !1
                    }
                }
            }
              , he = () => {
                typeof document < "u" && document.visibilityState === "hidden" || V()
            }
            ;
            window.addEventListener("focus", he),
            document.addEventListener("visibilitychange", he);
            let Bt = 0
              , Tt = window.setInterval( () => {
                if (Bt += 1,
                Bt > 30) {
                    window.clearInterval(Tt);
                    return
                }
                V()
            }
            , 2e4);
            return () => {
                B = !0,
                window.removeEventListener("focus", he),
                document.removeEventListener("visibilitychange", he),
                window.clearInterval(Tt)
            }
        }
        , [c, o]);
        let Ve = async B => {
            if (B.preventDefault(),
            !(L.current || b)) {
                L.current = !0;
                try {
                    if (x(null),
                    U(null),
                    c === "signup" && !A) {
                        if (!g.trim())
                            return;
                        O(!0);
                        return
                    }
                    if (c === "signup" && h !== w) {
                        x(r("auth.passwords_mismatch", "Passwords don't match"));
                        return
                    }
                    S("email");
                    try {
                        if (c === "signin")
                            await o.signInWithEmail({
                                email: g,
                                password: h
                            });
                        else if (c === "signup") {
                            let F = await o.signUp({
                                email: g,
                                password: h
                            });
                            F.kind === "confirmation_required" ? (X.current = {
                                email: g,
                                password: h
                            },
                            f(""),
                            d("signup_sent")) : F.kind === "already_registered" && (d("signin"),
                            O(!1),
                            y(""),
                            U(r("auth.email_already_registered", "This email is already registered. Sign in below \u2014 with your password or the social account you used.")))
                        } else
                            c === "forgot" ? (await o.requestPasswordReset({
                                email: g
                            }),
                            d("reset_sent")) : c === "reset_verify" ? (await o.verifyOtp({
                                email: g,
                                token: v,
                                type: h ? "recovery" : "email"
                            }),
                            h && await o.updatePassword({
                                password: h
                            })) : c === "otp" ? (await o.sendOtp({
                                email: g
                            }),
                            _(""),
                            d("otp_verify")) : c === "otp_verify" && await o.verifyOtp({
                                email: g,
                                token: v,
                                type: "email"
                            })
                    } catch (F) {
                        if (c === "signup" && F instanceof m && (F.code === "email_exists" || F.code === "user_already_exists")) {
                            d("signin"),
                            O(!1),
                            y(""),
                            U(r("auth.email_already_registered", "This email is already registered. Sign in below with your password or the account you used to sign up."));
                            return
                        }
                        x(mt(F, c === "signup" ? "signup" : c === "reset_verify" || c === "otp" || c === "otp_verify" ? "otp" : c === "forgot" ? "reset" : "signin", r))
                    } finally {
                        S(null)
                    }
                } finally {
                    L.current = !1
                }
            }
        }
          , k = async () => {
            if (!(L.current || b)) {
                L.current = !0,
                S("email"),
                x(null),
                U(null);
                try {
                    await o.sendOtp({
                        email: g
                    }),
                    U(r("auth.code_resent", "We sent you a new code."))
                } catch (B) {
                    x(mt(B, "otp", r))
                } finally {
                    L.current = !1,
                    S(null)
                }
            }
        }
          , z = async (B, F) => {
            if (!(L.current || b)) {
                L.current = !0,
                S(B),
                x(null),
                U(null),
                F?.switchAccount || H(null);
                try {
                    await o.signInWithOAuth({
                        provider: B,
                        switchAccount: F?.switchAccount,
                        onPopupOpened: () => S(null),
                        resumeCheckout: n.resumeCheckout
                    }),
                    H(null)
                } catch (V) {
                    if (V instanceof m && (V.code === "oauth_cancelled" || V.code === "oauth_timeout"))
                        return;
                    if (V instanceof m && V.code === "oauth_identity_already_linked") {
                        H(B),
                        x(r("auth.identity_already_linked", "This account is already registered. Sign in to it below."));
                        return
                    }
                    typeof console < "u" && console.warn("[paywall] OAuth sign-in failed", {
                        provider: B,
                        code: V instanceof m ? V.code : void 0,
                        message: V instanceof Error ? V.message : String(V)
                    }),
                    x(mt(V, "signin", r))
                } finally {
                    L.current = !1,
                    S(null)
                }
            }
        }
          , P = l.length > 0 && (c === "signin" || c === "signup")
          , ee = c === "signin" || c === "signup" || c === "forgot" || c === "otp"
          , W = c === "signin" || c === "signup" && A;
        return c === "reset_sent" ? s(ts, {
            email: g,
            onBack: () => Q("signin"),
            t: r
        }) : c === "signup_sent" ? s(es, {
            email: g,
            onBack: () => Q("signin"),
            t: r
        }) : s("div", {
            class: "flex flex-col gap-5",
            children: [s(Rr, {
                mode: c,
                customHeading: t.heading,
                customSubheading: t.subheading
            }), P ? s("div", {
                class: "flex flex-col gap-2.5",
                children: [l.map(B => s("div", {
                    class: "relative",
                    children: [s("button", {
                        type: "button",
                        onClick: () => z(B),
                        disabled: b !== null,
                        class: "flex h-12 w-full items-center justify-center gap-2.5 rounded-full border-1 border-gray-200 bg-white px-5 text-base font-medium text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pw-accent)]",
                        children: [b === B ? s("span", {
                            class: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-700"
                        }) : s(Ui, {
                            provider: B
                        }), s("span", {
                            children: Li(B, r)
                        })]
                    }), de?.method === B ? s(Yr, {
                        email: de.email
                    }) : null]
                }, B)), s(Qr, {})]
            }) : null, s("form", {
                onSubmit: Ve,
                class: "flex flex-col gap-3",
                children: [ee && s(Oi, {
                    type: "email",
                    placeholder: r("auth.email", "Email address"),
                    value: g,
                    onInput: u,
                    autocomplete: "email",
                    required: !0
                }), W && s(ft, {
                    placeholder: r("auth.password", "Password"),
                    value: h,
                    onInput: f,
                    autocomplete: c === "signin" ? "current-password" : "new-password",
                    required: !0
                }), c === "signup" && A && s(ft, {
                    placeholder: r("auth.repeat_password", "Repeat password"),
                    value: w,
                    onInput: y,
                    autocomplete: "new-password",
                    required: !0
                }), (c === "reset_verify" || c === "otp_verify") && s(Oi, {
                    type: "text",
                    placeholder: r("auth.confirmation_code", "Confirmation code"),
                    value: v,
                    onInput: _,
                    autocomplete: "one-time-code",
                    inputMode: "numeric",
                    required: !0
                }), c === "reset_verify" && s(ft, {
                    placeholder: r("auth.new_password_optional", "New password (optional \u2014 only for password reset)"),
                    value: h,
                    onInput: f,
                    autocomplete: "new-password"
                }), (c === "signin" || c === "signup") && (i || c === "signin" && a) && s("div", {
                    class: "flex items-center justify-between gap-3 text-sm",
                    children: [i ? s(ne, {
                        onClick: () => Q("otp"),
                        children: r("auth.use_email_code", "Sign in with a code")
                    }) : s("span", {}), c === "signin" && a ? s(ne, {
                        onClick: () => Q("forgot"),
                        children: r("auth.forgot_password", "Forgot password?")
                    }) : null]
                }), c === "otp_verify" && s("div", {
                    class: "flex justify-start text-sm",
                    children: s(ne, {
                        onClick: k,
                        children: r("auth.resend_code", "Send the code again")
                    })
                }), G && s("p", {
                    class: "text-sm text-red-600",
                    children: G
                }), C && s("p", {
                    class: "text-sm text-gray-500",
                    children: C
                }), K && s("button", {
                    type: "button",
                    onClick: () => z(K, {
                        switchAccount: !0
                    }),
                    disabled: b !== null,
                    class: "flex h-12 w-full items-center justify-center gap-2.5 rounded-full border-1 border-gray-200 bg-white px-5 text-base font-medium text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pw-accent)]",
                    children: [b === K ? s("span", {
                        class: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-700"
                    }) : s(Ui, {
                        provider: K
                    }), s("span", {
                        children: Li(K, r)
                    })]
                }), s(Wr, {
                    busy: b === "email",
                    label: Hr(c, A, t.submit_label ?? t.heading, r)
                })]
            }), s($r, {
                mode: c,
                allowSignup: e,
                onSwitch: Q
            })]
        })
    }
    function Rr({mode: t, customHeading: e, customSubheading: a}) {
        let {t: i} = N()
          , n = Kr(t, i)
          , r = t === "signin" || t === "signup"
          , o = r && e ? e : n.title
          , l = r && a !== void 0 ? a || null : n.subtitle;
        return s("div", {
            class: "flex flex-col gap-2",
            children: [s("h2", {
                class: "text-3xl font-bold tracking-tight text-gray-900",
                children: o
            }), l ? s("p", {
                class: "text-base leading-relaxed text-gray-600",
                children: l
            }) : null]
        })
    }
    function Kr(t, e) {
        switch (t) {
        case "signin":
            return {
                title: e("auth.welcome", "Welcome back!"),
                subtitle: e("auth.default_subtitle", "Sign in to access all features and sync your data.")
            };
        case "signup":
            return {
                title: e("auth.welcome_signup", "Welcome!"),
                subtitle: e("auth.default_subtitle", "Sign in to access all features and sync your data.")
            };
        case "forgot":
            return {
                title: e("auth.forgot_password_title", "Forgot password?"),
                subtitle: e("auth.forgot_subtitle", "Enter your email and we'll send you a password reset link.")
            };
        case "reset_sent":
        case "signup_sent":
            return {
                title: e("auth.check_email_title", "Check your email"),
                subtitle: null
            };
        case "reset_verify":
            return {
                title: e("auth.reset_password_title", "Reset password"),
                subtitle: e("auth.reset_password_subtitle", "Enter the code from your email and a new password.")
            };
        case "otp":
            return {
                title: e("auth.otp_title", "Sign in with a code"),
                subtitle: e("auth.otp_subtitle", "Enter your email and we'll send you a sign-in code \u2014 no password needed.")
            };
        case "otp_verify":
            return {
                title: e("auth.otp_verify_title", "Enter the code"),
                subtitle: e("auth.otp_verify_subtitle", "We sent a 6-digit code to your email. Enter it here to sign in.")
            }
        }
    }
    function Hr(t, e, a, i) {
        if (t === "signin" && a)
            return a;
        switch (t) {
        case "signin":
            return i("auth.log_in", "Sign In");
        case "signup":
            return e ? i("auth.create_account", "Create Account") : i("auth.sign_up", "Sign Up");
        case "forgot":
            return i("auth.send_reset", "Send Reset Email");
        case "otp":
            return i("auth.send_code", "Send Code");
        case "reset_verify":
        case "otp_verify":
            return i("auth.verify", "Verify");
        default:
            return i("cta.continue", "Continue")
        }
    }
    function $r({mode: t, allowSignup: e, onSwitch: a}) {
        let {t: i} = N();
        return t === "signin" && e ? s("p", {
            class: "text-center text-sm text-gray-600",
            children: [i("auth.no_account", "Don't have an account?"), " ", s(ne, {
                onClick: () => a("signup"),
                children: i("auth.sign_up_link", "Sign Up")
            })]
        }) : t === "signup" ? s("p", {
            class: "text-center text-sm text-gray-600",
            children: [i("auth.have_account", "Already have an account?"), " ", s(ne, {
                onClick: () => a("signin"),
                children: i("auth.log_in_link", "Log In")
            })]
        }) : t === "forgot" || t === "reset_sent" || t === "reset_verify" ? s("p", {
            class: "text-center text-sm text-gray-600",
            children: [i("auth.no_account", "Don't have an account?"), " ", s(ne, {
                onClick: () => a("signup"),
                children: i("auth.sign_up_link", "Sign Up")
            })]
        }) : t === "otp" || t === "otp_verify" ? s("p", {
            class: "text-center text-sm text-gray-600",
            children: s(ne, {
                onClick: () => a("signin"),
                children: i("auth.back_to_login", "Back to Login")
            })
        }) : null
    }
    function ne({onClick: t, children: e}) {
        return s("button", {
            type: "button",
            onClick: t,
            class: "font-semibold transition-opacity hover:opacity-80 focus:outline-none focus-visible:opacity-80",
            style: {
                color: "var(--pw-accent)"
            },
            children: e
        })
    }
    function Wr({busy: t, label: e}) {
        return s("button", {
            type: "submit",
            disabled: t,
            class: "pw-cta-shimmer relative mt-1 flex min-h-12 w-full items-center justify-center overflow-hidden rounded-3xl px-5 py-2 text-center text-base font-semibold leading-tight text-white transition-transform duration-150 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pw-accent)]",
            style: {
                background: "linear-gradient(135deg, color-mix(in srgb, var(--pw-accent) 55%, white) 0%, var(--pw-accent) 55%, color-mix(in srgb, var(--pw-accent) 90%, black) 100%)",
                boxShadow: "0 0 20px 0 color-mix(in srgb, var(--pw-accent) 25%, transparent), inset 0 0 8px 0 color-mix(in srgb, white 25%, transparent)"
            },
            children: t ? s("span", {
                class: "relative z-10 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            }) : s("span", {
                class: "relative z-10",
                children: e
            })
        })
    }
    function Oi({type: t, placeholder: e, value: a, onInput: i, autocomplete: n, inputMode: r, required: o}) {
        return s("input", {
            type: t,
            value: a,
            placeholder: e,
            onInput: l => i(l.target.value),
            autocomplete: n,
            inputMode: r,
            required: o,
            class: "h-14 w-full rounded-2xl bg-gray-100 px-5 text-base text-gray-900 outline-none transition-all placeholder:text-gray-500 hover:bg-gray-200/60 focus:bg-gray-200/60 focus:shadow-[0_0_0_2px_color-mix(in_srgb,var(--pw-accent)_30%,transparent)]"
        })
    }
    function ft({placeholder: t, value: e, onInput: a, autocomplete: i, required: n}) {
        let {t: r} = N()
          , [o,l] = I(!1)
          , p = $(null);
        R( () => {
            let g = p.current;
            g && g.value !== e && (g.value = e)
        }
        , [o, e]);
        let c = r("auth.show_password", "Show password")
          , d = r("auth.hide_password", "Hide password");
        return s("div", {
            class: "relative",
            children: [s("input", {
                ref: p,
                type: o ? "text" : "password",
                value: e,
                placeholder: t,
                onInput: g => a(g.target.value),
                autocomplete: i,
                required: n,
                class: "h-14 w-full rounded-2xl bg-gray-100 pl-5 pr-12 text-base text-gray-900 outline-none transition-all placeholder:text-gray-500 hover:bg-gray-200/60 focus:bg-gray-200/60 focus:shadow-[0_0_0_2px_color-mix(in_srgb,var(--pw-accent)_30%,transparent)]"
            }), s("button", {
                type: "button",
                onClick: () => l(g => !g),
                "aria-label": o ? d : c,
                tabIndex: -1,
                class: "absolute right-4 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded text-gray-500 transition-colors hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pw-accent)]",
                children: o ? s(Zr, {}) : s(Jr, {})
            })]
        })
    }
    function Jr() {
        return s("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 20 20",
            fill: "none",
            "aria-hidden": "true",
            children: [s("path", {
                d: "M1.667 10S4.583 4.167 10 4.167 18.333 10 18.333 10 15.417 15.833 10 15.833 1.667 10 1.667 10Z",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }), s("circle", {
                cx: "10",
                cy: "10",
                r: "2.5",
                stroke: "currentColor",
                "stroke-width": "1.5"
            })]
        })
    }
    function Zr() {
        return s("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 20 20",
            fill: "none",
            "aria-hidden": "true",
            children: [s("path", {
                d: "M8.236 4.293A6.96 6.96 0 0 1 10 4.167C15.417 4.167 18.333 10 18.333 10a13.5 13.5 0 0 1-1.92 2.755M11.768 11.768A2.5 2.5 0 0 1 8.233 8.233",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }), s("path", {
                d: "M14.953 14.953A8.84 8.84 0 0 1 10 15.833C4.583 15.833 1.667 10 1.667 10a13.5 13.5 0 0 1 3.38-3.953M1.667 1.667l16.666 16.666",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })]
        })
    }
    function Yr({email: t}) {
        let {t: e} = N()
          , a = t ? e("auth.last_used", "Last used \xB7 {email}", {
            email: Xr(t)
        }) : e("auth.last_used_no_email", "Last used");
        return s("span", {
            class: "pointer-events-none absolute -top-2 right-3 max-w-[75%] truncate rounded-full bg-gray-900 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white shadow-sm",
            children: a
        })
    }
    function Xr(t) {
        let[e,a] = t.split("@");
        return a ? `${e.slice(0, 3)}*****@${a}` : t
    }
    function Qr() {
        let {t} = N();
        return s("div", {
            class: "flex items-center gap-3 py-1 text-sm text-gray-400",
            children: [s("div", {
                class: "h-px flex-1 bg-gray-200"
            }), s("span", {
                children: t("auth.or", "or")
            }), s("div", {
                class: "h-px flex-1 bg-gray-200"
            })]
        })
    }
    function Ui({provider: t}) {
        return t === "google" ? s("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 18 18",
            "aria-hidden": "true",
            children: [s("path", {
                fill: "#4285F4",
                d: "M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.49h4.84a4.14 4.14 0 0 1-1.79 2.71v2.26h2.9c1.7-1.56 2.69-3.87 2.69-6.62Z"
            }), s("path", {
                fill: "#34A853",
                d: "M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.83.86-3.06.86-2.36 0-4.36-1.59-5.07-3.74H.92v2.33A9 9 0 0 0 9 18Z"
            }), s("path", {
                fill: "#FBBC05",
                d: "M3.93 10.68a5.4 5.4 0 0 1 0-3.36V4.99H.92a9 9 0 0 0 0 8.02l3-2.33Z"
            }), s("path", {
                fill: "#EA4335",
                d: "M9 3.58c1.32 0 2.5.45 3.44 1.34l2.58-2.58A9 9 0 0 0 .92 4.99l3.01 2.33C4.64 5.17 6.64 3.58 9 3.58Z"
            })]
        }) : t === "apple" ? s("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            "aria-hidden": "true",
            children: s("path", {
                d: "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
            })
        }) : t === "github" ? s("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            "aria-hidden": "true",
            children: s("path", {
                d: "M8 0C3.6 0 0 3.6 0 8a8 8 0 0 0 5.5 7.6c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7 0-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3.1-1.9 3.7-3.6 3.9.3.3.6.8.6 1.6V15c0 .2.1.5.6.4A8 8 0 0 0 16 8c0-4.4-3.6-8-8-8Z"
            })
        }) : s("svg", {
            width: "18",
            height: "20",
            viewBox: "0 0 14 16",
            fill: "currentColor",
            "aria-hidden": "true",
            children: s("path", {
                d: "M14 2.7C14 1.2 12.8 0 11.3 0H2.7C1.2 0 0 1.2 0 2.7v10.6C0 14.8 1.2 16 2.7 16h4V9.8H4.7v-2H6.7V6.4c0-2 1.2-3.1 3-3.1.9 0 1.7.1 2 .2V5h-1.4c-.8 0-1 .4-1 1v1.5h2.4l-.3 2H9.3V16h2c1.5 0 2.7-1.2 2.7-2.7V2.7Z"
            })
        })
    }
    function es({email: t, onBack: e, t: a}) {
        return s("div", {
            class: "flex flex-col items-center gap-4 py-2 text-center",
            children: [s("div", {
                class: "flex h-14 w-14 items-center justify-center rounded-full",
                style: {
                    background: "linear-gradient(135deg, #4ade80, #16a34a)",
                    color: "#fff",
                    boxShadow: "0 0 0 8px rgba(74,222,128,0.12), 0 8px 20px -6px rgba(22,163,74,0.45)"
                },
                "aria-hidden": "true",
                children: s("svg", {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: s("path", {
                        d: "M5 13l4 4L19 7",
                        stroke: "currentColor",
                        "stroke-width": "2.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    })
                })
            }), s("h2", {
                class: "mt-1 text-3xl font-bold tracking-tight text-gray-900",
                children: a("auth.check_email_title", "Check your email")
            }), s("p", {
                class: "text-base leading-relaxed text-gray-600",
                children: a("auth.signup_sent_subtitle", "We sent a confirmation link to your email. Click it to activate your account \u2014 you will be signed in here automatically.")
            }), t ? s("p", {
                class: "break-all text-base font-semibold text-gray-900",
                children: t
            }) : null, s("button", {
                type: "button",
                onClick: e,
                class: "pw-cta-shimmer relative mt-2 flex min-h-12 w-full items-center justify-center overflow-hidden rounded-3xl px-5 py-2 text-center text-base font-semibold leading-tight text-white transition-transform duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pw-accent)]",
                style: {
                    background: "linear-gradient(135deg, color-mix(in srgb, var(--pw-accent) 55%, white) 0%, var(--pw-accent) 55%, color-mix(in srgb, var(--pw-accent) 90%, black) 100%)",
                    boxShadow: "0 0 20px 0 color-mix(in srgb, var(--pw-accent) 25%, transparent), inset 0 0 8px 0 color-mix(in srgb, white 25%, transparent)"
                },
                children: s("span", {
                    class: "relative z-10",
                    children: a("auth.back_to_login", "Back to Login")
                })
            })]
        })
    }
    function ts({email: t, onBack: e, t: a}) {
        return s("div", {
            class: "flex flex-col items-center gap-4 py-2 text-center",
            children: [s("div", {
                class: "flex h-14 w-14 items-center justify-center rounded-full",
                style: {
                    background: "linear-gradient(135deg, #4ade80, #16a34a)",
                    color: "#fff",
                    boxShadow: "0 0 0 8px rgba(74,222,128,0.12), 0 8px 20px -6px rgba(22,163,74,0.45)"
                },
                "aria-hidden": "true",
                children: s("svg", {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: s("path", {
                        d: "M5 13l4 4L19 7",
                        stroke: "currentColor",
                        "stroke-width": "2.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    })
                })
            }), s("h2", {
                class: "mt-1 text-3xl font-bold tracking-tight text-gray-900",
                children: a("auth.check_email_title", "Check your email")
            }), s("p", {
                class: "text-base leading-relaxed text-gray-600",
                children: a("auth.reset_sent_subtitle", "We sent a password reset link. Follow the instructions in the email to reset your password.")
            }), t ? s("p", {
                class: "break-all text-base font-semibold text-gray-900",
                children: t
            }) : null, s("p", {
                class: "text-sm text-gray-500",
                children: a("auth.reset_link_valid", "The link is valid for 1 hour.")
            }), s("button", {
                type: "button",
                onClick: e,
                class: "pw-cta-shimmer relative mt-2 flex min-h-12 w-full items-center justify-center overflow-hidden rounded-3xl px-5 py-2 text-center text-base font-semibold leading-tight text-white transition-transform duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pw-accent)]",
                style: {
                    background: "linear-gradient(135deg, color-mix(in srgb, var(--pw-accent) 55%, white) 0%, var(--pw-accent) 55%, color-mix(in srgb, var(--pw-accent) 90%, black) 100%)",
                    boxShadow: "0 0 20px 0 color-mix(in srgb, var(--pw-accent) 25%, transparent), inset 0 0 8px 0 color-mix(in srgb, white 25%, transparent)"
                },
                children: s("span", {
                    class: "relative z-10",
                    children: a("auth.back_to_login", "Back to Login")
                })
            })]
        })
    }
    function as({block: t, bootstrap: e, auth: a, authSession: i, onBack: n, showBack: r=!0, intent: o="preauth", initialMode: l, resumeCheckout: p}) {
        let {t: c} = N()
          , d = {
            bootstrap: e,
            selectedPriceId: null,
            setSelectedPriceId: () => {}
            ,
            onAction: () => {}
            ,
            auth: a,
            authSession: i,
            initialAuthMode: l,
            resumeCheckout: p
        }
          , g = o === "restore" ? {
            ...t,
            heading: c("auth.restore_purchases_heading", "Restore Purchases"),
            subheading: c("auth.restore_purchases_subheading", "Please sign in to restore your purchases.")
        } : o === "preauth" ? {
            ...t,
            heading: c("auth.login_continue_purchase", "Log in to continue your purchase"),
            subheading: c("auth.link_purchase_subheading", "We'll link the purchase to your account to keep access."),
            submit_label: c("auth.log_in", "Sign In")
        } : t;
        return s("div", {
            class: "relative flex-1 min-h-0 overflow-y-auto p-6 sm:p-8",
            children: [r ? s(is, {
                onClick: n,
                ariaLabel: c("nav.back_aria", "Back")
            }) : null, s(Xi, {
                block: g,
                ctx: d
            })]
        })
    }
    function is({onClick: t, ariaLabel: e}) {
        return s("button", {
            type: "button",
            onClick: t,
            "aria-label": e,
            class: "absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pw-accent)]",
            children: s("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 20 20",
                fill: "none",
                "aria-hidden": "true",
                children: [s("path", {
                    d: "M5 8h8a4 4 0 0 1 0 8H9",
                    stroke: "currentColor",
                    "stroke-width": "1.75",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }), s("path", {
                    d: "M8 4 4 8l4 4",
                    stroke: "currentColor",
                    "stroke-width": "1.75",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                })]
            })
        })
    }
    var ns = t => `pw-offer-${t}-start`;
    function yt(t) {
        let e = t - Date.now();
        return e <= 0 ? {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            expired: !0
        } : {
            days: Math.floor(e / (1e3 * 60 * 60 * 24)),
            hours: Math.floor(e % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
            minutes: Math.floor(e % (1e3 * 60 * 60) / (1e3 * 60)),
            seconds: Math.floor(e % (1e3 * 60) / 1e3),
            expired: !1
        }
    }
    function rs(t) {
        if (t.expires_at) {
            let e = Date.parse(t.expires_at);
            return Number.isFinite(e) ? e : null
        }
        if (t.duration_minutes && t.duration_minutes > 0) {
            if (typeof window > "u")
                return null;
            try {
                let e = ns(t.id)
                  , a = window.localStorage.getItem(e);
                return a || (a = new Date().toISOString(),
                window.localStorage.setItem(e, a)),
                Date.parse(a) + t.duration_minutes * 6e4
            } catch {
                return null
            }
        }
        return null
    }
    function Qi(t, e) {
        if (!t || t.length === 0)
            return null;
        if (e) {
            let a = t.find(i => i.id === e);
            if (a)
                return a
        }
        return t.find(a => a.expires_at || a.duration_minutes) ?? null
    }
    function en(t) {
        let e = t ? rs(t) : null
          , [a,i] = I( () => e !== null ? yt(e) : null)
          , n = $(e);
        return n.current = e,
        R( () => {
            if (e === null) {
                i(null);
                return
            }
            i(yt(e));
            let r = setInterval( () => {
                let o = yt(n.current ?? 0);
                i(o),
                o.expired && clearInterval(r)
            }
            , 1e3);
            return () => clearInterval(r)
        }
        , [e, t?.duration_minutes, t?.id]),
        a
    }
    function ss({block: t, ctx: e}) {
        let {t: a} = N()
          , i = Qi(e.bootstrap.offers, t.offer_id)
          , n = en(i);
        if (!i || n === null || n.expired && !t.force)
            return null;
        let r = t.title ?? i.label ?? a("offer.limited_time", "Limited-time offer")
          , o = i.discount_percent ? `${r} ${i.discount_percent}%` : r;
        return s("div", {
            class: "flex flex-wrap items-center justify-center gap-2 rounded-2xl px-4 py-3 text-[15px] font-semibold leading-tight text-white",
            style: {
                background: "linear-gradient(135deg, color-mix(in srgb, var(--pw-accent) 55%, white) 0%, var(--pw-accent) 50%, color-mix(in srgb, var(--pw-accent) 85%, black) 100%)",
                textShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
            },
            role: "status",
            children: [s(an, {}), s("span", {
                children: o
            }), s(tn, {
                value: n,
                t: a
            })]
        })
    }
    function tn({value: t, t: e}) {
        return s("div", {
            class: "flex items-center gap-1 font-mono text-sm",
            children: [t.days > 0 ? s(J, {
                children: [s(qe, {
                    children: String(t.days)
                }), s("span", {
                    class: "text-xs",
                    children: e("countdown.d", "d")
                })]
            }) : null, s(qe, {
                children: String(t.hours).padStart(2, "0")
            }), s("span", {
                class: "text-xs",
                children: e("countdown.h", "h")
            }), s(qe, {
                children: String(t.minutes).padStart(2, "0")
            }), s("span", {
                class: "text-xs",
                children: e("countdown.m", "m")
            }), s(qe, {
                children: String(t.seconds).padStart(2, "0")
            }), s("span", {
                class: "text-xs",
                children: e("countdown.s", "s")
            })]
        })
    }
    function qe({children: t}) {
        return s("span", {
            class: "rounded bg-black/20 px-1.5 py-0.5 text-xs font-bold",
            children: t
        })
    }
    function os({offer: t}) {
        let {t: e} = N()
          , a = en(t);
        if (a === null || a.expired)
            return null;
        let i = t.label ?? e("offer.limited_time", "Limited-time offer")
          , n = t.discount_percent ? `${i} ${t.discount_percent}%` : i;
        return s("div", {
            class: "-mb-2 flex flex-wrap items-center justify-center gap-2 rounded-t-xl px-4 pb-5 pt-3 text-[15px] font-semibold leading-tight text-white",
            style: {
                background: "linear-gradient(135deg, color-mix(in srgb, var(--pw-accent) 55%, white) 0%, var(--pw-accent) 50%, color-mix(in srgb, var(--pw-accent) 85%, black) 100%)",
                textShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
            },
            role: "status",
            children: [s(an, {}), s("span", {
                children: n
            }), s(tn, {
                value: a,
                t: e
            })]
        })
    }
    function an() {
        return s("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 12 12",
            fill: "none",
            "aria-hidden": "true",
            children: s("path", {
                fill: "currentColor",
                d: "m9.44 5.359-2.394-.895.61-3.036c.062-.31-.345-.531-.57-.291L2.434 6.105a.336.336 0 0 0 .126.537l2.395.894-.61 3.037c-.062.31.345.53.57.29l4.653-4.968a.336.336 0 0 0-.126-.536Z"
            })
        })
    }
    var Mi = 3
      , Ni = 200
      , qi = 5e3
      , bt = 5
      , xt = 5
      , ls = xt * 1024 * 1024
      , Di = ["image/jpeg", "image/png", "image/webp"]
      , cs = /.+@.+\..+/;
    function us({client: t, authSession: e, origin: a, onBack: i}) {
        let {t: n} = N()
          , r = e?.user.email ?? ""
          , o = r || null
          , [l,p] = I(r)
          , [c,d] = I("")
          , [g,u] = I("")
          , [h,f] = I([])
          , [w,y] = I(!1)
          , [v,_] = I(null)
          , [b,S] = I({})
          , L = () => {
            let A = {}
              , O = (o ?? l).trim()
              , K = c.trim()
              , H = g.trim();
            return O ? cs.test(O.toLowerCase()) || (A.email = n("support.invalid_email", "Invalid email")) : A.email = n("support.required", "Required"),
            (K.length < Mi || K.length > Ni) && (A.subject = n("support.subject_length", "{min}\u2013{max} characters", {
                min: Mi,
                max: Ni
            })),
            (H.length < 1 || H.length > qi) && (A.message = n("support.message_length", "{min}\u2013{max} characters", {
                min: 1,
                max: qi
            })),
            S(A),
            Object.keys(A).length === 0
        }
          , G = async A => {
            if (A.preventDefault(),
            !w && L()) {
                y(!0),
                S(O => ({
                    ...O,
                    submit: void 0
                }));
                try {
                    let O = (o ?? l).trim();
                    await t.createSupportTicket({
                        subject: c.trim(),
                        content: g.trim(),
                        email: O || void 0,
                        files: h.length > 0 ? h : void 0
                    }),
                    _(O)
                } catch (O) {
                    let K = O instanceof m && O.message || "Failed to send. Please try again.";
                    S(H => ({
                        ...H,
                        submit: K
                    }))
                } finally {
                    y(!1)
                }
            }
        }
          , x = () => {
            d(""),
            u(""),
            f([]),
            S({}),
            _(null)
        }
          , C = "flex flex-col gap-3 bg-white px-6 pb-6 pt-3 sm:px-8"
          , U = {
            boxShadow: "0 -4px 12px -4px rgba(15,23,42,0.06)"
        };
        return v ? s("div", {
            class: "relative flex-1 min-h-0 flex flex-col",
            children: [s("div", {
                class: "flex-1 min-h-0 overflow-y-auto flex flex-col items-center gap-4 px-6 pb-3 pt-6 sm:px-8 sm:pb-4 sm:pt-8 text-center",
                children: [s("div", {
                    class: "flex h-14 w-14 items-center justify-center rounded-full",
                    style: {
                        background: "linear-gradient(135deg, color-mix(in srgb, var(--pw-accent) 85%, white), var(--pw-accent))",
                        color: "#fff",
                        boxShadow: "0 0 0 8px color-mix(in srgb, var(--pw-accent) 12%, transparent), 0 8px 20px -6px color-mix(in srgb, var(--pw-accent) 45%, transparent)"
                    },
                    "aria-hidden": "true",
                    children: s("svg", {
                        viewBox: "0 0 24 24",
                        class: "h-7 w-7",
                        children: s("path", {
                            fill: "currentColor",
                            d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.93 8.2-6.85 9.29a1.01 1.01 0 0 1-1.43.19L5.76 13.77a1 1 0 1 1 1.25-1.56l4.08 3.26 6.23-8.45a1 1 0 1 1 1.61 1.18Z"
                        })
                    })
                }), s("div", {
                    class: "text-lg font-semibold tracking-tight text-gray-900",
                    children: n("support.success_heading", "Request submitted")
                }), s("div", {
                    class: "max-w-[320px] text-sm leading-relaxed text-gray-500",
                    children: [n("support.success_message_prefix", "We've received your message and will respond to"), " ", s("b", {
                        class: "text-gray-700",
                        children: v
                    }), "."]
                })]
            }), s("div", {
                class: C,
                style: U,
                children: s("div", {
                    class: "flex items-center justify-center gap-3",
                    children: [s("button", {
                        type: "button",
                        onClick: i,
                        class: "rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pw-accent)]",
                        children: a === "standalone" ? n("support.done_button", "Done") : n("nav.back_aria", "Back")
                    }), s("button", {
                        type: "button",
                        onClick: x,
                        class: "flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pw-accent)]",
                        style: {
                            background: "linear-gradient(180deg, color-mix(in srgb, var(--pw-accent) 92%, white), var(--pw-accent))",
                            boxShadow: "0 1px 2px rgba(15,23,42,0.08), 0 6px 14px -4px color-mix(in srgb, var(--pw-accent) 50%, transparent)"
                        },
                        children: n("support.send_another", "Send another request")
                    })]
                })
            })]
        }) : s("form", {
            onSubmit: G,
            class: "relative flex-1 min-h-0 flex flex-col",
            children: [s(ps, {
                onClick: i,
                ariaLabel: n("nav.back_aria", "Back")
            }), s("div", {
                class: "flex-1 min-h-0 overflow-y-auto px-6 pb-3 pt-6 sm:px-8 sm:pb-4 sm:pt-8",
                children: s("div", {
                    class: "flex flex-col gap-5",
                    children: [s("div", {
                        class: "flex flex-col gap-2 pr-10",
                        children: [s("h2", {
                            class: "text-3xl font-bold tracking-tight text-gray-900",
                            children: n("support.heading", "Support")
                        }), s("p", {
                            class: "text-base leading-relaxed text-gray-600",
                            children: n("support.instruction", "Please fill out the form below to submit your support request.")
                        })]
                    }), s("div", {
                        class: "flex flex-col gap-3",
                        children: [o ? s("div", {
                            class: "rounded-2xl bg-gray-100 px-5 py-3 text-sm text-gray-600",
                            children: [n("support.sending_as", "Sending as"), " ", s("b", {
                                class: "font-medium text-gray-900",
                                children: o
                            })]
                        }) : s(Gi, {
                            type: "email",
                            placeholder: n("support.email_placeholder", "Enter your email *"),
                            value: l,
                            onInput: p,
                            error: b.email,
                            autocomplete: "email",
                            required: !0
                        }), s(Gi, {
                            type: "text",
                            placeholder: n("support.subject_placeholder", "Enter your subject *"),
                            value: c,
                            onInput: d,
                            error: b.subject,
                            required: !0
                        }), s(ds, {
                            placeholder: n("support.message_placeholder", "Enter your message *"),
                            value: g,
                            onInput: u,
                            error: b.message,
                            required: !0
                        }), s(hs, {
                            files: h,
                            onChange: f,
                            disabled: w
                        })]
                    })]
                })
            }), s("div", {
                class: C,
                style: U,
                children: [b.submit && s("p", {
                    class: "text-sm text-red-600",
                    children: b.submit
                }), s("div", {
                    class: "flex items-center justify-end gap-3",
                    children: [s("button", {
                        type: "button",
                        onClick: i,
                        disabled: w,
                        class: "rounded-full px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pw-accent)]",
                        children: a === "standalone" ? n("support.close_button", "Close") : n("nav.back_aria", "Back")
                    }), s("button", {
                        type: "submit",
                        disabled: w,
                        class: "pw-cta-shimmer relative flex h-12 items-center justify-center overflow-hidden rounded-full px-8 text-base font-semibold text-white transition-transform duration-150 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pw-accent)]",
                        style: {
                            background: "linear-gradient(135deg, color-mix(in srgb, var(--pw-accent) 55%, white) 0%, var(--pw-accent) 55%, color-mix(in srgb, var(--pw-accent) 90%, black) 100%)",
                            boxShadow: "0 0 20px 0 color-mix(in srgb, var(--pw-accent) 25%, transparent), inset 0 0 8px 0 color-mix(in srgb, white 25%, transparent)"
                        },
                        children: w ? s("span", {
                            class: "relative z-10 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                        }) : s("span", {
                            class: "relative z-10",
                            children: n("support.send_button", "Send")
                        })
                    })]
                })]
            })]
        })
    }
    function ps({onClick: t, ariaLabel: e}) {
        return s("button", {
            type: "button",
            onClick: t,
            "aria-label": e,
            class: "absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pw-accent)]",
            children: s("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 20 20",
                fill: "none",
                "aria-hidden": "true",
                children: [s("path", {
                    d: "M5 8h8a4 4 0 0 1 0 8H9",
                    stroke: "currentColor",
                    "stroke-width": "1.75",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }), s("path", {
                    d: "M8 4 4 8l4 4",
                    stroke: "currentColor",
                    "stroke-width": "1.75",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                })]
            })
        })
    }
    function Gi({type: t, placeholder: e, value: a, onInput: i, error: n, autocomplete: r, required: o}) {
        return s("div", {
            children: [s("input", {
                type: t,
                value: a,
                placeholder: e,
                onInput: l => i(l.target.value),
                autocomplete: r,
                required: o,
                class: `h-14 w-full rounded-2xl bg-gray-100 px-5 text-base text-gray-900 outline-none transition-all placeholder:text-gray-500 hover:bg-gray-200/60 focus:bg-gray-200/60 ${n ? "shadow-[0_0_0_2px_rgba(239,68,68,0.5)]" : "focus:shadow-[0_0_0_2px_color-mix(in_srgb,var(--pw-accent)_30%,transparent)]"}`
            }), n && s("span", {
                class: "mt-1 ml-2 block text-sm text-red-600",
                children: n
            })]
        })
    }
    function ds({placeholder: t, value: e, onInput: a, error: i, required: n}) {
        return s("div", {
            children: [s("textarea", {
                value: e,
                placeholder: t,
                onInput: r => a(r.target.value),
                required: n,
                rows: 5,
                class: `min-h-[120px] w-full rounded-2xl bg-gray-100 px-5 py-3.5 text-base leading-relaxed text-gray-900 outline-none transition-all placeholder:text-gray-500 hover:bg-gray-200/60 focus:bg-gray-200/60 ${i ? "shadow-[0_0_0_2px_rgba(239,68,68,0.5)]" : "focus:shadow-[0_0_0_2px_color-mix(in_srgb,var(--pw-accent)_30%,transparent)]"}`
            }), i && s("span", {
                class: "mt-1 ml-2 block text-sm text-red-600",
                children: i
            })]
        })
    }
    function hs({files: t, onChange: e, disabled: a}) {
        let {t: i} = N()
          , n = $(null)
          , [r,o] = I(!1)
          , [l,p] = I(null)
          , c = d => {
            if (!d || a)
                return;
            p(null);
            let g = Array.from(d);
            if (t.length + g.length > bt) {
                p(i("support.too_many_files", "Up to {max} files", {
                    max: bt
                }));
                return
            }
            let u = g.filter(h => Di.includes(h.type) && h.size <= ls);
            if (u.length !== g.length) {
                p(i("support.invalid_file", "Only JPEG/PNG/WebP, \u2264 {size}MB each", {
                    size: xt
                }));
                return
            }
            e([...t, ...u])
        }
        ;
        return s("div", {
            children: [s("span", {
                class: "text-xs font-medium text-gray-700",
                children: i("support.attachments_label", "Attachments (optional)")
            }), s("div", {
                role: "button",
                tabIndex: 0,
                "aria-label": i("support.attachments_aria", "Attachments upload"),
                onClick: () => !a && n.current?.click(),
                onDragOver: d => {
                    d.preventDefault(),
                    a || o(!0)
                }
                ,
                onDragLeave: () => o(!1),
                onDrop: d => {
                    d.preventDefault(),
                    o(!1),
                    c(d.dataTransfer?.files ?? null)
                }
                ,
                class: `mt-1.5 cursor-pointer rounded-2xl border border-dashed p-3.5 text-center transition-all ${r ? "border-[var(--pw-accent)] bg-[color-mix(in_srgb,var(--pw-accent)_6%,white)]" : "border-gray-300 hover:border-gray-400 hover:bg-gray-50/60"} ${a ? "cursor-not-allowed opacity-60" : ""}`,
                children: [s("div", {
                    class: "text-xs text-gray-500",
                    children: i("support.dropzone_text", "Drop images here or click to select")
                }), s("div", {
                    class: "mt-0.5 text-[11px] text-gray-400",
                    children: i("support.file_requirements", "JPEG/PNG/WebP, up to {max} files, \u2264 {size}MB each", {
                        max: bt,
                        size: xt
                    })
                })]
            }), s("input", {
                ref: n,
                type: "file",
                multiple: !0,
                accept: Di.join(","),
                class: "hidden",
                onChange: d => {
                    c(d.target.files),
                    d.currentTarget.value = ""
                }
            }), l && s("p", {
                class: "mt-1 text-xs text-red-600",
                children: l
            }), t.length > 0 && s("ul", {
                class: "mt-2 flex flex-col gap-1",
                children: t.map( (d, g) => s("li", {
                    class: "flex items-center justify-between gap-2 rounded bg-gray-50 px-2 py-1 text-xs",
                    children: [s("span", {
                        class: "truncate text-gray-700",
                        children: d.name
                    }), s("button", {
                        type: "button",
                        onClick: () => {
                            let u = [...t];
                            u.splice(g, 1),
                            e(u)
                        }
                        ,
                        disabled: a,
                        class: "text-gray-500 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60",
                        "aria-label": i("support.remove_file_aria", "Remove {filename}", {
                            filename: d.name
                        }),
                        children: "\u2715"
                    })]
                }, `${d.name}-${d.size}-${g}`))
            })]
        })
    }
    var gs = {
        day: "cta.get_plan_daily",
        week: "cta.get_plan_weekly",
        month: "cta.get_plan_monthly",
        year: "cta.get_plan_yearly"
    }
      , _s = {
        day: "Get Daily Plan",
        week: "Get Weekly Plan",
        month: "Get Monthly Plan",
        year: "Get Yearly Plan"
    };
    function ms(t, e, a, i) {
        if (e === "close")
            return i("cta.close", "Close");
        if (!t)
            return i("cta.continue", "Continue");
        if (!a && t.trial_days && t.interval && t.interval !== "lifetime")
            return i("cta.start_trial", "Start {days}-Day Free Trial", {
                days: t.trial_days
            });
        if (!t.interval || t.interval === "lifetime")
            return i("cta.get_lifetime_access", "Get Lifetime Access");
        let n = gs[t.interval];
        return n ? i(n, _s[t.interval]) : i("cta.get_plan_generic", "Get {interval} Plan", {
            interval: fs(t.interval)
        })
    }
    function fs(t) {
        return t.length ? t[0].toUpperCase() + t.slice(1) : t
    }
    function ys({block: t, ctx: e}) {
        let {t: a} = N()
          , [i,n] = I(!1)
          , r = t.priceId ?? e.selectedPriceId
          , o = i || t.action === "checkout" && !r
          , l = r ? e.bootstrap.prices.find(d => d.id === r) ?? null : null
          , p = e.bootstrap.user?.had_previous_trial ?? !1
          , c = t.label ?? ms(l, t.action, p, a);
        return s("button", {
            type: "button",
            disabled: o,
            onClick: async () => {
                if (!o) {
                    n(!0);
                    try {
                        await e.onAction(t.action, {
                            priceId: r
                        })
                    } finally {
                        n(!1)
                    }
                }
            }
            ,
            class: "pw-cta-shimmer relative flex min-h-12 w-full items-center justify-center overflow-hidden rounded-3xl px-5 py-2 text-center text-base font-semibold leading-tight text-white transition-transform duration-150 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pw-accent)]",
            style: {
                background: "linear-gradient(135deg, color-mix(in srgb, var(--pw-accent) 55%, white) 0%, var(--pw-accent) 55%, color-mix(in srgb, var(--pw-accent) 90%, black) 100%)",
                boxShadow: "0 0 20px 0 color-mix(in srgb, var(--pw-accent) 25%, transparent), inset 0 0 8px 0 color-mix(in srgb, white 25%, transparent)"
            },
            children: [s("span", {
                class: "absolute inset-0 opacity-40",
                style: {
                    background: "radial-gradient(circle at 50% 0%, color-mix(in srgb, white 40%, transparent) 0%, transparent 70%)"
                },
                "aria-hidden": "true"
            }), i ? s("span", {
                class: "relative z-10 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            }) : s("span", {
                class: "relative z-10",
                children: c
            })]
        })
    }
    function bs({ctx: t}) {
        let {t: e} = N()
          , a = t.authSession
          , i = t.auth
          , [n,r] = I(!1)
          , o = () => t.onAction("support");
        if (a && !a.user.is_anonymous) {
            let l = async () => {
                if (!(!i || n)) {
                    r(!0);
                    try {
                        await i.signOut()
                    } catch {} finally {
                        r(!1)
                    }
                }
            }
            ;
            return s("div", {
                class: "-mt-3 flex flex-col items-center gap-1.5 pt-1 text-center text-[13px] text-gray-500",
                children: [s("span", {
                    children: [e("session.signed_in_as_prefix", "Signed in as"), " ", s("b", {
                        class: "font-medium text-gray-700",
                        children: a.user.email
                    })]
                }), s("div", {
                    class: "flex items-center justify-center gap-3",
                    children: [s(De, {
                        onClick: l,
                        disabled: !i || n,
                        children: n ? e("session.signing_out", "Signing out\u2026") : e("session.sign_out", "Sign Out")
                    }), s(Fi, {}), s(De, {
                        onClick: o,
                        children: e("session.contact_support", "Contact Support")
                    })]
                })]
            })
        }
        return s("div", {
            class: "-mt-3 flex items-center justify-center gap-3 pt-1 text-center text-[13px]",
            children: [s(De, {
                onClick: () => t.onAction("restore"),
                children: e("session.restore_purchases", "Restore purchases")
            }), s(Fi, {}), s(De, {
                onClick: o,
                children: e("session.contact_support", "Contact Support")
            })]
        })
    }
    function De({onClick: t, disabled: e, children: a}) {
        return s("button", {
            type: "button",
            onClick: t,
            disabled: e,
            class: "font-semibold transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:opacity-80",
            style: {
                color: "var(--pw-accent)"
            },
            children: a
        })
    }
    function Fi() {
        return s("span", {
            class: "h-1 w-1 rounded-full bg-gray-300",
            "aria-hidden": "true"
        })
    }
    function ws({block: t}) {
        return t.items.length ? s("ul", {
            class: "flex flex-col gap-2.5",
            role: "list",
            children: t.items.map(e => s("li", {
                class: "flex items-start gap-3 text-sm text-gray-700",
                children: [s("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    class: "mt-0.5 flex-shrink-0 text-emerald-500",
                    "aria-hidden": "true",
                    children: s("path", {
                        d: "M4 10.5l3.5 3.5 8.5-8.5",
                        stroke: "currentColor",
                        "stroke-width": "2.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    })
                }), s("div", {
                    class: "flex flex-col gap-0.5",
                    children: [s("span", {
                        class: "font-medium leading-snug text-gray-900",
                        children: e.name
                    }), e.desc ? s("span", {
                        class: "text-xs leading-relaxed text-gray-400",
                        children: e.desc
                    }) : null]
                })]
            }, e.id))
        }) : null
    }
    function vs({block: t}) {
        let {t: e} = N()
          , a = t.title ?? e("pricing.money_back", "30-day money-back guarantee")
          , i = t.subtitle
          , n = (t.icon ?? "dollar_shield") !== "none"
          , r = ks(a);
        return s("div", {
            class: "flex flex-col items-center gap-1.5 border-b-1 pb-4 mb-1 border-gray-100",
            children: [s("div", {
                class: "inline-flex items-center gap-2 text-[12px] text-gray-700",
                children: [n ? s(xs, {}) : null, r ? s("span", {
                    children: [s("b", {
                        class: "font-bold text-gray-900",
                        children: r.bold
                    }), " ", s("span", {
                        class: "font-medium",
                        children: r.rest
                    })]
                }) : s("span", {
                    class: "font-medium",
                    children: a
                })]
            }), i ? s("span", {
                class: "text-center text-xs leading-relaxed text-gray-500",
                children: i
            }) : null]
        })
    }
    function ks(t) {
        let e = t.match(/^(\d+[-\s]?days?)\s+(.+)$/i);
        return e ? {
            bold: e[1],
            rest: e[2]
        } : null
    }
    function xs() {
        return s("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            width: "16",
            height: "16",
            class: "flex-shrink-0 text-emerald-500",
            "aria-hidden": "true",
            children: [s("path", {
                d: "M12 2 4 5v6c0 5.25 3.5 9.5 8 11 4.5-1.5 8-5.75 8-11V5l-8-3Z",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linejoin": "round"
            }), s("path", {
                d: "m9 12 2 2 4-4",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })]
        })
    }
    var nn = 24
      , Ss = 16
      , Is = 2;
    function zs(t, e) {
        let a = e * Is
          , i = nn;
        for (t.style.fontSize = `${i}px`; t.scrollHeight > a && i > Ss; )
            i -= 1,
            t.style.fontSize = `${i}px`
    }
    function Cs({block: t, ctx: e}) {
        let a = t.level ?? 1
          , i = `h${a}`
          , n = a === 1 ? "text-[22px] sm:text-2xl font-semibold leading-tight text-center text-balance text-gray-800" : a === 2 ? "text-xl font-semibold leading-snug text-gray-900 tracking-tight" : "text-base font-medium text-gray-900"
          , r = $(null)
          , o = a === 1 && !!e.bootstrap.settings.title_auto_fit;
        return R( () => {
            if (!o || !r.current)
                return;
            let l = getComputedStyle(r.current)
              , p = parseFloat(l.lineHeight) || nn * 1.5;
            zs(r.current, p)
        }
        , [o, t.text]),
        s(i, {
            ref: r,
            class: n,
            children: t.text
        })
    }
    function js(t) {
        let e = t.local ?? {
            currency: t.currency,
            amount: t.amount
        };
        if (t.interval === "year") {
            let a = (t.interval_count ?? 1) * 12;
            return {
                amount: e.amount / a,
                currency: e.currency
            }
        }
        return {
            amount: e.amount,
            currency: e.currency
        }
    }
    function wt(t, e) {
        let a = t % 1 !== 0 ? 2 : 0;
        try {
            let i = new Intl.NumberFormat(void 0,{
                style: "currency",
                currency: e,
                currencyDisplay: "narrowSymbol",
                maximumFractionDigits: a,
                minimumFractionDigits: a
            }).formatToParts(t)
              , n = ""
              , r = "";
            for (let o of i)
                o.type === "currency" ? n = o.value : o.type !== "literal" && (r += o.value);
            return {
                currency: n || e,
                amount: r.trim()
            }
        } catch {
            return {
                currency: e,
                amount: String(t)
            }
        }
    }
    function At(t, e) {
        let {amount: a, currency: i} = js(t);
        if (!e) {
            let {currency: l, amount: p} = wt(a, i);
            return {
                currency: l,
                amount: p,
                originalAmount: null
            }
        }
        let n = a * (1 - e / 100)
          , r = wt(n, i)
          , o = wt(a, i);
        return {
            currency: r.currency,
            amount: r.amount,
            originalAmount: `${o.currency}${o.amount}`
        }
    }
    function rn(t, e) {
        if (t.label)
            return t.label.toUpperCase();
        if (!t.interval || t.interval === "lifetime")
            return e("pricing.plan_label.lifetime", "LIFETIME");
        let a = {
            day: {
                key: "pricing.plan_label.daily",
                fallback: "DAILY PLAN"
            },
            week: {
                key: "pricing.plan_label.weekly",
                fallback: "WEEKLY PLAN"
            },
            month: {
                key: "pricing.plan_label.monthly",
                fallback: "MONTHLY PLAN"
            },
            year: {
                key: "pricing.plan_label.yearly",
                fallback: "YEARLY PLAN"
            }
        }[t.interval];
        return a ? e(a.key, a.fallback) : `${t.interval.toUpperCase()} PLAN`
    }
    function Pt(t, e) {
        if (!t.interval || t.interval === "lifetime")
            return e("pricing.interval.lifetime_short", "lifetime");
        if (t.interval === "year")
            return e("pricing.interval.month", "month");
        let a = t.interval_count ?? 1;
        return a === 1 ? e(`pricing.interval.${t.interval}`, t.interval) : `${a} ${t.interval}s`
    }
    function As({block: t, ctx: e}) {
        let {t: a} = N()
          , i = t.priceIds && t.priceIds.length > 0 ? new Set(t.priceIds) : null
          , n = e.bootstrap.prices.filter(o => !i || i.has(o.id));
        if (n.length === 0)
            return s("p", {
                class: "text-sm text-gray-500",
                children: a("pricing.no_prices", "No prices available.")
            });
        let r = t.popular_label ?? a("pricing.most_popular", "Most popular");
        if (t.view === "compact")
            return s("div", {
                class: "flex w-full flex-col rounded-xl border border-gray-200 bg-gray-50",
                role: "radiogroup",
                "aria-label": a("pricing.plans_aria", "Plans"),
                children: n.map( (o, l) => s(Bs, {
                    price: o,
                    isLast: l === n.length - 1,
                    isPopular: t.popular_price_id === o.id,
                    popularLabel: r,
                    offer: oe(e.bootstrap.offers, o.id, {
                        readStart: ie
                    }),
                    selected: e.selectedPriceId === o.id,
                    onSelect: () => {
                        e.setSelectedPriceId(o.id),
                        e.onAction("price_selected", {
                            priceId: o.id,
                            price: o
                        })
                    }
                    ,
                    t: a
                }, o.id))
            });
        if (t.view === "horizontal") {
            let o = Math.min(n.length, 3)
              , l = n.some(p => (oe(e.bootstrap.offers, p.id, {
                readStart: ie
            })?.discount_percent ?? 0) > 0);
            return s("div", {
                class: "grid items-stretch gap-2",
                style: {
                    gridTemplateColumns: `repeat(${o}, minmax(0, 1fr))`
                },
                role: "radiogroup",
                "aria-label": a("pricing.plans_aria", "Plans"),
                children: n.map(p => s(Ts, {
                    price: p,
                    isPopular: t.popular_price_id === p.id,
                    popularLabel: r,
                    offer: oe(e.bootstrap.offers, p.id, {
                        readStart: ie
                    }),
                    reserveStrikeRow: l,
                    selected: e.selectedPriceId === p.id,
                    onSelect: () => {
                        e.setSelectedPriceId(p.id),
                        e.onAction("price_selected", {
                            priceId: p.id,
                            price: p
                        })
                    }
                    ,
                    t: a
                }, p.id))
            })
        }
        return s("div", {
            class: "flex flex-col gap-2",
            role: "radiogroup",
            "aria-label": a("pricing.plans_aria", "Plans"),
            children: n.map(o => {
                let l = e.selectedPriceId === o.id
                  , p = t.popular_price_id === o.id
                  , c = oe(e.bootstrap.offers, o.id, {
                    readStart: ie
                })?.discount_percent ?? null
                  , {currency: d, amount: g, originalAmount: u} = At(o, c);
                return s("button", {
                    type: "button",
                    role: "radio",
                    "aria-checked": l,
                    onClick: () => {
                        e.setSelectedPriceId(o.id),
                        e.onAction("price_selected", {
                            priceId: o.id,
                            price: o
                        })
                    }
                    ,
                    class: ["group relative inline-flex w-full mx-auto items-center justify-between flex-row-reverse gap-4 rounded-2xl border-2 px-4 py-3.5 text-left transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pw-accent)]", l ? "border-[var(--pw-accent)] bg-transparent" : "border-gray-200 bg-transparent hover:bg-gray-50"].join(" "),
                    children: [s("span", {
                        class: ["flex h-6.5 w-6.5 flex-shrink-0 items-center justify-center rounded-full border transition-colors", l ? "border-[var(--pw-accent)] text-white" : "border-gray-300 bg-transparent text-transparent", p ? "mt-3" : ""].join(" "),
                        style: l ? {
                            background: "linear-gradient(135deg, color-mix(in srgb, var(--pw-accent) 70%, white) 0%, var(--pw-accent) 50%, color-mix(in srgb, var(--pw-accent) 85%, black) 100%)"
                        } : void 0,
                        "aria-hidden": "true",
                        children: s("svg", {
                            width: "14",
                            height: "10",
                            viewBox: "0 0 17 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            class: l ? "opacity-100" : "opacity-0",
                            children: s("path", {
                                d: "M16.5234 0.476562C16.9805 0.898438 16.9805 1.63672 16.5234 2.05859L7.52344 11.0586C7.10156 11.5156 6.36328 11.5156 5.94141 11.0586L1.44141 6.55859C0.984375 6.13672 0.984375 5.39844 1.44141 4.97656C1.86328 4.51953 2.60156 4.51953 3.02344 4.97656L6.75 8.66797L14.9414 0.476562C15.3633 0.0195312 16.1016 0.0195312 16.5234 0.476562Z",
                                fill: "currentColor"
                            })
                        })
                    }), s("div", {
                        class: "flex flex-1 flex-col gap-0.5",
                        children: [s("div", {
                            class: "flex flex-wrap items-center gap-x-2 gap-y-1",
                            children: [s("span", {
                                class: "text-xs font-normal uppercase tracking-normal text-gray-800/70",
                                children: rn(o, a)
                            }), u ? s("span", {
                                class: "text-[15px] font-normal text-gray-400 opacity-60 line-through decoration-gray-400 decoration-[1.5px]",
                                children: u
                            }) : null, c ? s("span", {
                                class: "rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold leading-none text-emerald-700",
                                children: ["-", c, "%"]
                            }) : null]
                        }), s("div", {
                            class: "flex items-baseline gap-2 flex-wrap",
                            children: s("span", {
                                class: "text-[26px] leading-tight whitespace-nowrap text-gray-800 font-medium",
                                children: [s("span", {
                                    class: "opacity-90",
                                    children: d
                                }), g, s("span", {
                                    class: "text-sm font-normal text-gray-500",
                                    children: [" ", "/ ", Pt(o, a)]
                                })]
                            })
                        }), o.description ? s("span", {
                            class: "mt-1 text-xs leading-relaxed text-gray-500",
                            children: o.description
                        }) : null]
                    }), p ? s("span", {
                        class: "absolute -top-[9px] -right-[6px] rounded-[11px] border-[5px] border-white px-2 py-1 text-[12px] font-semibold text-white",
                        style: {
                            background: "var(--pw-accent)"
                        },
                        children: r
                    }) : null]
                }, o.id)
            }
            )
        })
    }
    function Ps(t, e) {
        return t.label ? t.label : !t.interval || t.interval === "lifetime" ? e("pricing.interval.lifetime_short", "lifetime") : e(`pricing.interval.${t.interval}`, t.interval)
    }
    function Bs({price: t, isLast: e, isPopular: a, popularLabel: i, offer: n, selected: r, onSelect: o, t: l}) {
        let p = n?.discount_percent ?? null
          , {currency: c, amount: d, originalAmount: g} = At(t, p);
        return s("button", {
            type: "button",
            role: "radio",
            "aria-checked": r,
            onClick: o,
            class: "group relative inline-flex w-full max-w-[360px] mx-auto items-center justify-between gap-4 px-4 pt-3.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--pw-accent)]",
            children: [s("span", {
                class: ["flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border transition-colors mb-3", r ? "border-[var(--pw-accent)] text-white" : "border-gray-300 bg-transparent text-transparent"].join(" "),
                style: r ? {
                    background: "linear-gradient(135deg, color-mix(in srgb, var(--pw-accent) 70%, white) 0%, var(--pw-accent) 50%, color-mix(in srgb, var(--pw-accent) 85%, black) 100%)"
                } : void 0,
                "aria-hidden": "true",
                children: s("svg", {
                    width: "14",
                    height: "10",
                    viewBox: "0 0 17 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    class: r ? "opacity-100" : "opacity-0",
                    children: s("path", {
                        d: "M16.5234 0.476562C16.9805 0.898438 16.9805 1.63672 16.5234 2.05859L7.52344 11.0586C7.10156 11.5156 6.36328 11.5156 5.94141 11.0586L1.44141 6.55859C0.984375 6.13672 0.984375 5.39844 1.44141 4.97656C1.86328 4.51953 2.60156 4.51953 3.02344 4.97656L6.75 8.66797L14.9414 0.476562C15.3633 0.0195312 16.1016 0.0195312 16.5234 0.476562Z",
                        fill: "currentColor"
                    })
                })
            }), s("div", {
                class: ["flex flex-1 items-center gap-1.5 pb-3.5", e ? "" : "border-b border-gray-200"].join(" "),
                children: [s("div", {
                    class: "flex flex-wrap items-center gap-1 gap-x-1.5",
                    children: [s("span", {
                        class: "text-base font-normal capitalize text-gray-800",
                        children: Ps(t, l)
                    }), a ? s("span", {
                        class: "rounded-[9px] px-2 py-1 text-[10px] font-bold",
                        style: {
                            background: "linear-gradient(160deg, color-mix(in srgb, var(--pw-accent) 6%, white) 0%, color-mix(in srgb, var(--pw-accent) 15%, white) 100%)",
                            color: "var(--pw-accent)"
                        },
                        children: i
                    }) : null, p ? s("span", {
                        class: "rounded-md bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold leading-none text-emerald-700",
                        children: ["-", p, "%"]
                    }) : null]
                }), s("div", {
                    class: "flex-1"
                }), s("span", {
                    class: "flex items-baseline gap-1.5 text-base font-normal text-gray-600",
                    children: [g ? s("span", {
                        class: "text-xs text-gray-400 line-through decoration-gray-400 decoration-[1.5px]",
                        children: g
                    }) : null, s("span", {
                        class: "whitespace-nowrap",
                        children: [s("span", {
                            class: "opacity-90",
                            children: c
                        }), d, s("span", {
                            class: "text-xs text-gray-400",
                            children: [" ", "/ ", Pt(t, l)]
                        })]
                    })]
                })]
            })]
        })
    }
    function Ts({price: t, isPopular: e, popularLabel: a, offer: i, reserveStrikeRow: n, selected: r, onSelect: o, t: l}) {
        let p = i?.discount_percent ?? null
          , {currency: c, amount: d, originalAmount: g} = At(t, p);
        return s("button", {
            type: "button",
            role: "radio",
            "aria-checked": r,
            onClick: o,
            class: ["group relative flex h-full flex-col items-center justify-start gap-1 rounded-2xl border-2 px-3 pb-4 pt-3.5 text-center transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pw-accent)]", r ? "border-[var(--pw-accent)]" : "border-gray-200 hover:bg-gray-50"].join(" "),
            style: r ? {
                background: "color-mix(in srgb, var(--pw-accent) 6%, transparent)"
            } : void 0,
            children: [s("span", {
                class: "flex min-h-[2.4em] items-center text-[10px] font-normal uppercase leading-tight text-gray-800/70",
                children: rn(t, l)
            }), n ? s("div", {
                class: "flex h-[22px] items-center justify-center gap-1.5",
                children: [g ? s("span", {
                    class: "text-[12px] text-gray-400 line-through decoration-gray-400 decoration-[1.5px]",
                    children: g
                }) : null, p ? s("span", {
                    class: "rounded-md bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold leading-none text-emerald-700",
                    children: ["-", p, "%"]
                }) : null]
            }) : null, s("span", {
                class: "text-[26px] leading-none whitespace-nowrap text-gray-800 font-medium",
                children: [s("span", {
                    class: "opacity-90",
                    children: c
                }), d]
            }), s("span", {
                class: "text-xs font-normal text-gray-500",
                children: ["/ ", Pt(t, l)]
            }), e ? s("span", {
                class: "absolute -top-[10px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[11px] border-[3px] border-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white",
                style: {
                    background: "var(--pw-accent)"
                },
                children: a
            }) : null]
        })
    }
    function Es({block: t}) {
        return s("p", {
            class: "text-[0.9375rem] leading-relaxed text-gray-600",
            children: t.text
        })
    }
    var Ls = {
        week: .25,
        month: 1,
        year: 12
    };
    function Os(t, e) {
        return t ? e(`pricing.interval.${t}`, t) : e("pricing.interval.period", "period")
    }
    function Us({block: t, ctx: e}) {
        let {t: a} = N();
        if (!t.queries.length)
            return null;
        let i = e.bootstrap.prices.find(r => r.id === e.selectedPriceId)?.interval ?? null
          , n = i ? Ls[i] : void 0;
        return s("div", {
            class: "flex flex-col gap-2",
            children: [s("div", {
                class: "text-sm font-semibold text-gray-800",
                children: !i || i === "lifetime" ? a("pricing.included_total", "Included for lifetime:") : a("pricing.included_per", "Included per {interval}:", {
                    interval: Os(i, a)
                })
            }), s("ul", {
                class: "flex flex-col gap-2",
                role: "list",
                children: t.queries.map(r => {
                    let o = Number.isFinite(r.count) ? r.count : 0
                      , l = n !== void 0 ? Math.round(o * n) : o;
                    return s("li", {
                        class: `flex gap-3 ${r.desc ? "items-start" : "items-center"}`,
                        children: [s("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            class: `flex-shrink-0 text-emerald-500 ${r.desc ? "mt-0.5" : ""}`,
                            "aria-hidden": "true",
                            children: s("path", {
                                d: "M4 10.5l3.5 3.5 8.5-8.5",
                                stroke: "currentColor",
                                "stroke-width": "2.5",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                            })
                        }), s("div", {
                            children: [s("span", {
                                class: "font-semibold text-gray-900 text-sm",
                                children: l
                            }), " ", s("span", {
                                class: "text-sm text-gray-800",
                                children: r.name
                            }), r.desc ? s(J, {
                                children: [s("br", {}), s("span", {
                                    class: "text-xs text-gray-400",
                                    children: r.desc
                                })]
                            }) : null]
                        })]
                    }, r.id)
                }
                )
            })]
        })
    }
    var Ms = {
        heading: Cs,
        text: Es,
        price_grid: As,
        cta_button: ys,
        auth_panel: Xi,
        current_session: bs,
        features_list: ws,
        tokenization_gate: Us,
        guarantee_badge: vs,
        offer_banner: ss
    };
    function Ns(t, e) {
        if (!e)
            return t;
        let a = t.blocks.findIndex(n => n.type === "heading" && (n.level ?? 1) === 1);
        if (a === -1)
            return {
                ...t,
                blocks: [{
                    type: "heading",
                    text: e,
                    level: 1
                }, ...t.blocks]
            };
        let i = t.blocks.slice();
        return i[a] = {
            ...i[a],
            text: e
        },
        {
            ...t,
            blocks: i
        }
    }
    function qs({layout: t, bootstrap: e, onAction: a, auth: i, authSession: n, hasTopBanner: r, titleOverride: o}) {
        let l = Me( () => Ns(t, o), [t, o])
          , p = Me( () => {
            for (let y of l.blocks)
                if (y.type === "price_grid" && y.popular_price_id && e.prices.some(v => v.id === y.popular_price_id))
                    return y.popular_price_id;
            return e.prices[0]?.id ?? null
        }
        , [l.blocks, e.prices])
          , [c,d] = I(p)
          , g = {
            bootstrap: e,
            selectedPriceId: c,
            setSelectedPriceId: d,
            onAction: a,
            auth: i,
            authSession: n
        }
          , u = l.blocks.findIndex(y => y.type === "cta_button")
          , h = u === -1 ? l.blocks : l.blocks.slice(0, u)
          , f = u === -1 ? [] : l.blocks.slice(u)
          , w = (y, v) => {
            let _ = Ms[y.type];
            return _ ? s(_, {
                block: y,
                ctx: g
            }, `${y.type}-${v}`) : (typeof console < "u" && console.warn(`[paywall] unknown block type: ${y.type}`),
            null)
        }
        ;
        return s(J, {
            children: [s("div", {
                class: "flex-1 min-h-0 overflow-y-auto px-6 pb-3 pt-6 sm:px-8 sm:pb-4 sm:pt-8",
                children: s("div", {
                    class: "flex flex-col gap-6",
                    children: h.map(w)
                })
            }), f.length > 0 ? s("div", {
                class: "flex flex-col gap-4 bg-white px-6 pb-6 pt-3 sm:px-8",
                style: {
                    boxShadow: "0 -4px 12px -4px rgba(15,23,42,0.06)"
                },
                children: f.map( (y, v) => w(y, h.length + v))
            }) : null]
        })
    }
    function Ds(t, e, a, i) {
        return t ? i ? {
            open: !0,
            view: "purchased",
            error: null,
            processing: !1
        } : e.status === "idle" || e.status === "loading" ? {
            open: !0,
            view: "loading",
            error: null,
            processing: !1
        } : e.status === "error" ? {
            open: !0,
            view: "error",
            error: e.error,
            processing: !1
        } : a.kind === "support" ? {
            open: !0,
            view: "support",
            error: null,
            processing: !1
        } : a.kind === "auth_gate" ? {
            open: !0,
            view: "auth",
            error: null,
            processing: !1
        } : a.kind === "awaiting_payment" ? {
            open: !0,
            view: "awaiting_payment",
            error: null,
            processing: !1
        } : a.kind === "popup_blocked" ? {
            open: !0,
            view: "popup_blocked",
            error: null,
            processing: !1
        } : a.kind === "purchase_success" ? {
            open: !0,
            view: "purchased",
            error: null,
            processing: !1
        } : a.kind === "verifying" ? {
            open: !0,
            view: "loading",
            error: null,
            processing: !1
        } : {
            open: !0,
            view: "layout",
            error: null,
            processing: !1
        } : {
            open: !1,
            view: null,
            error: null,
            processing: !1
        }
    }
    function Gs(t, e) {
        return t.open === e.open && t.view === e.view && t.error === e.error && t.processing === e.processing
    }
    function Fs({client: t, open: e, onClose: a, onEvent: i, initialView: n, initialAuthMode: r, initialCheckoutPriceId: o, initialCheckoutUrl: l, purchased: p, renew: c, onState: d, inline: g, locale: u, titleOverride: h}) {
        let[f,w] = I({
            status: "idle"
        })
          , [y,v] = I( () => t.auth?.getCachedSession() ?? null)
          , [_,b] = I( () => n === "support" ? {
            kind: "support",
            origin: "standalone"
        } : n === "auth" ? o ? {
            kind: "auth_gate",
            pendingCheckout: {
                priceId: o,
                direct: !0
            },
            origin: "standalone",
            intent: "preauth"
        } : {
            kind: "auth_gate",
            origin: "standalone"
        } : n === "awaiting_payment" && o && l ? {
            kind: "awaiting_payment",
            priceId: o,
            url: l
        } : n === "popup_blocked" && o && l ? {
            kind: "popup_blocked",
            priceId: o,
            url: l
        } : {
            kind: "layout"
        })
          , S = n === "awaiting_payment" || n === "popup_blocked" || n === "auth" && !!o
          , L = $(!1)
          , G = $(null);
        R( () => {
            if (!d)
                return;
            let k = Ds(e, f, _, p)
              , z = G.current;
            z && Gs(z, k) || (G.current = k,
            d(k))
        }
        , [e, f, _, p, d]),
        R( () => {
            if (t.auth)
                return t.auth.onAuthChange( (k, z) => v(z))
        }
        , [t.auth]),
        R( () => {
            if (typeof t.onBootstrapChange == "function")
                return t.onBootstrapChange(k => {
                    w(z => z.status === "ready" ? {
                        status: "ready",
                        data: k
                    } : z)
                }
                )
        }
        , [t]),
        R( () => {
            if (!e || f.status === "ready" || f.status === "loading")
                return;
            let k = !1;
            return w({
                status: "loading"
            }),
            t.bootstrap().then(z => {
                k || (w({
                    status: "ready",
                    data: z
                }),
                i("ready", z))
            }
            ).catch(z => {
                if (k)
                    return;
                let P = z instanceof m ? z : new m("unknown","Failed to load paywall",{
                    cause: z
                });
                w({
                    status: "error",
                    error: P
                }),
                i("error", P)
            }
            ),
            () => {
                k = !0
            }
        }
        , [e, t]),
        Pa( () => {
            if (!e) {
                b({
                    kind: "layout"
                }),
                L.current = !1,
                w(k => k.status === "loading" ? {
                    status: "idle"
                } : k);
                return
            }
            n === "support" ? b({
                kind: "support",
                origin: "standalone"
            }) : n === "auth" ? b(o ? {
                kind: "auth_gate",
                pendingCheckout: {
                    priceId: o,
                    direct: !0
                },
                origin: "standalone",
                intent: "preauth"
            } : {
                kind: "auth_gate",
                origin: "standalone"
            }) : n === "awaiting_payment" && o && l ? b({
                kind: "awaiting_payment",
                priceId: o,
                url: l
            }) : n === "popup_blocked" && o && l && b({
                kind: "popup_blocked",
                priceId: o,
                url: l
            })
        }
        , [e, n, o, l]);
        let x = k => {
            if (!k)
                return;
            let z = t.getCachedOffers?.() ?? null
              , P = z ? oe(z, k, {
                readStart: ie
            }) : null;
            return {
                priceId: k,
                offerId: P?.id,
                renew: c === !0
            }
        }
          , C = async (k, {allowAuthGate: z=!0}={}) => {
            try {
                let P = t.getCachedOffers?.() ?? null
                  , ee = P ? oe(P, k, {
                    readStart: ie
                }) : null
                  , W = await t.createCheckout({
                    priceId: k,
                    offerId: ee?.id,
                    ignoreActivePurchase: c === !0
                });
                if (i("checkout_started", {
                    priceId: k,
                    url: W.url,
                    acquiring: W.acquiring
                }),
                typeof window > "u" || !W.url)
                    return;
                let B = window.open(W.url, "_blank");
                if (B) {
                    try {
                        B.opener = null
                    } catch {}
                    b({
                        kind: "awaiting_payment",
                        priceId: k,
                        url: W.url
                    })
                } else
                    b({
                        kind: "popup_blocked",
                        priceId: k,
                        url: W.url
                    })
            } catch (P) {
                if (P instanceof m && P.code === "already_purchased") {
                    try {
                        await t.getUser({
                            force: !0
                        })
                    } catch {}
                    i("purchase_completed", {
                        priceId: k,
                        sessionId: null,
                        restored: !0
                    }),
                    S ? a() : b({
                        kind: "purchase_success",
                        restored: !0
                    });
                    return
                }
                if (z && P instanceof m && P.status === 401 && t.auth && (f.status === "ready" ? f.data.settings.checkout_mode ?? "guest" : "guest") === "preauth") {
                    i("error", P),
                    b({
                        kind: "auth_gate",
                        pendingCheckout: {
                            priceId: k,
                            direct: S
                        },
                        intent: "preauth"
                    });
                    return
                }
                let ee = P instanceof m ? P : new m("checkout_failed","Checkout failed",{
                    cause: P
                });
                i("error", ee),
                S ? a() : b({
                    kind: "layout"
                })
            }
        }
          , U = (k, z) => {
            if (typeof window > "u")
                return;
            let P = window.open(z, "_blank");
            if (P) {
                try {
                    P.opener = null
                } catch {}
                b({
                    kind: "awaiting_payment",
                    priceId: k,
                    url: z
                })
            }
        }
        ;
        R( () => {
            if (_.kind !== "auth_gate" || !y || y.user.is_anonymous || L.current)
                return;
            L.current = !0;
            let k = _.pendingCheckout
              , z = _.origin;
            b({
                kind: "verifying"
            }),
            (async () => {
                if (!c)
                    try {
                        if ((await t.getUser({
                            force: !0
                        })).has_active_subscription) {
                            i("purchase_completed", {
                                priceId: k?.priceId ?? null,
                                sessionId: null,
                                restored: !0
                            }),
                            k?.direct ? a() : b({
                                kind: "purchase_success",
                                restored: !0
                            });
                            return
                        }
                    } catch {}
                if (!k) {
                    z === "standalone" ? a() : b({
                        kind: "layout"
                    });
                    return
                }
                await C(k.priceId, {
                    allowAuthGate: !1
                })
            }
            )().finally( () => {
                L.current = !1
            }
            )
        }
        , [y, _]);
        let A = async (k, z) => {
            if (k === "close") {
                a();
                return
            }
            if (k === "price_selected") {
                i("price_selected", z);
                return
            }
            if (k === "restore") {
                if (!t.auth)
                    return;
                let P = t.auth.getCachedSession();
                if (P && !P.user.is_anonymous)
                    return;
                b({
                    kind: "auth_gate",
                    intent: "restore"
                });
                return
            }
            if (k === "support") {
                b({
                    kind: "support",
                    origin: "layout"
                });
                return
            }
            if (k === "checkout" && f.status === "ready") {
                let P = z?.priceId;
                if (!P) {
                    i("error", new m("no_price","No price selected"));
                    return
                }
                let ee = f.data.settings.checkout_mode ?? "guest"
                  , W = t.auth?.getCachedSession() ?? null
                  , B = !!W && !W.user.is_anonymous;
                if (ee === "preauth" && t.auth && !B) {
                    b({
                        kind: "auth_gate",
                        pendingCheckout: {
                            priceId: P
                        }
                    });
                    return
                }
                await C(P)
            }
        }
          , O = f.status === "ready" ? f.data.settings.brand_color : null
          , K = f.status === "ready" ? f.data.settings.allow_close !== !1 : !0
          , H = _.kind === "layout" && f.status === "ready" ? Qi(f.data.offers) : null
          , X = H ? s(os, {
            offer: H
        }) : null
          , de = {
            type: "auth_panel",
            allow_signup: !0,
            allow_password_reset: !0,
            hide_when_authenticated: !1,
            providers: f.status === "ready" ? f.data.settings.auth_providers : void 0
        }
          , Fe = _.kind === "support" ? s(us, {
            client: t,
            authSession: y,
            origin: _.origin,
            onBack: () => {
                _.origin === "standalone" ? a() : b({
                    kind: "layout"
                })
            }
        }) : null
          , Q = _.kind === "auth_gate" && _.origin !== "standalone" || _.kind === "support"
          , Ve = f.status === "ready" ? f.data : null;
        return s(qr, {
            bootstrap: Ve,
            forceLocale: u,
            children: s(Gr, {
                open: e,
                onClose: a,
                brandColor: O,
                topBanner: X,
                allowClose: K,
                hideCloseButton: Q,
                inline: g,
                labelledBy: "pw-title",
                children: p ? s(se, {
                    children: s(Vi, {
                        onContinue: a
                    })
                }) : _.kind === "purchase_success" ? s(se, {
                    children: s(Vi, {
                        restored: _.restored,
                        onContinue: a
                    })
                }) : Fe || (f.status === "loading" || f.status === "idle" || _.kind === "verifying" ? s(se, {
                    children: s(Vs, {
                        verifying: _.kind === "verifying"
                    })
                }) : f.status === "error" ? s(se, {
                    children: s(Rs, {
                        message: f.error.message
                    })
                }) : _.kind === "auth_gate" && t.auth ? s(as, {
                    block: de,
                    bootstrap: f.data,
                    auth: t.auth,
                    authSession: y,
                    showBack: _.origin !== "standalone",
                    intent: _.intent ?? (_.origin === "standalone" ? "standalone" : "preauth"),
                    resumeCheckout: x(_.pendingCheckout?.priceId),
                    initialMode: _.origin === "standalone" ? r : void 0,
                    onBack: () => {
                        _.origin === "standalone" ? a() : b({
                            kind: "layout"
                        })
                    }
                }) : _.kind === "awaiting_payment" ? s(se, {
                    children: s(Hs, {
                        client: t,
                        onBack: () => b({
                            kind: "layout"
                        }),
                        onReopen: () => {
                            if (typeof window > "u")
                                return;
                            let k = window.open(_.url, "_blank");
                            if (k)
                                try {
                                    k.opener = null
                                } catch {}
                        }
                        ,
                        onRetry: () => C(_.priceId)
                    })
                }) : _.kind === "popup_blocked" ? s(se, {
                    children: s(Ks, {
                        onReopen: () => U(_.priceId, _.url)
                    })
                }) : s(qs, {
                    layout: f.data.layout,
                    bootstrap: f.data,
                    onAction: A,
                    auth: t.auth,
                    authSession: y,
                    titleOverride: h
                }))
            })
        })
    }
    function se({children: t}) {
        return s("div", {
            class: "flex min-h-0 flex-1 flex-col overflow-y-auto",
            children: t
        })
    }
    function Vs({verifying: t}) {
        let {t: e} = N();
        return s("div", {
            class: "flex flex-col items-center justify-center gap-3 py-12",
            children: [s("span", {
                class: "inline-block h-7 w-7 animate-spin rounded-full border-[2.5px] border-gray-200 border-t-[var(--pw-accent)]"
            }), s("span", {
                class: "text-xs font-medium tracking-wide text-gray-500",
                children: t ? e("modal.verifying_subscription", "Checking your subscription\u2026") : e("modal.loading", "Loading\u2026")
            })]
        })
    }
    function Rs({message: t}) {
        let {t: e} = N();
        return s("div", {
            class: "flex flex-col items-center gap-2 py-8 text-center",
            children: [s("div", {
                class: "flex h-11 w-11 items-center justify-center rounded-full bg-red-50",
                children: s("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    "aria-hidden": "true",
                    children: [s("path", {
                        d: "M10 6v5M10 14h.01",
                        stroke: "#dc2626",
                        "stroke-width": "2",
                        "stroke-linecap": "round"
                    }), s("circle", {
                        cx: "10",
                        cy: "10",
                        r: "8",
                        stroke: "#dc2626",
                        "stroke-width": "1.75"
                    })]
                })
            }), s("p", {
                class: "text-sm font-semibold tracking-tight text-gray-900",
                children: e("modal.error_generic", "Something went wrong")
            }), s("p", {
                class: "text-xs leading-relaxed text-gray-500",
                children: t
            })]
        })
    }
    function Ks({onReopen: t}) {
        let {t: e} = N();
        return s("div", {
            class: "flex flex-col items-center gap-3 py-8 text-center",
            children: [s("div", {
                class: "flex h-14 w-14 items-center justify-center rounded-full",
                style: {
                    background: "color-mix(in srgb, var(--pw-accent) 12%, white)",
                    color: "var(--pw-accent)"
                },
                "aria-hidden": "true",
                children: s("svg", {
                    width: "26",
                    height: "26",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [s("path", {
                        d: "M14 4h6v6",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }), s("path", {
                        d: "M20 4l-9 9",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }), s("path", {
                        d: "M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    })]
                })
            }), s("p", {
                id: "pw-title",
                class: "mt-1 text-lg font-semibold tracking-tight text-gray-900",
                children: e("payment.popup_blocked_title", "Allow popups to continue")
            }), s("p", {
                class: "max-w-[20rem] text-sm leading-relaxed text-gray-500",
                children: e("payment.popup_blocked_message", "Your browser blocked the checkout tab. Click below to open it.")
            }), s("button", {
                type: "button",
                onClick: t,
                class: "mt-3 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pw-accent)]",
                style: {
                    background: "linear-gradient(180deg, color-mix(in srgb, var(--pw-accent) 92%, white), var(--pw-accent))",
                    boxShadow: "0 1px 2px rgba(15,23,42,0.08), 0 8px 20px -6px color-mix(in srgb, var(--pw-accent) 50%, transparent)"
                },
                children: e("payment.open_checkout_button", "Open checkout")
            })]
        })
    }
    function Hs({client: t, onBack: e, onReopen: a, onRetry: i}) {
        let {t: n} = N()
          , [r,o] = I(!1)
          , [l,p] = I(!1)
          , c = $(null);
        R( () => () => {
            c.current !== null && clearTimeout(c.current)
        }
        , []);
        let d = async () => {
            if (!r) {
                o(!0),
                p(!1);
                try {
                    if ((await t.getUser({
                        force: !0
                    })).has_active_subscription) {
                        typeof window < "u" && window.postMessage({
                            type: "paywall_purchase"
                        }, "*");
                        return
                    }
                    p(!0),
                    c.current !== null && clearTimeout(c.current),
                    c.current = setTimeout( () => {
                        p(!1),
                        c.current = null
                    }
                    , 5e3)
                } catch {
                    p(!0)
                } finally {
                    o(!1)
                }
            }
        }
        ;
        return s("div", {
            class: "flex flex-col gap-3 px-6 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-5",
            children: [s("button", {
                type: "button",
                onClick: e,
                class: "-ml-1 self-start rounded-md px-1.5 py-0.5 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pw-accent)]",
                children: n("nav.back", "\u2190 Back")
            }), s("div", {
                class: "flex flex-col items-center gap-3 py-6 text-center",
                children: [s("div", {
                    class: "relative flex h-14 w-14 items-center justify-center",
                    children: [s("span", {
                        class: "absolute inset-0 animate-ping rounded-full opacity-40",
                        style: {
                            background: "color-mix(in srgb, var(--pw-accent) 30%, transparent)"
                        },
                        "aria-hidden": "true"
                    }), s("span", {
                        class: "relative inline-block h-8 w-8 animate-spin rounded-full border-[2.5px] border-gray-200 border-t-[var(--pw-accent)]"
                    })]
                }), s("p", {
                    id: "pw-title",
                    class: "mt-1 text-lg font-semibold tracking-tight text-gray-900",
                    children: n("payment.awaiting_title", "Complete payment in the new tab")
                }), s("p", {
                    class: "max-w-[22rem] text-sm leading-relaxed text-gray-500",
                    children: n("payment.awaiting_subtitle", "We'll detect your payment automatically \u2014 or click below once you're done.")
                }), s("button", {
                    type: "button",
                    onClick: d,
                    disabled: r,
                    class: "mt-3 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:brightness-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pw-accent)]",
                    style: {
                        background: "linear-gradient(180deg, color-mix(in srgb, var(--pw-accent) 92%, white), var(--pw-accent))",
                        boxShadow: "0 1px 2px rgba(15,23,42,0.08), 0 8px 20px -6px color-mix(in srgb, var(--pw-accent) 50%, transparent)"
                    },
                    children: r ? n("payment.checking", "Checking\u2026") : n("payment.ive_paid", "I've paid")
                }), l ? s("p", {
                    class: "text-xs leading-relaxed text-gray-500",
                    children: n("payment.still_processing", "Payment is still being processed. Please try again in a moment.")
                }) : null]
            }), s("div", {
                class: "rounded-2xl border border-gray-200 bg-gray-50/60 p-3.5",
                children: [s("p", {
                    class: "text-xs leading-relaxed text-gray-600",
                    children: n("payment.popup_help_text", "Checkout window didn't open or got blocked? Click here to open it again.")
                }), s("button", {
                    type: "button",
                    onClick: a,
                    class: "mt-2.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pw-accent)]",
                    children: n("payment.open_checkout_again", "Open checkout again")
                })]
            }), s("button", {
                type: "button",
                onClick: i,
                class: "self-center rounded-md px-2 py-1 text-xs text-gray-500 underline-offset-2 hover:text-gray-900 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pw-accent)]",
                children: n("payment.tab_closed_retry", "Tab closed? Try again")
            })]
        })
    }
    function Vi({onContinue: t, restored: e=!1}) {
        let {t: a} = N();
        return s("div", {
            class: "flex flex-col items-center gap-4 px-6 py-6 text-center sm:px-8",
            children: [s("div", {
                class: "flex h-14 w-14 items-center justify-center rounded-full",
                style: {
                    background: "linear-gradient(135deg, #4ade80, #16a34a)",
                    color: "#fff",
                    boxShadow: "0 0 0 8px rgba(74,222,128,0.12), 0 8px 20px -6px rgba(22,163,74,0.45)"
                },
                "aria-hidden": "true",
                children: s("svg", {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: s("path", {
                        d: "M5 13l4 4L19 7",
                        stroke: "currentColor",
                        "stroke-width": "2.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    })
                })
            }), s("p", {
                id: "pw-title",
                class: "mt-1 text-3xl font-bold tracking-tight text-gray-900",
                children: e ? a("modal.purchase_restored_title", "Welcome back") : a("modal.purchase_success_title", "Payment received")
            }), s("p", {
                class: "text-base leading-relaxed text-gray-600",
                children: a(e ? "modal.purchase_restored_subtitle" : "modal.purchase_success_subtitle", "You're all set \u2014 enjoy!")
            }), s("button", {
                type: "button",
                onClick: t,
                class: "pw-cta-shimmer relative mt-2 flex min-h-12 w-full items-center justify-center overflow-hidden rounded-3xl px-5 py-2 text-center text-base font-semibold leading-tight text-white transition-transform duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pw-accent)]",
                style: {
                    background: "linear-gradient(135deg, color-mix(in srgb, var(--pw-accent) 55%, white) 0%, var(--pw-accent) 55%, color-mix(in srgb, var(--pw-accent) 90%, black) 100%)",
                    boxShadow: "0 0 20px 0 color-mix(in srgb, var(--pw-accent) 25%, transparent), inset 0 0 8px 0 color-mix(in srgb, white 25%, transparent)"
                },
                children: s("span", {
                    class: "relative z-10",
                    children: a("modal.continue", "Continue")
                })
            })]
        })
    }
    var $s = 10 * 6e4
      , Ws = 5e3
      , Js = 3e4
      , St = class {
        constructor(e) {
            this.timer = null,
            this.timeoutTimer = null,
            this.visibilityHandler = null,
            this.focusHandler = null,
            this.messageHandler = null,
            this.stopped = !1,
            this.checking = !1,
            this.opts = {
                client: e.client,
                onActive: e.onActive,
                onTimeout: e.onTimeout ?? ( () => {}
                ),
                timeoutMs: e.timeoutMs ?? $s,
                visibleIntervalMs: e.visibleIntervalMs ?? Ws,
                hiddenIntervalMs: e.hiddenIntervalMs ?? Js
            }
        }
        start() {
            this.stopped || typeof document > "u" || typeof window > "u" || (this.check(),
            this.scheduleNext(),
            this.visibilityHandler = () => this.handleVisibilityChange(),
            document.addEventListener("visibilitychange", this.visibilityHandler),
            this.focusHandler = () => {
                this.check()
            }
            ,
            window.addEventListener("focus", this.focusHandler),
            this.messageHandler = e => this.handleMessage(e),
            window.addEventListener("message", this.messageHandler),
            this.timeoutTimer = setTimeout( () => {
                this.stopped || (this.stop(),
                this.opts.onTimeout())
            }
            , this.opts.timeoutMs))
        }
        stop() {
            this.stopped = !0,
            this.timer !== null && clearTimeout(this.timer),
            this.timer = null,
            this.timeoutTimer !== null && clearTimeout(this.timeoutTimer),
            this.timeoutTimer = null,
            typeof document < "u" && this.visibilityHandler && document.removeEventListener("visibilitychange", this.visibilityHandler),
            typeof window < "u" && (this.focusHandler && window.removeEventListener("focus", this.focusHandler),
            this.messageHandler && window.removeEventListener("message", this.messageHandler)),
            this.visibilityHandler = null,
            this.focusHandler = null,
            this.messageHandler = null
        }
        async check() {
            if (!(this.stopped || this.checking)) {
                this.checking = !0;
                try {
                    let e = await this.opts.client.getUser({
                        force: !0
                    });
                    if (this.stopped)
                        return;
                    e.has_active_subscription && (this.stop(),
                    this.opts.onActive(e))
                } catch {} finally {
                    this.checking = !1
                }
            }
        }
        scheduleNext() {
            if (this.stopped)
                return;
            let e = typeof document < "u" && document.visibilityState === "visible" ? this.opts.visibleIntervalMs : this.opts.hiddenIntervalMs;
            this.timer = setTimeout(async () => {
                await this.check(),
                this.scheduleNext()
            }
            , e)
        }
        handleVisibilityChange() {
            typeof document > "u" || (document.visibilityState === "visible" && this.check(),
            this.timer !== null && (clearTimeout(this.timer),
            this.timer = null),
            this.scheduleNext())
        }
        handleMessage(e) {
            let a = e.data;
            !a || typeof a != "object" || a.type === "paywall_purchase" && this.check()
        }
    }
    ;
    function Zs() {
        return !(typeof document > "u" || typeof window > "u")
    }
    var vt = {
        open: !1,
        view: null,
        error: null,
        processing: !1
    }
      , le = {
        status: "paywall_status",
        priceId: "paywall_price_id",
        sessionId: "paywall_session_id"
    }
      , Ys = "ms_sdk_purchases_reported:"
      , Xs = 20
      , Qs = class {
        constructor(t) {
            this.handle = null,
            this.isOpen = !1,
            this.listeners = new Map,
            this.userUnsub = null,
            this.authUnsub = null,
            this.watcher = null,
            this.tracker = null,
            this.purchased = !1,
            this.lastMountedView = null,
            this.viewedTracked = !1,
            this.viewedGatePending = !1,
            this.pendingViewed = null,
            this.viewedGateSettled = !1,
            this.trackViewedFn = null,
            this.sentPurchaseKeys = new Set,
            this.checkoutStartedSinceInit = !1,
            this.persistPurchasesChain = Promise.resolve(),
            this.titleOverride = null,
            this.trialStore = null,
            this.trialStoreConfig = null,
            this.lastTrialStatus = null,
            this.trialExpiredFired = !1,
            this.restoredEmitted = !1,
            this.mountedRenew = !1,
            this.checkoutStartedSinceMount = !1,
            this.lastVisibility = null,
            this.currentState = vt,
            this.stateListeners = new Set;
            let {auth: e, ownsAuth: a} = eo(t);
            this.auth = e,
            this.ownsAuth = a,
            this.billing = t.client ?? new ve({
                ...t,
                auth: this.auth
            }),
            this.host = t.host,
            this.shadowMode = t.shadowMode ?? "closed",
            this.mountThenLoad = t.mountThenLoad ?? !0,
            this.inline = t.inline === !0,
            this.forceLocale = t.locale ?? null,
            this.userUnsub = this.billing.onUserChange(i => {
                if (this.emit("userChange", i),
                i.has_active_subscription && (this.lastMountedView === "awaiting_payment" || this.lastMountedView === "popup_blocked")) {
                    this.handlePurchaseDetected(i);
                    return
                }
                i.has_active_subscription && this.isOpen && !this.purchased && !this.mountedRenew && !this.checkoutStartedSinceMount && this.lastMountedView === "layout" && this.currentState.view === "layout" && (this.releaseViewedGate(!1),
                this.close(),
                this.emitRestoredOnce())
            }
            ),
            this.auth && (this.authUnsub = this.auth.onAuthChange( (i, n) => {
                this.emit("authChange", {
                    event: i,
                    session: n
                })
            }
            )),
            this.on("checkout_started", () => {
                this.checkoutStartedSinceInit = !0,
                this.markCheckoutPending()
            }
            ),
            this.initTracker(t.analytics),
            this.loadSentPurchases(),
            t.autoDetectReturn !== !1 && typeof window < "u" && queueMicrotask( () => this.checkReturn())
        }
        purchaseDedupeKey(t) {
            if (t.sessionId)
                return `s:${t.sessionId}`;
            try {
                let e = this.billing.getCachedUser()?.purchases;
                if (!Array.isArray(e))
                    return null;
                let a = e.map(i => i?.id).filter(i => typeof i == "string" && i.length > 0).sort();
                return a.length ? `p:${a.join(",")}` : null
            } catch {
                return null
            }
        }
        shouldTrackPurchase(t) {
            if (this.checkoutStartedSinceInit)
                return !0;
            let e = this.purchaseDedupeKey(t);
            return e ? this.sentPurchaseKeys.has(e) ? !1 : (this.sentPurchaseKeys.add(e),
            this.persistSentPurchases(),
            !0) : !0
        }
        sentPurchasesStorageKey() {
            return `${Ys}${this.billing.paywallId}`
        }
        async loadSentPurchases() {
            try {
                let t = await this.billing.getStorage().getItem(this.sentPurchasesStorageKey());
                if (!t)
                    return;
                let e = JSON.parse(t);
                if (!Array.isArray(e))
                    return;
                for (let a of e)
                    typeof a == "string" && this.sentPurchaseKeys.add(a)
            } catch {}
        }
        persistSentPurchases() {
            return this.persistPurchasesChain = this.persistPurchasesChain.catch( () => {}
            ).then(async () => {
                try {
                    let t = this.billing.getStorage()
                      , e = this.sentPurchasesStorageKey()
                      , a = new Set
                      , i = await t.getItem(e);
                    if (i) {
                        let n = JSON.parse(i);
                        if (Array.isArray(n))
                            for (let r of n)
                                typeof r == "string" && a.add(r)
                    }
                    for (let n of this.sentPurchaseKeys)
                        a.delete(n),
                        a.add(n);
                    for (let n of a)
                        this.sentPurchaseKeys.add(n);
                    await t.setItem(e, JSON.stringify(Array.from(a).slice(-Xs)))
                } catch {}
            }
            ),
            this.persistPurchasesChain
        }
        acceptViewed(t) {
            return this.lastMountedView !== "layout" || this.viewedGateSettled ? !1 : this.viewedGatePending ? (this.pendingViewed = t,
            !1) : (this.viewedTracked = !0,
            !0)
        }
        releaseViewedGate(t) {
            this.viewedGatePending = !1;
            let e = this.pendingViewed;
            this.pendingViewed = null,
            t || (this.viewedGateSettled = !0),
            !(!t || !e || this.lastMountedView !== "layout") && (this.viewedTracked = !0,
            this.trackViewedFn?.(e))
        }
        initTracker(t) {
            if (t === !1)
                return;
            let e = typeof t == "object" && t !== null ? t : {};
            if (e.enabled === !1)
                return;
            let a = e.endpoint ?? ( () => `${this.billing.activeApiOrigin()}/api/v1/paywall/${this.billing.paywallId}/events`);
            this.tracker = new ke({
                endpoint: a,
                paywallId: this.billing.paywallId,
                capabilities: this.billing.capabilities,
                getVisitorId: () => this.billing.getVisitorId(),
                getCachedVisitorId: () => this.billing.getCachedVisitorId(),
                getUserId: () => this.billing.getIdentity()?.userId ?? null,
                getExperimentContext: () => {
                    let i = this.billing.getCachedBootstrap()?.experiment;
                    return i?.assigned_variant ? {
                        experiment_id: i.id,
                        variant: i.assigned_variant
                    } : null
                }
                ,
                flushIntervalMs: e.flushIntervalMs,
                maxBufferSize: e.maxBufferSize,
                fetch: e.fetch,
                sendBeacon: e.sendBeacon
            }),
            this.trackViewedFn = i => {
                this.tracker?.track("paywall_viewed", {
                    is_test_mode: i.settings.is_test_mode,
                    prices_count: i.prices.length,
                    offers_count: i.offers.length,
                    ...this.titleOverride ? {
                        custom_title: !0
                    } : {}
                })
            }
            ,
            this.on("ready", i => {
                this.acceptViewed(i) && this.trackViewedFn?.(i)
            }
            ),
            this.on("price_selected", i => this.tracker?.track("price_selected", {
                price_id: i.priceId
            })),
            this.on("checkout_started", i => this.tracker?.track("checkout_started", {
                price_id: i.priceId,
                acquiring: i.acquiring
            })),
            this.on("purchase_completed", i => {
                i.restored || this.shouldTrackPurchase(i) && this.tracker?.track("purchase_completed", {
                    price_id: i.priceId,
                    session_id: i.sessionId
                })
            }
            ),
            this.on("purchase_failed", i => this.tracker?.track("purchase_failed", {
                reason: i.reason
            })),
            this.on("close", () => {
                this.viewedGatePending && this.releaseViewedGate(!0),
                this.viewedTracked && this.tracker?.track("paywall_closed"),
                this.viewedTracked = !1,
                this.viewedGateSettled = !0
            }
            ),
            this.on("trial_blocked", i => this.tracker?.track("trial_blocked", {
                mode: i.mode,
                ...i.mode === "time" ? {
                    remaining_ms: i.remainingMs,
                    total_ms: i.totalMs
                } : i.mode === "opens" ? {
                    remaining_actions: i.remainingActions,
                    total_actions: i.totalActions
                } : {}
            })),
            this.on("trial_expired", () => this.tracker?.track("trial_expired")),
            this.on("visibility_blocked", i => this.tracker?.track("visibility_blocked", {
                reason: i.reason,
                country: i.country,
                tier: i.tier
            })),
            this.on("error", i => this.tracker?.track("error", {
                code: i.code,
                message: i.message
            }))
        }
        track(t, e) {
            this.tracker?.track(t, e)
        }
        onUserChange(t) {
            return this.on("userChange", t)
        }
        setBootstrap(t) {
            this.billing.setBootstrap(t)
        }
        setLocale(t) {
            let e = t ?? null;
            e !== this.forceLocale && (this.forceLocale = e,
            this.handle && this.handle.update({
                locale: e
            }))
        }
        on(t, e) {
            let a = this.listeners.get(t);
            return a || (a = new Set,
            this.listeners.set(t, a)),
            a.add(e),
            () => a.delete(e)
        }
        off(t, e) {
            this.listeners.get(t)?.delete(e)
        }
        emit(t, ...e) {
            let a = this.listeners.get(t);
            if (!a)
                return;
            let i = e[0];
            for (let n of a)
                try {
                    n(i)
                } catch (r) {
                    typeof console < "u" && console.error("[paywall] listener error", r)
                }
        }
        open(t={}) {
            this.openInternal("layout", t)
        }
        async preload(t={}) {
            try {
                await this.billing.bootstrap({
                    signal: t.signal
                }),
                this.billing.auth && await this.billing.getBalances({
                    signal: t.signal
                })
            } catch {}
        }
        openSupport(t={}) {
            this.openInternal("support", t)
        }
        openAuth(t={}) {
            this.auth && this.openInternal("auth", {
                ...t,
                skipTrial: !0
            })
        }
        openSignin(t={}) {
            this.auth && this.openInternal("auth", {
                ...t,
                skipTrial: !0,
                authMode: "signin"
            })
        }
        openSignup(t={}) {
            this.auth && this.openInternal("auth", {
                ...t,
                skipTrial: !0,
                authMode: "signup"
            })
        }
        checkout(t, e={}) {
            if (e.identity && this.billing.setIdentity(e.identity),
            e.renew !== !0 && this.billing.getCachedUser()?.has_active_subscription) {
                this.emit("purchase_completed", {
                    priceId: t,
                    sessionId: null,
                    restored: !0
                });
                return
            }
            this.runDirectCheckout(t, e)
        }
        async runDirectCheckout(t, e) {
            let a = e.renew === !0
              , i = e.skipTrial === !0
              , n = e.skipVisibility === !0;
            this.applyProcessing(!0);
            let r = () => {
                this.applyProcessing(!1)
            }
            , o;
            try {
                o = await this.billing.bootstrap()
            } catch (h) {
                let f = h instanceof m ? h : new m("unknown","Failed to load paywall",{
                    cause: h
                });
                this.emit("error", f),
                r();
                return
            }
            if (!n) {
                let h = o.settings.visibility;
                if (h && (this.lastVisibility = h,
                !h.visible)) {
                    this.emit("visibility_blocked", h),
                    r();
                    return
                }
            }
            if (!i && await this.checkTrialBeforeCheckout(o)) {
                r();
                return
            }
            if (!a && o.user?.has_active_subscription) {
                this.emit("purchase_completed", {
                    priceId: t,
                    sessionId: null,
                    restored: !0
                }),
                r();
                return
            }
            let l = o.settings.checkout_mode ?? "guest"
              , p = this.auth?.getCachedSession() ?? null
              , c = !!p && !p.user.is_anonymous;
            if (l === "preauth" && this.auth && !c) {
                this.purchased = !1,
                this.mountAndShow("auth", {
                    renew: a,
                    authMode: "signin",
                    checkoutPriceId: t
                });
                return
            }
            let d = this.getOfferForPrice(t), g;
            try {
                g = await this.billing.createCheckout({
                    priceId: t,
                    offerId: d?.offer.id,
                    ignoreActivePurchase: a
                })
            } catch (h) {
                if (h instanceof m && h.code === "already_purchased") {
                    try {
                        await this.billing.getUser({
                            force: !0
                        })
                    } catch {}
                    this.emit("purchase_completed", {
                        priceId: t,
                        sessionId: null,
                        restored: !0
                    }),
                    r();
                    return
                }
                if (h instanceof m && h.status === 401 && this.auth && l === "preauth") {
                    this.emit("error", h),
                    this.purchased = !1,
                    this.mountAndShow("auth", {
                        renew: a,
                        authMode: "signin",
                        checkoutPriceId: t
                    });
                    return
                }
                let f = h instanceof m ? h : new m("checkout_failed","Checkout failed",{
                    cause: h
                });
                this.emit("error", f),
                r();
                return
            }
            if (this.emit("checkout_started", {
                priceId: t,
                url: g.url,
                acquiring: g.acquiring
            }),
            this.startUserWatcher(),
            typeof window > "u" || !g.url) {
                this.mountAndShow("awaiting_payment", {
                    renew: a,
                    checkoutPriceId: t,
                    checkoutUrl: g.url
                });
                return
            }
            let u = window.open(g.url, "_blank");
            if (this.purchased = !1,
            u) {
                try {
                    u.opener = null
                } catch {}
                this.mountAndShow("awaiting_payment", {
                    renew: a,
                    checkoutPriceId: t,
                    checkoutUrl: g.url
                })
            } else
                this.mountAndShow("popup_blocked", {
                    renew: a,
                    checkoutPriceId: t,
                    checkoutUrl: g.url
                })
        }
        async checkTrialBeforeCheckout(t) {
            let e = t.settings.trial;
            if (!e)
                return !1;
            let a = this.ensureTrialStore(e);
            try {
                let i = await a.check();
                if (this.lastTrialStatus = i,
                i.mode === "none")
                    return !1;
                if (i.blocked) {
                    let n = await a.recordBlock();
                    return this.lastTrialStatus = n,
                    this.emit("trial_blocked", n),
                    !0
                }
                return this.trialExpiredFired || (this.trialExpiredFired = !0,
                this.emit("trial_expired")),
                !1
            } catch (i) {
                return typeof console < "u" && console.warn("[paywall] trial check failed", i),
                !1
            }
        }
        applyProcessing(t) {
            this.currentState.processing !== t && this.applyState({
                ...this.currentState,
                processing: t
            })
        }
        signInAnonymously() {
            return this.auth ? this.auth.signInAnonymously() : Promise.reject(new m("invalid_config","signInAnonymously requires managed-auth. Pass `auth: true` to PaywallUI."))
        }
        openInternal(t, e) {
            if (e.identity && this.billing.setIdentity(e.identity),
            this.purchased = !1,
            t === "layout" && e.renew !== !0) {
                if (this.billing.getCachedUser()?.has_active_subscription) {
                    this.emitRestoredOnce();
                    return
                }
                if (this.canResolveUser()) {
                    this.billing.getSettledUser().then(a => {
                        if (a?.has_active_subscription) {
                            this.emitRestoredOnce();
                            return
                        }
                        this.proceedOpen(t, e)
                    }
                    );
                    return
                }
            }
            this.proceedOpen(t, e)
        }
        canResolveUser() {
            return !!this.auth || !!this.billing.getIdentity()
        }
        proceedOpen(t, e) {
            let a = e.skipTrial === !0 || t === "support"
              , i = e.skipVisibility === !0 || t === "support" || t === "auth"
              , n = e.renew === !0
              , r = e.title ?? null;
            if (a && i) {
                this.mountAndShow(t, {
                    renew: n,
                    authMode: e.authMode,
                    title: r
                });
                return
            }
            let o = this.billing.getCachedBootstrap();
            if (o) {
                this.runOpenGates(t, o, {
                    skipTrial: a,
                    skipVisibility: i,
                    renew: n,
                    title: r
                });
                return
            }
            if (this.mountThenLoad) {
                this.mountAndShow(t, {
                    renew: n,
                    title: r
                }),
                this.viewedGatePending = !0,
                this.billing.bootstrap().then(l => this.runDelayedGates(l, {
                    skipTrial: a,
                    skipVisibility: i,
                    renew: n
                })).catch( () => {
                    this.releaseViewedGate(!0)
                }
                );
                return
            }
            this.billing.bootstrap().then(l => this.runOpenGates(t, l, {
                skipTrial: a,
                skipVisibility: i,
                renew: n,
                title: r
            })).catch( () => {
                this.mountAndShow(t, {
                    renew: n,
                    title: r
                })
            }
            )
        }
        async runDelayedGates(t, e) {
            if (!this.isOpen) {
                this.releaseViewedGate(!1);
                return
            }
            if (!e.renew) {
                let n = this.billing.getCachedUser();
                if (!n?.has_active_subscription && this.canResolveUser() && (n = await this.billing.getSettledUser() ?? n,
                !this.isOpen)) {
                    this.releaseViewedGate(!1);
                    return
                }
                if (n?.has_active_subscription) {
                    this.releaseViewedGate(!1),
                    this.close(),
                    this.emitRestoredOnce();
                    return
                }
            }
            if (!e.skipVisibility) {
                let n = t.settings.visibility;
                if (n && (this.lastVisibility = n,
                !n.visible)) {
                    this.releaseViewedGate(!1),
                    this.close(),
                    this.emit("visibility_blocked", n);
                    return
                }
            }
            if (e.skipTrial) {
                this.releaseViewedGate(!0);
                return
            }
            let a = t.settings.trial;
            if (!a) {
                this.releaseViewedGate(!0);
                return
            }
            let i = this.ensureTrialStore(a);
            i.check().then(async n => {
                if (!this.isOpen) {
                    this.releaseViewedGate(!1);
                    return
                }
                if (this.lastTrialStatus = n,
                n.mode === "none") {
                    this.releaseViewedGate(!0);
                    return
                }
                if (n.blocked) {
                    let r = await i.recordBlock();
                    if (this.lastTrialStatus = r,
                    !this.isOpen) {
                        this.releaseViewedGate(!1);
                        return
                    }
                    this.releaseViewedGate(!1),
                    this.close(),
                    this.emit("trial_blocked", r);
                    return
                }
                this.releaseViewedGate(!0),
                this.trialExpiredFired || (this.trialExpiredFired = !0,
                this.emit("trial_expired"))
            }
            ).catch(n => {
                this.releaseViewedGate(!0),
                typeof console < "u" && console.warn("[paywall] trial check failed", n)
            }
            )
        }
        runOpenGates(t, e, a) {
            if (t === "layout" && !a.renew && this.billing.getCachedUser()?.has_active_subscription) {
                this.emitRestoredOnce();
                return
            }
            if (!a.skipVisibility) {
                let i = e.settings.visibility;
                if (i && (this.lastVisibility = i,
                !i.visible)) {
                    this.emit("visibility_blocked", i);
                    return
                }
            }
            if (a.skipTrial) {
                this.mountAndShow(t, {
                    renew: a.renew,
                    title: a.title
                });
                return
            }
            this.gateThroughTrial(t, e, a.renew, a.title)
        }
        gateThroughTrial(t, e, a, i) {
            let n = e.settings.trial;
            if (!n) {
                this.mountAndShow(t, {
                    renew: a,
                    title: i
                });
                return
            }
            let r = this.ensureTrialStore(n);
            r.check().then(async o => {
                if (this.lastTrialStatus = o,
                o.mode === "none") {
                    this.mountAndShow(t, {
                        renew: a,
                        title: i
                    });
                    return
                }
                if (o.blocked) {
                    let l = await r.recordBlock();
                    this.lastTrialStatus = l,
                    this.emit("trial_blocked", l);
                    return
                }
                this.trialExpiredFired || (this.trialExpiredFired = !0,
                this.emit("trial_expired")),
                this.mountAndShow(t, {
                    renew: a,
                    title: i
                })
            }
            ).catch(o => {
                typeof console < "u" && console.warn("[paywall] trial check failed", o),
                this.mountAndShow(t, {
                    renew: a,
                    title: i
                })
            }
            )
        }
        ensureTrialStore(t) {
            if (this.trialStore && this.trialStoreConfig && io(this.trialStoreConfig, t))
                return this.trialStore;
            this.trialStoreConfig = t;
            let e = this.billing.createTrialStore;
            return this.trialStore = typeof e == "function" ? e.call(this.billing, t) : ia(this.billing.getStorage(), this.billing.paywallId, t),
            this.trialStore
        }
        mountAndShow(t, e={}) {
            this.lastMountedView = t,
            this.viewedTracked = !1,
            this.viewedGatePending = !1,
            this.pendingViewed = null,
            this.viewedGateSettled = !1;
            let a = e.renew === !0;
            this.mountedRenew = a,
            this.checkoutStartedSinceMount = !1;
            let i = e.authMode
              , n = t === "layout" ? e.title ?? null : null;
            this.titleOverride = n;
            let r = t === "auth" || t === "awaiting_payment" || t === "popup_blocked" ? e.checkoutPriceId ?? null : null
              , o = t === "awaiting_payment" || t === "popup_blocked" ? e.checkoutUrl ?? null : null;
            if (this.handle) {
                this.isOpen = !0,
                this.handle.update({
                    open: !0,
                    initialView: t,
                    initialAuthMode: i,
                    initialCheckoutPriceId: r,
                    initialCheckoutUrl: o,
                    purchased: !1,
                    renew: a,
                    titleOverride: n
                }),
                this.emit("open");
                return
            }
            this.isOpen = !0,
            this.handle = Er(Fs, {
                client: this.billing,
                open: !0,
                initialView: t,
                initialAuthMode: i,
                initialCheckoutPriceId: r,
                initialCheckoutUrl: o,
                purchased: !1,
                renew: a,
                titleOverride: n,
                onClose: () => this.close(),
                onEvent: (l, p) => {
                    this.emit(l, p),
                    l === "checkout_started" && (this.checkoutStartedSinceMount = !0,
                    this.startUserWatcher())
                }
                ,
                onState: l => this.applyState(l),
                inline: this.inline,
                locale: this.forceLocale
            }, {
                host: this.host,
                shadowMode: this.shadowMode,
                inline: this.inline
            }),
            this.emit("open")
        }
        applyState(t) {
            if (!ao(this.currentState, t)) {
                this.currentState = t;
                for (let e of this.stateListeners)
                    try {
                        e(t)
                    } catch (a) {
                        console.warn("[paywall] onStateChange listener threw", a)
                    }
            }
        }
        getState() {
            return this.currentState
        }
        onStateChange(t, e={}) {
            this.stateListeners.add(t);
            let a = e.immediate ?? "microtask";
            if (a !== "none") {
                let i = this.currentState;
                if (a === "sync")
                    try {
                        t(i)
                    } catch (n) {
                        console.warn("[paywall] onStateChange initial sync threw", n)
                    }
                else
                    queueMicrotask( () => {
                        this.stateListeners.has(t) && t(i)
                    }
                    )
            }
            return () => {
                this.stateListeners.delete(t)
            }
        }
        getTrialStatus() {
            return this.lastTrialStatus
        }
        getVisibility() {
            return this.lastVisibility
        }
        getPrices(t={}) {
            return this.billing.getPrices(t)
        }
        getCachedPrices() {
            return this.billing.getCachedPrices()
        }
        getCachedOffers() {
            return this.billing.getCachedOffers()
        }
        getOfferForPrice(t) {
            let e = this.billing.getCachedOffers();
            if (!e)
                return null;
            let a = Ki(e, t);
            return a ? Hi(a, {
                now: Date.now(),
                readStart: ie
            }) : null
        }
        getUserLanguage() {
            return this.billing.getUserLanguage()
        }
        async getAccess(t={}) {
            let e = this.billing.getCachedBootstrap();
            if (!e)
                try {
                    e = await this.billing.bootstrap({
                        signal: t.signal
                    })
                } catch {
                    let r = this.billing.getCachedUser();
                    try {
                        let o = this.billing.peekCachedUser;
                        if (typeof o == "function") {
                            let l = await o.call(this.billing);
                            l?.has_active_subscription && (r = l)
                        }
                    } catch {}
                    return r?.has_active_subscription ? {
                        access: "granted",
                        reason: "has_subscription",
                        visibility: null,
                        trial: null,
                        user: r
                    } : {
                        access: "blocked",
                        reason: "no_subscription",
                        visibility: null,
                        trial: null,
                        user: r
                    }
                }
            let a = this.billing.getCachedUser();
            if (!a?.has_active_subscription && this.canResolveUser() && (a = await this.billing.getSettledUser({
                signal: t.signal
            }) ?? a),
            a || (a = e.user ?? null),
            a?.has_active_subscription)
                return {
                    access: "granted",
                    reason: "has_subscription",
                    visibility: e.settings.visibility ?? null,
                    trial: null,
                    user: a
                };
            let i = null;
            if (!t.skipVisibility) {
                let r = e.settings.visibility;
                if (r && (i = r,
                this.lastVisibility = r,
                !r.visible))
                    return {
                        access: "granted",
                        reason: "visibility_blocked",
                        visibility: i,
                        trial: null,
                        user: a
                    }
            }
            let n = null;
            if (!t.skipTrial) {
                let r = e.settings.trial;
                if (r)
                    try {
                        if (n = await this.ensureTrialStore(r).check(),
                        this.lastTrialStatus = n,
                        n.blocked)
                            return {
                                access: "granted",
                                reason: "trial_blocked",
                                visibility: i,
                                trial: n,
                                user: a
                            }
                    } catch (o) {
                        typeof console < "u" && console.warn("[paywall] getAccess: trial check failed", o)
                    }
            }
            return {
                access: "blocked",
                reason: "no_subscription",
                visibility: i,
                trial: n,
                user: a
            }
        }
        async resetTrial() {
            this.trialStore && (await this.trialStore.reset(),
            this.lastTrialStatus = null,
            this.trialExpiredFired = !1)
        }
        startUserWatcher() {
            this.watcher || Zs() && (this.watcher = new St({
                client: this.billing,
                onActive: t => this.handlePurchaseDetected(t),
                onTimeout: () => {
                    this.watcher = null
                }
            }),
            this.watcher.start())
        }
        handlePurchaseDetected(t) {
            if (this.purchased)
                return;
            this.purchased = !0,
            this.watcher && (this.watcher.stop(),
            this.watcher = null),
            this.emit("purchase_completed", {
                priceId: null,
                sessionId: null
            });
            let e = this.billing.getCachedBootstrap()?.settings.success_redirect_url;
            if (e && typeof window < "u")
                try {
                    window.location.assign(e);
                    return
                } catch {}
            this.isOpen && this.handle && this.handle.update({
                purchased: !0
            })
        }
        markCheckoutPending() {
            try {
                Promise.resolve(this.billing.getStorage().setItem(q.checkoutPending(this.billing.paywallId), JSON.stringify({
                    at: Date.now()
                }))).catch( () => {}
                )
            } catch {}
        }
        emitRestoredOnce() {
            this.restoredEmitted || (this.restoredEmitted = !0,
            this.emit("purchase_completed", {
                priceId: null,
                sessionId: null,
                restored: !0
            }))
        }
        close() {
            !this.isOpen || !this.handle || (this.isOpen = !1,
            this.purchased = !1,
            this.handle.update({
                open: !1,
                purchased: !1
            }),
            this.applyState(vt),
            this.emit("close"))
        }
        checkReturn() {
            if (typeof window > "u")
                return;
            let t = new URL(window.location.href)
              , e = Ri(t.hash.replace(/^#/, ""))
              , a = Ri(t.search.replace(/^\?/, ""))
              , i = e ?? a;
            i && (i.status === "paid" ? (this.emit("purchase_completed", {
                priceId: i.priceId,
                sessionId: i.sessionId
            }),
            no(i)) : (i.status === "failed" || i.status === "cancelled") && this.emit("purchase_failed", {
                reason: i.status
            }),
            ro(t))
        }
        destroy() {
            this.tracker?.destroy(),
            this.tracker = null,
            this.listeners.clear(),
            this.stateListeners.clear(),
            this.watcher?.stop(),
            this.watcher = null,
            this.userUnsub?.(),
            this.userUnsub = null,
            this.authUnsub?.(),
            this.authUnsub = null,
            this.ownsAuth && this.auth && this.auth.destroy?.(),
            this.ownsAuth = !1,
            this.billing.destroy?.(),
            this.handle?.unmount(),
            this.handle = null,
            this.isOpen = !1,
            this.currentState = vt
        }
    }
    ;
    function eo(t) {
        if (!t.auth)
            return {
                auth: void 0,
                ownsAuth: !1
            };
        if (t.auth instanceof ce || to(t.auth))
            return {
                auth: t.auth,
                ownsAuth: !1
            };
        let e = t.auth === !0 ? {} : t.auth;
        return {
            auth: new ce({
                paywallId: t.paywallId,
                apiOrigin: e.apiOrigin ?? t.apiOrigin,
                storage: e.storage ?? t.storage,
                fetch: e.fetch ?? t.fetch,
                openPopup: e.openPopup
            }),
            ownsAuth: !0
        }
    }
    function to(t) {
        if (typeof t != "object" || t === null)
            return !1;
        let e = t;
        return typeof e.onAuthChange == "function" && typeof e.getCachedSession == "function" && typeof e.signOut == "function"
    }
    function ao(t, e) {
        return t.open === e.open && t.view === e.view && t.error === e.error && t.processing === e.processing
    }
    function io(t, e) {
        return t.mode === e.mode && t.payload === e.payload && t.storage === e.storage
    }
    function Ri(t) {
        if (!t)
            return null;
        let e = new URLSearchParams(t)
          , a = e.get(le.status);
        return a ? {
            status: a,
            priceId: e.get(le.priceId),
            sessionId: e.get(le.sessionId)
        } : null
    }
    function no(t) {
        if (!(typeof window > "u" || !window.opener))
            try {
                window.opener.postMessage({
                    type: "paywall_purchase",
                    status: t.status,
                    priceId: t.priceId,
                    sessionId: t.sessionId
                }, "*")
            } catch {}
    }
    function ro(t) {
        let e = (i, n) => {
            if (!i)
                return "";
            let r = new URLSearchParams(i.replace(/^[?#]/, ""));
            r.delete(le.status),
            r.delete(le.priceId),
            r.delete(le.sessionId);
            let o = r.toString();
            return o ? n + o : ""
        }
          , a = t.pathname + e(t.search, "?") + e(t.hash, "#");
        window.history.replaceState(null, "", a)
    }
    var It = class {
        constructor(e, a, i) {
            this.transport = e,
            this.paywallId = a,
            this.config = i
        }
        async check() {
            return this.transport.request("trial.check", {
                paywallId: this.paywallId,
                config: this.config
            })
        }
        async recordBlock() {
            return this.transport.request("trial.recordBlock", {
                paywallId: this.paywallId,
                config: this.config
            })
        }
        async reset() {
            await this.transport.request("trial.reset", {
                paywallId: this.paywallId,
                config: this.config
            })
        }
    }
      , zt = class {
        constructor(e, a) {
            this.transport = e,
            this.cachedBootstrap = null,
            this.cachedUser = null,
            this.cachedBalances = null,
            this.identity = null,
            this.userListeners = new Set,
            this.balanceListeners = new Set,
            this.bootstrapListeners = new Set,
            this.unsubUserBroadcast = null,
            this.unsubBalancesBroadcast = null,
            this.paywallId = a.paywallId,
            this.apiOrigin = a.apiOrigin,
            this.remoteStorageAdapter = {
                getItem: i => this.transport.request("storage.get", {
                    key: i
                }),
                setItem: async (i, n) => {
                    await this.transport.request("storage.set", {
                        key: i,
                        value: n
                    })
                }
                ,
                removeItem: async i => {
                    await this.transport.request("storage.remove", {
                        key: i
                    })
                }
            },
            this.unsubUserBroadcast = this.transport.on("userChange", i => {
                this.applyUser(i)
            }
            ),
            this.unsubBalancesBroadcast = this.transport.on("balancesChange", i => {
                this.applyBalances([...i])
            }
            )
        }
        async bootstrap(e={}) {
            let a = await this.transport.request("billing.bootstrap", {
                force: e.force
            }, {
                signal: e.signal
            });
            return this.applyBootstrap(a),
            a.user && this.applyUser(a.user),
            a
        }
        getCachedBootstrap() {
            return this.cachedBootstrap
        }
        activeApiOrigin() {
            return this.apiOrigin ?? ""
        }
        getExperimentAssignment() {
            let e = this.cachedBootstrap?.experiment;
            return e?.assigned_variant ? {
                experimentId: e.id,
                variant: e.assigned_variant
            } : null
        }
        onBootstrapChange(e, a={}) {
            this.bootstrapListeners.add(e);
            let i = a.immediate ?? "microtask";
            if (this.cachedBootstrap && i !== "none") {
                let n = this.cachedBootstrap;
                if (i === "sync")
                    try {
                        e(n)
                    } catch (r) {
                        console.warn("[paywall] onBootstrapChange initial sync threw", r)
                    }
                else
                    queueMicrotask( () => {
                        this.bootstrapListeners.has(e) && e(n)
                    }
                    )
            }
            return () => {
                this.bootstrapListeners.delete(e)
            }
        }
        async getPrices(e={}) {
            return (await this.bootstrap(e)).prices
        }
        getCachedPrices() {
            return this.cachedBootstrap?.prices ?? null
        }
        getCachedOffers() {
            return this.cachedBootstrap?.offers ?? null
        }
        async getVisitorId() {
            return this.transport.request("billing.getVisitorId", void 0)
        }
        async getUser(e={}) {
            let a = await this.transport.request("billing.getUser", {
                force: e.force
            }, {
                signal: e.signal
            });
            return this.applyUser(a),
            a
        }
        getCachedUser() {
            return this.cachedUser
        }
        async peekCachedUser() {
            try {
                return await this.transport.request("billing.getCachedUser", void 0) ?? this.cachedUser
            } catch {
                return this.cachedUser
            }
        }
        async getSettledUser(e={}) {
            try {
                let a = await this.transport.request("billing.getSettledUser", void 0, {
                    signal: e.signal
                });
                return a && this.applyUser(a),
                a
            } catch {
                return this.cachedUser
            }
        }
        onUserChange(e, a={}) {
            this.userListeners.add(e);
            let i = a.immediate ?? "microtask";
            if (this.cachedUser && i !== "none") {
                let n = this.cachedUser;
                if (i === "sync")
                    try {
                        e(n)
                    } catch (r) {
                        console.warn("[paywall] onUserChange initial sync threw", r)
                    }
                else
                    queueMicrotask( () => {
                        this.userListeners.has(e) && e(n)
                    }
                    )
            }
            return () => {
                this.userListeners.delete(e)
            }
        }
        async getBalances(e={}) {
            let a = [...await this.transport.request("billing.getBalances", {
                force: e.force
            }, {
                signal: e.signal
            })];
            return this.applyBalances(a),
            a
        }
        getCachedBalances() {
            return this.cachedBalances
        }
        onBalanceChange(e, a={}) {
            this.balanceListeners.add(e);
            let i = a.immediate ?? "microtask";
            if (this.cachedBalances && i !== "none") {
                let n = this.cachedBalances;
                if (i === "sync")
                    try {
                        e(n)
                    } catch (r) {
                        console.warn("[paywall] onBalanceChange initial sync threw", r)
                    }
                else
                    queueMicrotask( () => {
                        this.balanceListeners.has(e) && e(n)
                    }
                    )
            }
            return () => {
                this.balanceListeners.delete(e)
            }
        }
        async createCheckout(e) {
            let {signal: a, ...i} = e;
            return this.transport.request("billing.createCheckout", i, {
                signal: a
            })
        }
        async listPurchases(e={}) {
            return [...await this.transport.request("billing.listPurchases", void 0, {
                signal: e.signal
            })]
        }
        async createSupportTicket(e) {
            let a = e.files ?? [];
            if (a.length > et)
                throw new m("too_many_files",`Up to ${et} files`,{
                    status: 400
                });
            for (let n of a)
                if (!(n instanceof File) || n.size > tt)
                    throw new m("invalid_file",`Each attachment must be a File \u2264 ${tt} bytes`,{
                        status: 400
                    });
            let i = [];
            for (let n of a) {
                let r = new Uint8Array(await n.arrayBuffer())
                  , {fileId: o} = await this.transport.request("billing.stageSupportFile", {
                    name: n.name,
                    type: n.type,
                    dataBase64: na(r)
                });
                i.push(o)
            }
            return this.transport.request("billing.createSupportTicket", {
                subject: e.subject,
                content: e.content,
                email: e.email,
                fileIds: i.length > 0 ? i : void 0
            })
        }
        async cancelSubscription(e) {
            let {signal: a, ...i} = e;
            return this.transport.request("billing.cancelSubscription", i, {
                signal: a
            })
        }
        async getCustomerPortalUrl(e={}) {
            return this.transport.request("billing.getCustomerPortalUrl", {
                returnUrl: e.returnUrl
            }, {
                signal: e.signal
            })
        }
        getStorage() {
            return this.remoteStorageAdapter
        }
        createTrialStore(e) {
            return new It(this.transport,this.paywallId,e)
        }
        getIdentity() {
            return this.identity
        }
        async setIdentity(e) {
            this.identity = e,
            await this.transport.request("billing.setIdentity", {
                identity: e
            })
        }
        async syncIdentity() {
            let e = await this.transport.request("billing.getIdentity", void 0);
            return this.identity = e,
            e
        }
        destroy() {
            this.unsubUserBroadcast?.(),
            this.unsubBalancesBroadcast?.(),
            this.unsubUserBroadcast = null,
            this.unsubBalancesBroadcast = null,
            this.userListeners.clear(),
            this.balanceListeners.clear(),
            this.bootstrapListeners.clear(),
            this.cachedBootstrap = null,
            this.cachedUser = null,
            this.cachedBalances = null,
            this.identity = null
        }
        applyBootstrap(e) {
            this.cachedBootstrap = e;
            for (let a of [...this.bootstrapListeners])
                try {
                    a(e)
                } catch (i) {
                    console.warn("[paywall] onBootstrapChange listener threw", i)
                }
        }
        applyUser(e) {
            so(this.cachedUser, e) || (this.cachedUser = e,
            this.fireUserListeners(e))
        }
        applyBalances(e) {
            oo(this.cachedBalances, e) || (this.cachedBalances = e,
            this.fireBalanceListeners(e))
        }
        fireUserListeners(e) {
            for (let a of [...this.userListeners])
                try {
                    a(e)
                } catch (i) {
                    console.warn("[paywall] onUserChange listener threw", i)
                }
        }
        fireBalanceListeners(e) {
            for (let a of [...this.balanceListeners])
                try {
                    a(e)
                } catch (i) {
                    console.warn("[paywall] onBalanceChange listener threw", i)
                }
        }
    }
    ;
    function so(t, e) {
        return t === e ? !0 : !t || !e ? !1 : t.has_active_subscription === e.has_active_subscription && (t.purchases?.length ?? 0) === (e.purchases?.length ?? 0)
    }
    function oo(t, e) {
        if (t === e)
            return !0;
        if (!t || !e || t.length !== e.length)
            return !1;
        for (let a = 0; a < t.length; a++)
            if (t[a].type !== e[a].type || t[a].count !== e[a].count)
                return !1;
        return !0
    }
    var Ct = class {
        constructor(e, a) {
            this.transport = e,
            this.session = null,
            this.listeners = new Set,
            this.unsubBroadcast = null,
            this.paywallId = a.paywallId,
            this.apiOrigin = a.apiOrigin,
            this.unsubBroadcast = this.transport.on("authChange", ({event: i, session: n}) => {
                this.applySession(i, n)
            }
            ),
            this.hydrated = this.transport.request("auth.getCachedSession", void 0).then(i => {
                this.session === null && i !== null && (this.session = i)
            }
            ).catch( () => {}
            )
        }
        ready() {
            return this.hydrated
        }
        getCachedSession() {
            return this.session
        }
        getCachedUser() {
            return this.session?.user ?? null
        }
        onAuthChange(e) {
            return this.listeners.add(e),
            this.hydrated.then( () => {
                if (this.listeners.has(e))
                    try {
                        e("INITIAL_SESSION", this.session)
                    } catch (a) {
                        console.warn("[paywall] onAuthChange INITIAL_SESSION threw", a)
                    }
            }
            ),
            () => {
                this.listeners.delete(e)
            }
        }
        async signInWithEmail(e) {
            let a = await this.transport.request("auth.signInWithEmail", e);
            return this.applySession("SIGNED_IN", a),
            a
        }
        async signUp(e) {
            let a = await this.transport.request("auth.signUp", e);
            return a.kind === "signed_in" && this.applySession("SIGNED_IN", a.session),
            a
        }
        async signOut() {
            await this.transport.request("auth.signOut", void 0)
        }
        async refresh() {
            let e = await this.transport.request("auth.refresh", void 0);
            return this.applySession(e ? "TOKEN_REFRESHED" : "SIGNED_OUT", e),
            e
        }
        async sendOtp(e) {
            await this.transport.request("auth.sendOtp", e)
        }
        async verifyOtp(e) {
            let a = await this.transport.request("auth.verifyOtp", e);
            return this.applySession(e.type === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", a),
            a
        }
        async resendConfirmation(e) {
            await this.transport.request("auth.resendConfirmation", e)
        }
        async requestPasswordReset(e) {
            await this.transport.request("auth.requestPasswordReset", e)
        }
        async updatePassword(e) {
            await this.transport.request("auth.updatePassword", e)
        }
        async revokeAllSessions() {
            await this.transport.request("auth.revokeAllSessions", void 0)
        }
        async getLastLogin() {
            return this.transport.request("auth.getLastLogin", void 0)
        }
        async signInAnonymously(e={}) {
            let a = await this.transport.request("auth.signInAnonymously", {
                captchaToken: e.captchaToken,
                userMeta: e.userMeta,
                forceNewAnon: e.forceNewAnon
            });
            return this.applySession("SIGNED_IN", a),
            a
        }
        async getAccessToken() {
            return this.transport.request("auth.getAccessToken", void 0)
        }
        async signInWithOAuth(e) {
            if (typeof window > "u")
                throw new m("oauth_unavailable","window is required for OAuth");
            let a = `pw-oauth-pending-${Math.random().toString(36).slice(2, 10)}`
              , i = window.open("about:blank", a, "width=480,height=640,popup=yes");
            if (!i)
                throw new m("popup_blocked","browser blocked auth popup \u2014 call from a user gesture");
            uo(i, e.provider);
            let n = this.session;
            try {
                let {authorizeUrl: r, state: o} = await this.transport.request("auth.oauthStart", {
                    provider: e.provider,
                    scopes: e.scopes,
                    userMeta: e.userMeta,
                    switchAccount: e.switchAccount,
                    resumeCheckout: e.resumeCheckout
                });
                i.name = `pw-oauth-${o}`,
                i.location.replace(r),
                e.onPopupOpened?.();
                let l = await Xe(i, o);
                try {
                    i.close()
                } catch {}
                if (l.kind === "cancelled" || l.kind === "timeout") {
                    let c = await this.adoptedSessionSince(n);
                    if (c)
                        return this.applySession("SIGNED_IN", c),
                        c;
                    throw l.kind === "cancelled" ? new m("oauth_cancelled","auth popup was closed") : new m("oauth_timeout","OAuth flow timed out")
                }
                if (l.kind === "error")
                    throw new m(Qe(l) ? "oauth_identity_already_linked" : "oauth_failed",l.description || l.error || "OAuth provider returned error");
                let p = await this.transport.request("auth.oauthExchange", {
                    state: o,
                    code: l.code
                });
                return this.applySession("SIGNED_IN", p),
                p
            } catch (r) {
                try {
                    i.close()
                } catch {}
                throw r
            }
        }
        async adoptedSessionSince(e) {
            let a = await this.transport.request("auth.getCachedSession", void 0).catch( () => null);
            return a && (!e || e.user.id !== a.user.id || e.user.is_anonymous && !a.user.is_anonymous) ? a : null
        }
        destroy() {
            this.unsubBroadcast?.(),
            this.unsubBroadcast = null,
            this.listeners.clear(),
            this.session = null
        }
        applySession(e, a) {
            if (!lo(this.session, a)) {
                this.session = a;
                for (let i of [...this.listeners])
                    try {
                        i(e, a)
                    } catch (n) {
                        console.warn("[paywall] onAuthChange listener threw", n)
                    }
            }
        }
    }
    ;
    function lo(t, e) {
        return t === e ? !0 : !t || !e ? !1 : t.access_token === e.access_token && t.refresh_token === e.refresh_token && t.expires_at === e.expires_at && t.user.id === e.user.id
    }
    var co = {
        google: "Google",
        apple: "Apple",
        github: "GitHub",
        facebook: "Facebook"
    };
    function uo(t, e) {
        let a = co[e] ?? e;
        try {
            let i = t.document;
            i.title = `Sign in with ${a}`;
            let n = i.createElement("style");
            n.textContent = "html,body{margin:0;padding:0;height:100%;font-family:-apple-system,system-ui,sans-serif;background:#fafafa;color:#475569}.pw-oauth-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:16px}.pw-oauth-spinner{width:36px;height:36px;border:3px solid #e2e8f0;border-top-color:#7c3aed;border-radius:50%;animation:pw-oauth-spin 800ms linear infinite}.pw-oauth-label{font-size:14px;font-weight:500;letter-spacing:-0.01em}@keyframes pw-oauth-spin{to{transform:rotate(360deg)}}",
            i.head.appendChild(n);
            let r = i.createElement("div");
            r.className = "pw-oauth-wrap";
            let o = i.createElement("div");
            o.className = "pw-oauth-spinner";
            let l = i.createElement("div");
            l.className = "pw-oauth-label",
            l.textContent = `Connecting to ${a}\u2026`,
            r.appendChild(o),
            r.appendChild(l),
            i.body.appendChild(r)
        } catch {}
    }
    var jt = class {
        constructor(e) {
            this.transport = e
        }
        track(e, a) {
            typeof e != "string" || e.length === 0 || this.transport.request("tracker.track", {
                name: e,
                props: a
            }).catch(i => {
                console.warn("[paywall] track failed", i)
            }
            )
        }
    }
      , kt = null;
    function po() {
        return kt || (kt = new Ne( () => Lt(Ot)),
        kt)
    }
    var Ge = class extends Qs {
        constructor(e) {
            let a = po(), i = new zt(a,{
                paywallId: e.paywallId,
                apiOrigin: e.apiOrigin
            }), n;
            e.auth === !0 ? n = new Ct(a,{
                paywallId: e.paywallId,
                apiOrigin: e.apiOrigin
            }) : e.auth && console.warn("[sdk-extension] passing AuthClient instance to PaywallUI.opts.auth is not supported in extension mode \u2014 pass `auth: true` to use offscreen-shared auth, or omit for hybrid identity-only mode."),
            n && (i.auth = n),
            super({
                ...e,
                client: i,
                auth: n,
                analytics: !1
            }),
            this.remoteTracker = null,
            this.trackerUnsubs = [],
            e.analytics !== !1 && (this.remoteTracker = new jt(a),
            this.bindAnalytics())
        }
        bindAnalytics() {
            let e = this.remoteTracker;
            e && (this.trackViewedFn = a => {
                e.track("paywall_viewed", {
                    is_test_mode: a.settings.is_test_mode,
                    prices_count: a.prices.length,
                    offers_count: a.offers.length
                })
            }
            ,
            this.trackerUnsubs.push(this.on("ready", a => {
                this.acceptViewed(a) && this.trackViewedFn?.(a)
            }
            ), this.on("price_selected", a => e.track("price_selected", {
                price_id: a.priceId
            })), this.on("checkout_started", a => e.track("checkout_started", {
                price_id: a.priceId,
                acquiring: a.acquiring
            })), this.on("purchase_completed", a => {
                a.restored || this.shouldTrackPurchase(a) && e.track("purchase_completed", {
                    price_id: a.priceId,
                    session_id: a.sessionId
                })
            }
            ), this.on("purchase_failed", a => e.track("purchase_failed", {
                reason: a.reason
            })), this.on("close", () => {
                this.viewedGatePending && this.releaseViewedGate(!0),
                this.viewedTracked && e.track("paywall_closed"),
                this.viewedTracked = !1,
                this.viewedGateSettled = !0
            }
            ), this.on("trial_blocked", a => e.track("trial_blocked", {
                mode: a.mode,
                ...a.mode === "time" ? {
                    remaining_ms: a.remainingMs,
                    total_ms: a.totalMs
                } : a.mode === "opens" ? {
                    remaining_actions: a.remainingActions,
                    total_actions: a.totalActions
                } : {}
            })), this.on("trial_expired", () => e.track("trial_expired")), this.on("visibility_blocked", a => e.track("visibility_blocked", {
                reason: a.reason,
                country: a.country,
                tier: a.tier
            })), this.on("error", a => e.track("error", {
                code: a.code,
                message: a.message
            }))))
        }
        track(e, a) {
            this.remoteTracker?.track(e, a)
        }
        destroy() {
            for (let e of this.trackerUnsubs)
                e();
            this.trackerUnsubs = [],
            this.remoteTracker = null,
            this.trackViewedFn = null,
            super.destroy()
        }
    }
    ;
    window.PaywallSDK = Ge;
    var sn = "pw-ext-offscreen-migrated";
    window.PaywallSDKReady = (async () => {
        try {
            if (localStorage.getItem(sn))
                return;
            let t = await chrome.storage.local.get(null);
            for (let[e,a] of Object.entries(t))
                /^(pw|paywall)-/.test(e) && typeof a == "string" && localStorage.getItem(e) === null && localStorage.setItem(e, a);
            localStorage.setItem(sn, "1")
        } catch {}
    }
    )();
}
)();
