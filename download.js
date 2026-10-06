const e = {
    en: "English",
    ru: "Русский",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    pt: "Português",
    zh: "中文",
    ja: "日本語",
    ko: "한국어",
    tr: "Türkçe"
}
  , t = {
    en: {
        trimPlaceholder: "min:sec",
        videoDownloader: "Video Downloader",
        videoToMp3: "Video to MP3",
        videoToMp4: "Video to MP4",
        instagramDownloader: "Instagram Downloader",
        youtubeToVideo: "Fast Video Saver",
        audioDownloader: "Audio Downloader",
        y2Converter: "Media Downloader",
        audioGrabber: "Audio Grabber",
        youtubeToPdf: "Youtube to PDF",
        transcriptLanguage: "Transcript language",
        autoOriginal: "Auto (original language)",
        includeTimestamps: "Include timestamps",
        downloadPdf: "Download PDF",
        fetchingTranscript: "Fetching transcript...",
        generatingPdf: "Generating PDF...",
        openVideoHint: "Open a YouTube video to save its transcript as a PDF.",
        pdfReady: "Your PDF is ready",
        noTranscript: "This video has no transcript — YouTube doesn't provide captions for it.",
        pdfTheme: "PDF theme",
        themeLight: "Light",
        themeDark: "Dark",
        pdfStyle: "PDF style",
        styleClassic: "Classic",
        styleAcademic: "Academic",
        styleDeveloper: "Developer",
        styleExecutive: "Executive",
        fontSize: "Font size",
        fontNormal: "Normal",
        fontLarge: "Large",
        clickableTimestamps: "Clickable timestamps",
        aiCleanChapters: "AI cleanup & chapters",
        aiSummary: "AI summary",
        aiProcessing: "AI processing…",
        connectingIg: "Connecting to Instagram...",
        selectQuality: "Select quality",
        format: "Format",
        best: "Best",
        trimTitle: "Trim (optional)",
        trimStart: "Start",
        trimEnd: "End",
        trimHint: "Leave empty for full track",
        trimInvalid: "Invalid time. Use M:SS or H:MM:SS",
        losslessNote: "Lossless — bitrate not applicable",
        suggestFeature: "💡 Suggest a feature or report a bug",
        whatsNew: "What's new",
        download: "Download",
        downloadMp3: "Download MP3",
        fetchingFormats: "Fetching formats...",
        invalidToken: "Invalid API token — check extension settings",
        serverBusy: "Server busy — try again in a moment",
        fetchFailed: "Failed to fetch formats",
        noFfmpeg: "ffmpeg not found — only combined formats shown. Install ffmpeg for all qualities.",
        video: "video",
        audio: "audio",
        downloading: "Downloading...",
        downloadingVideo: "Downloading video...",
        downloadingAudio: "Downloading audio...",
        merging: "Merging...",
        preparing: "Preparing...",
        connecting: "Connecting to YouTube...",
        converting: "Converting to MP3...",
        finalizing: "Almost done, finalizing...",
        preparingVideo: "Preparing video...",
        preparingAudio: "Preparing audio...",
        savingToPC: "Saving to your computer...",
        starting: "Starting download...",
        queued: "Queued — waiting for slot...",
        downloadComplete: "Download Complete",
        videoReady: "Your video is ready",
        fileReady: "Your file is ready",
        showInFolder: "Show in Folder",
        close: "Close",
        downloadFailed: "Download Failed",
        subscriptionRequired: "Subscription required to continue",
        contactSupport: "Contact support",
        manageSubscription: "Manage subscription",
        accountTitle: "Support & subscription",
        accountDesc: "Questions, billing, or canceling your plan — we're here to help.",
        somethingWrong: "Something went wrong",
        serverBusyDownload: "Server busy — too many downloads, try again later",
        dailyLimitReached: "Daily download limit reached. Please try again tomorrow.",
        dailyLimitTitle: "Daily limit reached",
        dailyLimitUpsell: "You've used today's free downloads. Come back tomorrow — or subscribe now for unlimited downloads.",
        getUnlimited: "Get unlimited",
        subscriptionActivating: "Subscription active — finishing setup, retrying…",
        alreadySubscribed: "Already subscribed? Sign in",
        waitForPrevious: "Please wait for your current download to finish",
        serverError: "Server error",
        lostConnection: "Lost connection to server",
        almostDone: "almost done",
        etaMinSec: "{m}m {s}s left",
        etaSec: "{s}s left",
        settings: "Settings",
        serverUrl: "Server URL",
        apiToken: "API Token",
        language: "Language",
        save: "Save",
        settingsSaved: "Settings saved!",
        loading: "Loading...",
        clickVideoHint: "Click the video you want to download, then open the extension again.",
        clickTrackHint: "Click the track you want to download, then open the extension again.",
        whatsNewTitle: "What's new",
        whatsNewText: "Audio now downloads with cover art, tags and lyrics. Playlist downloads and Shorts support added.",
        whatsNewTextVideo: "Playlists and Shorts are supported now. Trim before downloading, or pull just the audio as MP3.",
        downloadPlaylist: "Download playlist",
        stopQueue: "Stop",
        tracksFound: "{n} tracks found",
        scanningPage: "Scanning page for videos...",
        noVideosFound: "No videos found on this page",
        videosFound: "{n} videos found",
        rateUs: "How was your experience?",
        thanksFeedback: "Thank you for your feedback!",
        welcomeTitle: "Welcome!",
        welcomeSubtitle: "Follow these 3 simple steps to get started",
        step1Title: "Pin the extension",
        step1Desc: "Click the puzzle icon in your browser toolbar, then click the pin icon next to the extension name.",
        step2Title: "Open a video & click the icon",
        step2Desc: "Go to any video, then click the extension icon in your toolbar.",
        step3Title: "Choose quality and download",
        step3Desc: "Select the quality you want and click Download. Your file will be saved automatically.",
        step3TitleMp3: "Click Download MP3",
        step3DescMp3: "The extension will automatically extract the audio. Click Download MP3 and your file will be saved.",
        readyTitle: "You're all set!",
        readyDesc: "Open any video and click the extension icon to start downloading.",
        clickHere: "click here"
    },
    ru: {
        trimPlaceholder: "мин:сек",
        format: "Формат",
        trimTitle: "Обрезка (необязательно)",
        trimStart: "Начало",
        trimEnd: "Конец",
        trimHint: "Оставьте пустым для всего трека",
        trimInvalid: "Неверное время. Используйте M:SS или H:MM:SS",
        losslessNote: "Lossless — битрейт не применяется",
        suggestFeature: "💡 Предложить функцию или сообщить об ошибке",
        whatsNew: "Что нового",
        videoDownloader: "Загрузчик видео",
        videoToMp3: "Видео в MP3",
        videoToMp4: "Видео в MP4",
        instagramDownloader: "Загрузчик Instagram",
        youtubeToVideo: "Fast Video Saver",
        audioDownloader: "Загрузчик Youtube Music",
        y2Converter: "Y2mate",
        audioGrabber: "YTMP3",
        youtubeToPdf: "Видео в PDF",
        transcriptLanguage: "Язык транскрипции",
        autoOriginal: "Авто (язык оригинала)",
        includeTimestamps: "Добавить таймкоды",
        downloadPdf: "Скачать PDF",
        fetchingTranscript: "Получаем транскрипцию...",
        generatingPdf: "Создаём PDF...",
        openVideoHint: "Откройте видео на YouTube, чтобы сохранить его транскрипцию в PDF.",
        pdfReady: "Ваш PDF готов",
        noTranscript: "У этого видео нет транскрипции — YouTube не предоставляет для него субтитры.",
        pdfTheme: "Тема PDF",
        themeLight: "Светлая",
        themeDark: "Тёмная",
        pdfStyle: "Стиль PDF",
        styleClassic: "Классический",
        styleAcademic: "Учебный",
        styleDeveloper: "Разработчик",
        styleExecutive: "Деловой",
        fontSize: "Размер шрифта",
        fontNormal: "Обычный",
        fontLarge: "Крупный",
        clickableTimestamps: "Кликабельные таймкоды",
        aiCleanChapters: "AI-очистка и главы",
        aiSummary: "AI-резюме",
        aiProcessing: "Обработка ИИ…",
        connectingIg: "Подключение к Instagram...",
        selectQuality: "Выберите качество",
        best: "Лучшее",
        download: "Скачать",
        downloadMp3: "Скачать MP3",
        fetchingFormats: "Загрузка форматов...",
        invalidToken: "Неверный API токен — проверьте настройки расширения",
        serverBusy: "Сервер занят — попробуйте позже",
        fetchFailed: "Не удалось получить форматы",
        noFfmpeg: "ffmpeg не найден — показаны только совмещённые форматы. Установите ffmpeg для всех вариантов.",
        video: "видео",
        audio: "аудио",
        downloading: "Скачивание...",
        downloadingVideo: "Скачивание видео...",
        downloadingAudio: "Скачивание аудио...",
        merging: "Объединение...",
        preparing: "Подготовка...",
        connecting: "Подключение к YouTube...",
        converting: "Конвертация в MP3...",
        finalizing: "Почти готово, завершаем...",
        preparingVideo: "Подготовка видео...",
        preparingAudio: "Подготовка аудио...",
        savingToPC: "Сохранение на компьютер...",
        starting: "Начало загрузки...",
        queued: "В очереди — ожидание...",
        downloadComplete: "Загрузка завершена",
        videoReady: "Видео готово",
        fileReady: "Файл готов",
        showInFolder: "Показать в папке",
        close: "Закрыть",
        downloadFailed: "Ошибка загрузки",
        subscriptionRequired: "Для продолжения нужна подписка",
        contactSupport: "Написать в поддержку",
        manageSubscription: "Управление подпиской",
        accountTitle: "Поддержка и подписка",
        accountDesc: "Вопросы, оплата или отмена подписки — мы поможем.",
        somethingWrong: "Что-то пошло не так",
        serverBusyDownload: "Сервер занят — слишком много загрузок, попробуйте позже",
        dailyLimitReached: "Дневной лимит загрузок исчерпан. Попробуйте завтра.",
        dailyLimitTitle: "Дневной лимит исчерпан",
        dailyLimitUpsell: "Бесплатные загрузки на сегодня закончились. Возвращайтесь завтра — или оформите подписку и качайте без ограничений.",
        getUnlimited: "Качать без лимитов",
        subscriptionActivating: "Подписка активна — завершаем настройку, повторяем…",
        alreadySubscribed: "Уже есть подписка? Войти",
        waitForPrevious: "Дождитесь завершения текущей загрузки",
        serverError: "Ошибка сервера",
        lostConnection: "Потеряно соединение с сервером",
        almostDone: "почти готово",
        etaMinSec: "осталось {m}м {s}с",
        etaSec: "осталось {s}с",
        settings: "Настройки",
        serverUrl: "Адрес сервера",
        apiToken: "API Токен",
        language: "Язык",
        save: "Сохранить",
        settingsSaved: "Настройки сохранены!",
        loading: "Загрузка...",
        clickVideoHint: "Кликните на нужное видео, затем снова откройте расширение.",
        clickTrackHint: "Кликните на нужный трек, затем снова откройте расширение.",
        whatsNewTitle: "Что нового",
        whatsNewText: "Аудио теперь скачивается с обложкой, тегами и текстом песни. Добавлены плейлисты и поддержка Shorts.",
        whatsNewTextVideo: "Теперь поддерживаются плейлисты и Shorts. Можно обрезать видео перед скачиванием или забрать только звук в MP3.",
        downloadPlaylist: "Скачать плейлист",
        stopQueue: "Стоп",
        tracksFound: "Найдено треков: {n}",
        scanningPage: "Поиск видео на странице...",
        noVideosFound: "Видео на этой странице не найдено",
        videosFound: "Найдено видео: {n}",
        rateUs: "Как вам приложение?",
        thanksFeedback: "Спасибо за отзыв!",
        welcomeTitle: "Добро пожаловать!",
        welcomeSubtitle: "Выполните 3 простых шага, чтобы начать",
        step1Title: "Закрепите расширение",
        step1Desc: "Нажмите на иконку пазла на панели инструментов браузера, затем нажмите на значок булавки рядом с названием расширения.",
        step2Title: "Откройте видео и нажмите на иконку",
        step2Desc: "Перейдите на любое видео, затем нажмите на иконку расширения на панели инструментов.",
        step3Title: "Выберите качество и скачайте",
        step3Desc: "Выберите нужное качество и нажмите «Скачать». Файл сохранится автоматически.",
        step3TitleMp3: "Нажмите «Скачать MP3»",
        step3DescMp3: "Расширение автоматически извлечёт аудио. Нажмите «Скачать MP3» и файл сохранится.",
        readyTitle: "Всё готово!",
        readyDesc: "Откройте любое видео и нажмите на иконку расширения, чтобы начать скачивание.",
        clickHere: "нажмите сюда"
    },
    es: {
        trimPlaceholder: "min:seg",
        preparingVideo: "Preparando video...",
        preparingAudio: "Preparando audio...",
        savingToPC: "Guardando en tu computadora...",
        waitForPrevious: "Espera a que termine tu descarga actual",
        format: "Formato",
        trimTitle: "Recortar (opcional)",
        trimStart: "Inicio",
        trimEnd: "Fin",
        trimHint: "Déjalo vacío para la pista completa",
        trimInvalid: "Hora inválida. Usa M:SS o H:MM:SS",
        losslessNote: "Sin pérdida — el bitrate no aplica",
        suggestFeature: "💡 Sugerir una función o informar de un error",
        whatsNew: "Novedades",
        videoDownloader: "Descargador de video",
        videoToMp3: "Video a MP3",
        videoToMp4: "Video a MP4",
        instagramDownloader: "Descargador de Instagram",
        youtubeToVideo: "Fast Video Saver",
        audioDownloader: "Descargador de Youtube Music",
        y2Converter: "Y2mate",
        audioGrabber: "YTMP3",
        youtubeToPdf: "Video a PDF",
        transcriptLanguage: "Idioma de la transcripción",
        autoOriginal: "Auto (idioma original)",
        includeTimestamps: "Incluir marcas de tiempo",
        downloadPdf: "Descargar PDF",
        fetchingTranscript: "Obteniendo transcripción...",
        generatingPdf: "Generando PDF...",
        openVideoHint: "Abre un video de YouTube para guardar su transcripción en PDF.",
        pdfReady: "Tu PDF está listo",
        noTranscript: "Este video no tiene transcripción — YouTube no ofrece subtítulos para él.",
        pdfTheme: "Tema del PDF",
        themeLight: "Claro",
        themeDark: "Oscuro",
        pdfStyle: "Estilo del PDF",
        styleClassic: "Clásico",
        styleAcademic: "Académico",
        styleDeveloper: "Desarrollador",
        styleExecutive: "Ejecutivo",
        fontSize: "Tamaño de fuente",
        fontNormal: "Normal",
        fontLarge: "Grande",
        clickableTimestamps: "Marcas de tiempo con enlace",
        aiCleanChapters: "Limpieza y capítulos con IA",
        aiSummary: "Resumen con IA",
        aiProcessing: "Procesando con IA…",
        connectingIg: "Conectando con Instagram...",
        selectQuality: "Seleccionar calidad",
        best: "Mejor",
        download: "Descargar",
        downloadMp3: "Descargar MP3",
        fetchingFormats: "Obteniendo formatos...",
        invalidToken: "Token API inválido — revisa la configuración",
        serverBusy: "Servidor ocupado — intenta más tarde",
        fetchFailed: "Error al obtener formatos",
        noFfmpeg: "ffmpeg no encontrado — solo se muestran formatos combinados. Instala ffmpeg para todas las calidades.",
        video: "video",
        audio: "audio",
        downloading: "Descargando...",
        downloadingVideo: "Descargando video...",
        downloadingAudio: "Descargando audio...",
        merging: "Combinando...",
        preparing: "Preparando...",
        connecting: "Conectando con YouTube...",
        converting: "Convirtiendo a MP3...",
        finalizing: "Casi listo, finalizando...",
        starting: "Iniciando descarga...",
        queued: "En cola — esperando...",
        downloadComplete: "Descarga completa",
        videoReady: "Tu video está listo",
        fileReady: "Tu archivo está listo",
        showInFolder: "Mostrar en carpeta",
        close: "Cerrar",
        downloadFailed: "Error de descarga",
        subscriptionRequired: "Se requiere suscripción para continuar",
        contactSupport: "Contactar con soporte",
        manageSubscription: "Gestionar suscripción",
        accountTitle: "Soporte y suscripción",
        accountDesc: "Preguntas, facturación o cancelar tu plan: estamos aquí para ayudarte.",
        somethingWrong: "Algo salió mal",
        serverBusyDownload: "Servidor ocupado — demasiadas descargas, intenta más tarde",
        dailyLimitReached: "Has alcanzado el límite diario de descargas. Inténtalo mañana.",
        dailyLimitTitle: "Límite diario alcanzado",
        dailyLimitUpsell: "Has usado tus descargas gratuitas de hoy. Vuelve mañana — o suscríbete ahora para descargar sin límites.",
        getUnlimited: "Descargas ilimitadas",
        subscriptionActivating: "Suscripción activa: terminando la configuración, reintentando…",
        alreadySubscribed: "¿Ya tienes suscripción? Inicia sesión",
        serverError: "Error del servidor",
        lostConnection: "Se perdió la conexión con el servidor",
        almostDone: "casi listo",
        etaMinSec: "{m}m {s}s restantes",
        etaSec: "{s}s restantes",
        settings: "Configuración",
        serverUrl: "URL del servidor",
        apiToken: "Token API",
        language: "Idioma",
        save: "Guardar",
        settingsSaved: "¡Configuración guardada!",
        loading: "Cargando...",
        clickVideoHint: "Haz clic en el video que quieres descargar y vuelve a abrir la extensión.",
        clickTrackHint: "Haz clic en la pista que quieres descargar y vuelve a abrir la extensión.",
        whatsNewTitle: "Novedades",
        whatsNewText: "El audio ahora se descarga con carátula, etiquetas y letra. Se añadieron listas de reproducción y compatibilidad con Shorts.",
        whatsNewTextVideo: "Ahora se admiten listas de reproducción y Shorts. Recorta antes de descargar o extrae solo el audio en MP3.",
        downloadPlaylist: "Descargar lista",
        stopQueue: "Detener",
        tracksFound: "{n} pistas encontradas",
        scanningPage: "Buscando videos en la página...",
        noVideosFound: "No se encontraron videos en esta página",
        videosFound: "{n} videos encontrados",
        rateUs: "¿Cómo fue tu experiencia?",
        thanksFeedback: "¡Gracias por tu opinión!",
        welcomeTitle: "¡Bienvenido!",
        welcomeSubtitle: "Sigue estos 3 sencillos pasos para empezar",
        step1Title: "Fija la extensión",
        step1Desc: "Haz clic en el icono del rompecabezas en la barra de herramientas y luego haz clic en el icono de pin junto al nombre de la extensión.",
        step2Title: "Abre un vídeo y haz clic en el icono",
        step2Desc: "Ve a cualquier vídeo y haz clic en el icono de la extensión en tu barra de herramientas.",
        step3Title: "Elige la calidad y descarga",
        step3Desc: "Selecciona la calidad deseada y haz clic en Descargar. El archivo se guardará automáticamente.",
        step3TitleMp3: "Haz clic en Descargar MP3",
        step3DescMp3: "La extensión extraerá el audio automáticamente. Haz clic en Descargar MP3 y el archivo se guardará.",
        readyTitle: "¡Todo listo!",
        readyDesc: "Abre cualquier vídeo y haz clic en el icono de la extensión para empezar a descargar.",
        clickHere: "haz clic aquí"
    },
    fr: {
        trimPlaceholder: "min:sec",
        videoToMp3: "Vidéo en MP3",
        videoToMp4: "Vidéo en MP4",
        preparingVideo: "Préparation de la vidéo...",
        preparingAudio: "Préparation de l'audio...",
        savingToPC: "Enregistrement sur votre ordinateur...",
        waitForPrevious: "Veuillez attendre la fin du téléchargement en cours",
        format: "Format",
        trimTitle: "Découper (facultatif)",
        trimStart: "Début",
        trimEnd: "Fin",
        trimHint: "Laissez vide pour la piste entière",
        trimInvalid: "Heure invalide. Utilisez M:SS ou H:MM:SS",
        losslessNote: "Sans perte — débit non applicable",
        suggestFeature: "💡 Suggérer une fonctionnalité ou signaler un bug",
        whatsNew: "Nouveautés",
        videoDownloader: "Téléchargeur vidéo",
        instagramDownloader: "Téléchargeur Instagram",
        youtubeToVideo: "Fast Video Saver",
        audioDownloader: "Téléchargeur Youtube Music",
        y2Converter: "Y2mate",
        audioGrabber: "YTMP3",
        youtubeToPdf: "Vidéo en PDF",
        transcriptLanguage: "Langue de la transcription",
        autoOriginal: "Auto (langue d'origine)",
        includeTimestamps: "Inclure les horodatages",
        downloadPdf: "Télécharger le PDF",
        fetchingTranscript: "Récupération de la transcription...",
        generatingPdf: "Génération du PDF...",
        openVideoHint: "Ouvrez une vidéo YouTube pour enregistrer sa transcription en PDF.",
        pdfReady: "Votre PDF est prêt",
        noTranscript: "Cette vidéo n'a pas de transcription — YouTube ne fournit pas de sous-titres pour celle-ci.",
        pdfTheme: "Thème du PDF",
        themeLight: "Clair",
        themeDark: "Sombre",
        pdfStyle: "Style du PDF",
        styleClassic: "Classique",
        styleAcademic: "Académique",
        styleDeveloper: "Développeur",
        styleExecutive: "Exécutif",
        fontSize: "Taille de police",
        fontNormal: "Normale",
        fontLarge: "Grande",
        clickableTimestamps: "Horodatages cliquables",
        aiCleanChapters: "Nettoyage et chapitres IA",
        aiSummary: "Résumé IA",
        aiProcessing: "Traitement IA…",
        connectingIg: "Connexion à Instagram...",
        selectQuality: "Choisir la qualité",
        best: "Meilleure",
        download: "Télécharger",
        downloadMp3: "Télécharger MP3",
        fetchingFormats: "Récupération des formats...",
        invalidToken: "Token API invalide — vérifiez les paramètres",
        serverBusy: "Serveur occupé — réessayez plus tard",
        fetchFailed: "Impossible de récupérer les formats",
        noFfmpeg: "ffmpeg introuvable — seuls les formats combinés sont affichés. Installez ffmpeg pour toutes les qualités.",
        video: "vidéo",
        audio: "audio",
        downloading: "Téléchargement...",
        downloadingVideo: "Téléchargement vidéo...",
        downloadingAudio: "Téléchargement audio...",
        merging: "Fusion...",
        preparing: "Préparation...",
        connecting: "Connexion à YouTube...",
        converting: "Conversion en MP3...",
        finalizing: "Presque terminé, finalisation...",
        starting: "Démarrage du téléchargement...",
        queued: "En file d'attente...",
        downloadComplete: "Téléchargement terminé",
        videoReady: "Votre vidéo est prête",
        fileReady: "Votre fichier est prêt",
        showInFolder: "Afficher dans le dossier",
        close: "Fermer",
        downloadFailed: "Échec du téléchargement",
        subscriptionRequired: "Abonnement requis pour continuer",
        contactSupport: "Contacter le support",
        manageSubscription: "Gérer l'abonnement",
        accountTitle: "Support et abonnement",
        accountDesc: "Questions, facturation ou annulation — nous sommes là pour vous aider.",
        somethingWrong: "Une erreur est survenue",
        serverBusyDownload: "Serveur occupé — trop de téléchargements, réessayez plus tard",
        dailyLimitReached: "Limite quotidienne de téléchargements atteinte. Réessayez demain.",
        dailyLimitTitle: "Limite quotidienne atteinte",
        dailyLimitUpsell: "Vous avez utilisé vos téléchargements gratuits du jour. Revenez demain — ou abonnez-vous pour télécharger sans limite.",
        getUnlimited: "Passer en illimité",
        subscriptionActivating: "Abonnement actif — finalisation en cours, nouvelle tentative…",
        alreadySubscribed: "Déjà abonné ? Se connecter",
        serverError: "Erreur serveur",
        lostConnection: "Connexion au serveur perdue",
        almostDone: "presque terminé",
        etaMinSec: "{m}m {s}s restantes",
        etaSec: "{s}s restantes",
        settings: "Paramètres",
        serverUrl: "URL du serveur",
        apiToken: "Token API",
        language: "Langue",
        save: "Enregistrer",
        settingsSaved: "Paramètres enregistrés !",
        loading: "Chargement...",
        clickVideoHint: "Cliquez sur la vidéo à télécharger, puis rouvrez l'extension.",
        clickTrackHint: "Cliquez sur la piste à télécharger, puis rouvrez l'extension.",
        whatsNewTitle: "Nouveautés",
        whatsNewText: "L'audio se télécharge désormais avec pochette, tags et paroles. Ajout des playlists et de la prise en charge des Shorts.",
        whatsNewTextVideo: "Les playlists et les Shorts sont pris en charge. Découpez avant de télécharger ou récupérez seulement l'audio en MP3.",
        downloadPlaylist: "Télécharger la playlist",
        stopQueue: "Arrêter",
        tracksFound: "{n} pistes trouvées",
        scanningPage: "Recherche de vidéos sur la page...",
        noVideosFound: "Aucune vidéo trouvée sur cette page",
        videosFound: "{n} vidéos trouvées",
        rateUs: "Comment était votre expérience ?",
        thanksFeedback: "Merci pour votre avis !",
        welcomeTitle: "Bienvenue !",
        welcomeSubtitle: "Suivez ces 3 étapes simples pour commencer",
        step1Title: "Épinglez l'extension",
        step1Desc: "Cliquez sur l'icône de puzzle dans la barre d'outils, puis cliquez sur l'épingle à côté du nom de l'extension.",
        step2Title: "Ouvrez une vidéo et cliquez sur l'icône",
        step2Desc: "Allez sur n'importe quelle vidéo, puis cliquez sur l'icône de l'extension dans votre barre d'outils.",
        step3Title: "Choisissez la qualité et téléchargez",
        step3Desc: "Sélectionnez la qualité souhaitée et cliquez sur Télécharger. Le fichier sera enregistré automatiquement.",
        step3TitleMp3: "Cliquez sur Télécharger MP3",
        step3DescMp3: "L'extension extraira automatiquement l'audio. Cliquez sur Télécharger MP3 et le fichier sera enregistré.",
        readyTitle: "Tout est prêt !",
        readyDesc: "Ouvrez n'importe quelle vidéo et cliquez sur l'icône de l'extension pour commencer le téléchargement.",
        clickHere: "cliquez ici"
    },
    de: {
        trimPlaceholder: "Min:Sek",
        videoToMp3: "Video zu MP3",
        videoToMp4: "Video zu MP4",
        preparingVideo: "Video wird vorbereitet...",
        preparingAudio: "Audio wird vorbereitet...",
        savingToPC: "Wird auf deinem Computer gespeichert...",
        waitForPrevious: "Bitte warte, bis der aktuelle Download abgeschlossen ist",
        format: "Format",
        trimTitle: "Zuschneiden (optional)",
        trimStart: "Start",
        trimEnd: "Ende",
        trimHint: "Leer lassen für den ganzen Track",
        trimInvalid: "Ungültige Zeit. Nutze M:SS oder H:MM:SS",
        losslessNote: "Verlustfrei — Bitrate nicht relevant",
        suggestFeature: "💡 Funktion vorschlagen oder Fehler melden",
        whatsNew: "Neuigkeiten",
        videoDownloader: "Video-Downloader",
        instagramDownloader: "Instagram-Downloader",
        youtubeToVideo: "Fast Video Saver",
        audioDownloader: "Youtube Music Downloader",
        y2Converter: "Y2mate",
        audioGrabber: "YTMP3",
        youtubeToPdf: "Video zu PDF",
        transcriptLanguage: "Sprache des Transkripts",
        autoOriginal: "Auto (Originalsprache)",
        includeTimestamps: "Zeitstempel einfügen",
        downloadPdf: "PDF herunterladen",
        fetchingTranscript: "Transkript wird geladen...",
        generatingPdf: "PDF wird erstellt...",
        openVideoHint: "Öffne ein YouTube-Video, um sein Transkript als PDF zu speichern.",
        pdfReady: "Dein PDF ist fertig",
        noTranscript: "Dieses Video hat kein Transkript — YouTube stellt dafür keine Untertitel bereit.",
        pdfTheme: "PDF-Design",
        themeLight: "Hell",
        themeDark: "Dunkel",
        pdfStyle: "PDF-Stil",
        styleClassic: "Klassisch",
        styleAcademic: "Studium",
        styleDeveloper: "Entwickler",
        styleExecutive: "Business",
        fontSize: "Schriftgröße",
        fontNormal: "Normal",
        fontLarge: "Groß",
        clickableTimestamps: "Klickbare Zeitstempel",
        aiCleanChapters: "KI-Bereinigung & Kapitel",
        aiSummary: "KI-Zusammenfassung",
        aiProcessing: "KI-Verarbeitung…",
        connectingIg: "Verbindung zu Instagram...",
        selectQuality: "Qualität wählen",
        best: "Beste",
        download: "Herunterladen",
        downloadMp3: "MP3 herunterladen",
        fetchingFormats: "Formate werden geladen...",
        invalidToken: "Ungültiger API-Token — Einstellungen prüfen",
        serverBusy: "Server ausgelastet — später versuchen",
        fetchFailed: "Formate konnten nicht geladen werden",
        noFfmpeg: "ffmpeg nicht gefunden — nur kombinierte Formate. Installiere ffmpeg für alle Qualitäten.",
        video: "Video",
        audio: "Audio",
        downloading: "Wird heruntergeladen...",
        downloadingVideo: "Video wird heruntergeladen...",
        downloadingAudio: "Audio wird heruntergeladen...",
        merging: "Wird zusammengeführt...",
        preparing: "Vorbereitung...",
        connecting: "Verbindung zu YouTube...",
        converting: "Konvertierung zu MP3...",
        finalizing: "Fast fertig, wird abgeschlossen...",
        starting: "Download wird gestartet...",
        queued: "In Warteschlange...",
        downloadComplete: "Download abgeschlossen",
        videoReady: "Dein Video ist bereit",
        fileReady: "Deine Datei ist fertig",
        showInFolder: "Im Ordner anzeigen",
        close: "Schließen",
        downloadFailed: "Download fehlgeschlagen",
        subscriptionRequired: "Abonnement zum Fortfahren erforderlich",
        contactSupport: "Support kontaktieren",
        manageSubscription: "Abonnement verwalten",
        accountTitle: "Support & Abonnement",
        accountDesc: "Fragen, Abrechnung oder Kündigung — wir helfen gern.",
        somethingWrong: "Etwas ist schiefgelaufen",
        serverBusyDownload: "Server ausgelastet — zu viele Downloads, später versuchen",
        dailyLimitReached: "Tageslimit für Downloads erreicht. Bitte morgen erneut versuchen.",
        dailyLimitTitle: "Tageslimit erreicht",
        dailyLimitUpsell: "Deine kostenlosen Downloads für heute sind aufgebraucht. Komm morgen wieder — oder hol dir ein Abo für unbegrenzte Downloads.",
        getUnlimited: "Unbegrenzt laden",
        subscriptionActivating: "Abo aktiv — Einrichtung wird abgeschlossen, neuer Versuch…",
        alreadySubscribed: "Schon ein Abo? Anmelden",
        serverError: "Serverfehler",
        lostConnection: "Verbindung zum Server verloren",
        almostDone: "fast fertig",
        etaMinSec: "noch {m}m {s}s",
        etaSec: "noch {s}s",
        settings: "Einstellungen",
        serverUrl: "Server-URL",
        apiToken: "API-Token",
        language: "Sprache",
        save: "Speichern",
        settingsSaved: "Einstellungen gespeichert!",
        loading: "Laden...",
        clickVideoHint: "Klicken Sie auf das gewünschte Video und öffnen Sie die Erweiterung erneut.",
        clickTrackHint: "Klicken Sie auf den gewünschten Titel und öffnen Sie die Erweiterung erneut.",
        whatsNewTitle: "Neuigkeiten",
        whatsNewText: "Audio wird jetzt mit Cover, Tags und Songtext heruntergeladen. Playlists und Shorts-Unterstützung hinzugefügt.",
        whatsNewTextVideo: "Playlists und Shorts werden jetzt unterstützt. Schneide vor dem Download zu oder hol dir nur den Ton als MP3.",
        downloadPlaylist: "Playlist herunterladen",
        stopQueue: "Stoppen",
        tracksFound: "{n} Titel gefunden",
        scanningPage: "Seite wird nach Videos durchsucht...",
        noVideosFound: "Keine Videos auf dieser Seite gefunden",
        videosFound: "{n} Videos gefunden",
        rateUs: "Wie war Ihre Erfahrung?",
        thanksFeedback: "Danke für Ihr Feedback!",
        welcomeTitle: "Willkommen!",
        welcomeSubtitle: "Folge diesen 3 einfachen Schritten",
        step1Title: "Erweiterung anheften",
        step1Desc: "Klicke auf das Puzzle-Symbol in der Symbolleiste und dann auf das Pin-Symbol neben dem Erweiterungsnamen.",
        step2Title: "Öffne ein Video und klicke auf das Symbol",
        step2Desc: "Gehe zu einem beliebigen Video und klicke auf das Erweiterungssymbol in deiner Symbolleiste.",
        step3Title: "Qualität wählen und herunterladen",
        step3Desc: "Wähle die gewünschte Qualität und klicke auf Herunterladen. Die Datei wird automatisch gespeichert.",
        step3TitleMp3: "Klicke auf MP3 herunterladen",
        step3DescMp3: "Die Erweiterung extrahiert automatisch das Audio. Klicke auf MP3 herunterladen und die Datei wird gespeichert.",
        readyTitle: "Alles bereit!",
        readyDesc: "Öffne ein beliebiges Video und klicke auf das Erweiterungssymbol, um den Download zu starten.",
        clickHere: "hier klicken"
    },
    pt: {
        trimPlaceholder: "min:seg",
        videoToMp3: "Vídeo para MP3",
        videoToMp4: "Vídeo para MP4",
        preparingVideo: "Preparando vídeo...",
        preparingAudio: "Preparando áudio...",
        savingToPC: "Salvando no seu computador...",
        waitForPrevious: "Aguarde o término do download atual",
        format: "Formato",
        trimTitle: "Cortar (opcional)",
        trimStart: "Início",
        trimEnd: "Fim",
        trimHint: "Deixe vazio para a faixa completa",
        trimInvalid: "Tempo inválido. Use M:SS ou H:MM:SS",
        losslessNote: "Sem perdas — bitrate não se aplica",
        suggestFeature: "💡 Sugerir um recurso ou relatar um bug",
        whatsNew: "Novidades",
        videoDownloader: "Baixador de vídeo",
        instagramDownloader: "Baixador de Instagram",
        youtubeToVideo: "Fast Video Saver",
        audioDownloader: "Baixador de Youtube Music",
        y2Converter: "Y2mate",
        audioGrabber: "YTMP3",
        youtubeToPdf: "Vídeo para PDF",
        transcriptLanguage: "Idioma da transcrição",
        autoOriginal: "Auto (idioma original)",
        includeTimestamps: "Incluir marcações de tempo",
        downloadPdf: "Baixar PDF",
        fetchingTranscript: "Obtendo transcrição...",
        generatingPdf: "Gerando PDF...",
        openVideoHint: "Abra um vídeo do YouTube para salvar a transcrição em PDF.",
        pdfReady: "Seu PDF está pronto",
        noTranscript: "Este vídeo não tem transcrição — o YouTube não fornece legendas para ele.",
        pdfTheme: "Tema do PDF",
        themeLight: "Claro",
        themeDark: "Escuro",
        pdfStyle: "Estilo do PDF",
        styleClassic: "Clássico",
        styleAcademic: "Acadêmico",
        styleDeveloper: "Desenvolvedor",
        styleExecutive: "Executivo",
        fontSize: "Tamanho da fonte",
        fontNormal: "Normal",
        fontLarge: "Grande",
        clickableTimestamps: "Marcações de tempo clicáveis",
        aiCleanChapters: "Limpeza e capítulos com IA",
        aiSummary: "Resumo com IA",
        aiProcessing: "Processando com IA…",
        connectingIg: "Conectando ao Instagram...",
        selectQuality: "Selecionar qualidade",
        best: "Melhor",
        download: "Baixar",
        downloadMp3: "Baixar MP3",
        fetchingFormats: "Buscando formatos...",
        invalidToken: "Token API inválido — verifique as configurações",
        serverBusy: "Servidor ocupado — tente mais tarde",
        fetchFailed: "Falha ao buscar formatos",
        noFfmpeg: "ffmpeg não encontrado — apenas formatos combinados. Instale o ffmpeg para todas as qualidades.",
        video: "vídeo",
        audio: "áudio",
        downloading: "Baixando...",
        downloadingVideo: "Baixando vídeo...",
        downloadingAudio: "Baixando áudio...",
        merging: "Mesclando...",
        preparing: "Preparando...",
        connecting: "Conectando ao YouTube...",
        converting: "Convertendo para MP3...",
        finalizing: "Quase pronto, finalizando...",
        starting: "Iniciando download...",
        queued: "Na fila — aguardando...",
        downloadComplete: "Download concluído",
        videoReady: "Seu vídeo está pronto",
        fileReady: "Seu arquivo está pronto",
        showInFolder: "Mostrar na pasta",
        close: "Fechar",
        downloadFailed: "Falha no download",
        subscriptionRequired: "Assinatura necessária para continuar",
        contactSupport: "Falar com o suporte",
        manageSubscription: "Gerenciar assinatura",
        accountTitle: "Suporte e assinatura",
        accountDesc: "Dúvidas, cobrança ou cancelamento do plano — estamos aqui para ajudar.",
        somethingWrong: "Algo deu errado",
        serverBusyDownload: "Servidor ocupado — muitos downloads, tente mais tarde",
        dailyLimitReached: "Limite diário de downloads atingido. Tente novamente amanhã.",
        dailyLimitTitle: "Limite diário atingido",
        dailyLimitUpsell: "Você usou seus downloads gratuitos de hoje. Volte amanhã — ou assine agora para baixar sem limites.",
        getUnlimited: "Downloads ilimitados",
        subscriptionActivating: "Assinatura ativa — finalizando a configuração, tentando de novo…",
        alreadySubscribed: "Já tem assinatura? Entrar",
        serverError: "Erro no servidor",
        lostConnection: "Conexão com o servidor perdida",
        almostDone: "quase pronto",
        etaMinSec: "{m}m {s}s restantes",
        etaSec: "{s}s restantes",
        settings: "Configurações",
        serverUrl: "URL do servidor",
        apiToken: "Token API",
        language: "Idioma",
        save: "Salvar",
        settingsSaved: "Configurações salvas!",
        loading: "Carregando...",
        clickVideoHint: "Clique no vídeo que deseja baixar e abra a extensão novamente.",
        clickTrackHint: "Clique na faixa que deseja baixar e abra a extensão novamente.",
        whatsNewTitle: "Novidades",
        whatsNewText: "O áudio agora é baixado com capa, tags e letra. Adicionado suporte a playlists e Shorts.",
        whatsNewTextVideo: "Agora há suporte a playlists e Shorts. Corte antes de baixar ou pegue só o áudio em MP3.",
        downloadPlaylist: "Baixar playlist",
        stopQueue: "Parar",
        tracksFound: "{n} faixas encontradas",
        scanningPage: "Procurando vídeos na página...",
        noVideosFound: "Nenhum vídeo encontrado nesta página",
        videosFound: "{n} vídeos encontrados",
        rateUs: "Como foi sua experiência?",
        thanksFeedback: "Obrigado pelo seu feedback!",
        welcomeTitle: "Bem-vindo!",
        welcomeSubtitle: "Siga estes 3 passos simples para começar",
        step1Title: "Fixe a extensão",
        step1Desc: "Clique no ícone de quebra-cabeça na barra de ferramentas e depois clique no ícone de fixar ao lado do nome da extensão.",
        step2Title: "Abra um vídeo e clique no ícone",
        step2Desc: "Vá a qualquer vídeo e clique no ícone da extensão na barra de ferramentas.",
        step3Title: "Escolha a qualidade e baixe",
        step3Desc: "Selecione a qualidade desejada e clique em Baixar. O arquivo será salvo automaticamente.",
        step3TitleMp3: "Clique em Baixar MP3",
        step3DescMp3: "A extensão extrairá o áudio automaticamente. Clique em Baixar MP3 e o arquivo será salvo.",
        readyTitle: "Tudo pronto!",
        readyDesc: "Abra qualquer vídeo e clique no ícone da extensão para começar a baixar.",
        clickHere: "clique aqui"
    },
    zh: {
        trimPlaceholder: "分:秒",
        videoToMp3: "视频转 MP3",
        videoToMp4: "视频转 MP4",
        preparingVideo: "正在准备视频…",
        preparingAudio: "正在准备音频…",
        savingToPC: "正在保存到您的电脑…",
        waitForPrevious: "请等待当前下载完成",
        format: "格式",
        trimTitle: "裁剪（可选）",
        trimStart: "开始",
        trimEnd: "结束",
        trimHint: "留空表示完整音轨",
        trimInvalid: "时间无效。请使用 M:SS 或 H:MM:SS",
        losslessNote: "无损 — 不适用比特率",
        suggestFeature: "💡 提出功能建议或报告问题",
        whatsNew: "新功能",
        videoDownloader: "视频下载器",
        instagramDownloader: "Instagram 下载器",
        youtubeToVideo: "Fast Video Saver",
        audioDownloader: "Youtube Music 下载器",
        y2Converter: "Y2mate",
        audioGrabber: "YTMP3",
        youtubeToPdf: "视频转 PDF",
        transcriptLanguage: "字幕语言",
        autoOriginal: "自动（原始语言）",
        includeTimestamps: "包含时间戳",
        downloadPdf: "下载 PDF",
        fetchingTranscript: "正在获取字幕...",
        generatingPdf: "正在生成 PDF...",
        openVideoHint: "打开一个 YouTube 视频，将其字幕保存为 PDF。",
        pdfReady: "您的 PDF 已准备好",
        noTranscript: "该视频没有字幕 — YouTube 未提供此视频的字幕。",
        pdfTheme: "PDF 主题",
        themeLight: "浅色",
        themeDark: "深色",
        pdfStyle: "PDF 样式",
        styleClassic: "经典",
        styleAcademic: "学习",
        styleDeveloper: "开发者",
        styleExecutive: "商务",
        fontSize: "字体大小",
        fontNormal: "正常",
        fontLarge: "大",
        clickableTimestamps: "可点击时间戳",
        aiCleanChapters: "AI 清理与章节",
        aiSummary: "AI 摘要",
        aiProcessing: "AI 处理中…",
        connectingIg: "正在连接Instagram...",
        selectQuality: "选择画质",
        best: "最佳",
        download: "下载",
        downloadMp3: "下载 MP3",
        fetchingFormats: "获取格式中...",
        invalidToken: "API令牌无效 - 请检查扩展设置",
        serverBusy: "服务器繁忙 - 请稍后重试",
        fetchFailed: "获取格式失败",
        noFfmpeg: "未找到ffmpeg - 仅显示合并格式。安装ffmpeg以获取所有画质。",
        video: "视频",
        audio: "音频",
        downloading: "下载中...",
        downloadingVideo: "下载视频中...",
        downloadingAudio: "下载音频中...",
        merging: "合并中...",
        preparing: "准备中...",
        connecting: "正在连接YouTube...",
        converting: "正在转换为MP3...",
        finalizing: "即将完成...",
        starting: "开始下载...",
        queued: "排队中 - 等待...",
        downloadComplete: "下载完成",
        videoReady: "视频已准备好",
        fileReady: "文件已就绪",
        showInFolder: "在文件夹中显示",
        close: "关闭",
        downloadFailed: "下载失败",
        subscriptionRequired: "继续需要订阅",
        contactSupport: "联系客服",
        manageSubscription: "管理订阅",
        accountTitle: "客服与订阅",
        accountDesc: "疑问、账单或取消订阅 — 我们随时为您服务。",
        somethingWrong: "出了点问题",
        serverBusyDownload: "服务器繁忙 - 下载过多，请稍后重试",
        dailyLimitReached: "已达到每日下载上限，请明天再试。",
        dailyLimitTitle: "已达每日上限",
        dailyLimitUpsell: "今天的免费下载已用完。明天再来 — 或立即订阅，畅享无限下载。",
        getUnlimited: "获取无限下载",
        subscriptionActivating: "订阅已生效 — 正在完成设置，重试中…",
        alreadySubscribed: "已经订阅了？登录",
        serverError: "服务器错误",
        lostConnection: "与服务器的连接丢失",
        almostDone: "即将完成",
        etaMinSec: "剩余 {m}分 {s}秒",
        etaSec: "剩余 {s}秒",
        settings: "设置",
        serverUrl: "服务器地址",
        apiToken: "API令牌",
        language: "语言",
        save: "保存",
        settingsSaved: "设置已保存！",
        loading: "加载中...",
        clickVideoHint: "点击要下载的视频，然后重新打开扩展程序。",
        clickTrackHint: "点击要下载的曲目，然后重新打开扩展程序。",
        whatsNewTitle: "新功能",
        whatsNewText: "音频下载现在包含封面、标签和歌词。新增播放列表下载和 Shorts 支持。",
        whatsNewTextVideo: "现已支持播放列表和 Shorts。下载前可裁剪，也可只提取 MP3 音频。",
        downloadPlaylist: "下载播放列表",
        stopQueue: "停止",
        tracksFound: "找到 {n} 首曲目",
        scanningPage: "正在扫描页面上的视频...",
        noVideosFound: "此页面未找到视频",
        videosFound: "找到 {n} 个视频",
        rateUs: "您的体验如何？",
        thanksFeedback: "感谢您的反馈！",
        welcomeTitle: "欢迎！",
        welcomeSubtitle: "按照以下3个简单步骤开始使用",
        step1Title: "固定扩展程序",
        step1Desc: "点击浏览器工具栏中的拼图图标，然后点击扩展名称旁边的固定图标。",
        step2Title: "打开视频并点击图标",
        step2Desc: "前往任意视频，然后点击工具栏中的扩展图标。",
        step3Title: "选择画质并下载",
        step3Desc: "选择您想要的画质，然后点击下载。文件将自动保存。",
        step3TitleMp3: "点击下载MP3",
        step3DescMp3: "扩展程序将自动提取音频。点击下载MP3，文件将自动保存。",
        readyTitle: "一切就绪！",
        readyDesc: "打开任意视频，点击扩展图标即可开始下载。",
        clickHere: "点击这里"
    },
    ja: {
        trimPlaceholder: "分:秒",
        videoToMp3: "動画をMP3に",
        videoToMp4: "動画をMP4に",
        preparingVideo: "動画を準備中…",
        preparingAudio: "音声を準備中…",
        savingToPC: "コンピュータに保存中…",
        waitForPrevious: "現在のダウンロードが完了するまでお待ちください",
        format: "形式",
        trimTitle: "トリミング（任意）",
        trimStart: "開始",
        trimEnd: "終了",
        trimHint: "空欄で全体をダウンロード",
        trimInvalid: "無効な時間です。M:SS または H:MM:SS で入力",
        losslessNote: "ロスレス — ビットレートは無効",
        suggestFeature: "💡 機能の提案・不具合の報告",
        whatsNew: "新着情報",
        videoDownloader: "ビデオダウンローダー",
        instagramDownloader: "Instagram ダウンローダー",
        youtubeToVideo: "Fast Video Saver",
        audioDownloader: "Youtube Music ダウンローダー",
        y2Converter: "Y2mate",
        audioGrabber: "YTMP3",
        youtubeToPdf: "動画をPDFに",
        transcriptLanguage: "文字起こしの言語",
        autoOriginal: "自動（元の言語）",
        includeTimestamps: "タイムスタンプを含める",
        downloadPdf: "PDFをダウンロード",
        fetchingTranscript: "文字起こしを取得中...",
        generatingPdf: "PDFを生成中...",
        openVideoHint: "YouTube動画を開くと、その文字起こしをPDFとして保存できます。",
        pdfReady: "PDFの準備ができました",
        noTranscript: "この動画には文字起こしがありません — YouTubeが字幕を提供していません。",
        pdfTheme: "PDFテーマ",
        themeLight: "ライト",
        themeDark: "ダーク",
        pdfStyle: "PDFスタイル",
        styleClassic: "クラシック",
        styleAcademic: "学習",
        styleDeveloper: "開発者",
        styleExecutive: "ビジネス",
        fontSize: "文字サイズ",
        fontNormal: "標準",
        fontLarge: "大",
        clickableTimestamps: "クリック可能なタイムスタンプ",
        aiCleanChapters: "AI整形＆チャプター",
        aiSummary: "AI要約",
        aiProcessing: "AI処理中…",
        connectingIg: "Instagramに接続中...",
        selectQuality: "画質を選択",
        best: "最高",
        download: "ダウンロード",
        downloadMp3: "MP3をダウンロード",
        fetchingFormats: "フォーマットを取得中...",
        invalidToken: "APIトークンが無効です — 設定を確認してください",
        serverBusy: "サーバーがビジーです — 後でお試しください",
        fetchFailed: "フォーマットの取得に失敗しました",
        noFfmpeg: "ffmpegが見つかりません — 結合フォーマットのみ表示。全画質にはffmpegをインストールしてください。",
        video: "動画",
        audio: "音声",
        downloading: "ダウンロード中...",
        downloadingVideo: "動画をダウンロード中...",
        downloadingAudio: "音声をダウンロード中...",
        merging: "結合中...",
        preparing: "準備中...",
        connecting: "YouTubeに接続中...",
        converting: "MP3に変換中...",
        finalizing: "もうすぐ完了...",
        starting: "ダウンロードを開始...",
        queued: "キューで待機中...",
        downloadComplete: "ダウンロード完了",
        videoReady: "動画の準備ができました",
        fileReady: "ファイルの準備ができました",
        showInFolder: "フォルダに表示",
        close: "閉じる",
        downloadFailed: "ダウンロード失敗",
        subscriptionRequired: "続行にはサブスクリプションが必要です",
        contactSupport: "サポートに問い合わせ",
        manageSubscription: "サブスクリプションを管理",
        accountTitle: "サポートとサブスクリプション",
        accountDesc: "ご質問・お支払い・解約のご相談はこちらへ。",
        somethingWrong: "エラーが発生しました",
        serverBusyDownload: "サーバーがビジーです — ダウンロードが多すぎます、後でお試しください",
        dailyLimitReached: "1日のダウンロード上限に達しました。明日再度お試しください。",
        dailyLimitTitle: "本日の上限に達しました",
        dailyLimitUpsell: "今日の無料ダウンロードを使い切りました。明日またお越しください — または今すぐ登録すれば無制限でダウンロードできます。",
        getUnlimited: "無制限にする",
        subscriptionActivating: "サブスクリプション有効 — 設定を完了しています。再試行中…",
        alreadySubscribed: "すでに登録済みですか？ログイン",
        serverError: "サーバーエラー",
        lostConnection: "サーバーとの接続が切断されました",
        almostDone: "まもなく完了",
        etaMinSec: "残り {m}分 {s}秒",
        etaSec: "残り {s}秒",
        settings: "設定",
        serverUrl: "サーバーURL",
        apiToken: "APIトークン",
        language: "言語",
        save: "保存",
        settingsSaved: "設定を保存しました！",
        loading: "読み込み中...",
        clickVideoHint: "ダウンロードしたい動画をクリックしてから、もう一度拡張機能を開いてください。",
        clickTrackHint: "ダウンロードしたい曲をクリックしてから、もう一度拡張機能を開いてください。",
        whatsNewTitle: "新機能",
        whatsNewText: "音声はカバー画像・タグ・歌詞付きでダウンロードされるようになりました。再生リストとShortsにも対応しました。",
        whatsNewTextVideo: "再生リストとShortsに対応しました。ダウンロード前のトリミングや、音声だけをMP3で取り出すこともできます。",
        downloadPlaylist: "再生リストをダウンロード",
        stopQueue: "停止",
        tracksFound: "{n} 曲見つかりました",
        scanningPage: "ページの動画を検索中...",
        noVideosFound: "このページに動画が見つかりません",
        videosFound: "{n}本の動画が見つかりました",
        rateUs: "ご利用はいかがでしたか？",
        thanksFeedback: "フィードバックありがとうございます！",
        welcomeTitle: "ようこそ！",
        welcomeSubtitle: "3つの簡単なステップで始めましょう",
        step1Title: "拡張機能をピン留め",
        step1Desc: "ブラウザのツールバーにあるパズルアイコンをクリックし、拡張機能名の横にあるピンアイコンをクリックします。",
        step2Title: "動画を開いてアイコンをクリック",
        step2Desc: "動画ページを開き、ツールバーの拡張機能アイコンをクリックします。",
        step3Title: "画質を選んでダウンロード",
        step3Desc: "お好みの画質を選択し、ダウンロードをクリックします。ファイルは自動的に保存されます。",
        step3TitleMp3: "MP3をダウンロードをクリック",
        step3DescMp3: "拡張機能が自動的に音声を抽出します。MP3をダウンロードをクリックするとファイルが保存されます。",
        readyTitle: "準備完了！",
        readyDesc: "動画を開き、拡張機能アイコンをクリックしてダウンロードを開始しましょう。",
        clickHere: "ここをクリック"
    },
    ko: {
        trimPlaceholder: "분:초",
        videoToMp3: "비디오를 MP3로",
        videoToMp4: "비디오를 MP4로",
        preparingVideo: "동영상 준비 중…",
        preparingAudio: "오디오 준비 중…",
        savingToPC: "컴퓨터에 저장 중…",
        waitForPrevious: "현재 다운로드가 끝날 때까지 기다려 주세요",
        format: "형식",
        trimTitle: "자르기 (선택)",
        trimStart: "시작",
        trimEnd: "끝",
        trimHint: "전체 트랙은 비워 두세요",
        trimInvalid: "잘못된 시간입니다. M:SS 또는 H:MM:SS 사용",
        losslessNote: "무손실 — 비트레이트 미적용",
        suggestFeature: "💡 기능 제안 또는 버그 신고",
        whatsNew: "새로운 기능",
        videoDownloader: "비디오 다운로더",
        instagramDownloader: "Instagram 다운로더",
        youtubeToVideo: "Fast Video Saver",
        audioDownloader: "Youtube Music 다운로더",
        y2Converter: "Y2mate",
        audioGrabber: "YTMP3",
        youtubeToPdf: "동영상을 PDF로",
        transcriptLanguage: "스크립트 언어",
        autoOriginal: "자동 (원본 언어)",
        includeTimestamps: "타임스탬프 포함",
        downloadPdf: "PDF 다운로드",
        fetchingTranscript: "스크립트 가져오는 중...",
        generatingPdf: "PDF 생성 중...",
        openVideoHint: "YouTube 동영상을 열면 스크립트를 PDF로 저장할 수 있습니다.",
        pdfReady: "PDF가 준비되었습니다",
        noTranscript: "이 동영상에는 스크립트가 없습니다 — YouTube에서 자막을 제공하지 않습니다.",
        pdfTheme: "PDF 테마",
        themeLight: "라이트",
        themeDark: "다크",
        pdfStyle: "PDF 스타일",
        styleClassic: "클래식",
        styleAcademic: "학습용",
        styleDeveloper: "개발자",
        styleExecutive: "비즈니스",
        fontSize: "글자 크기",
        fontNormal: "보통",
        fontLarge: "크게",
        clickableTimestamps: "클릭 가능한 타임스탬프",
        aiCleanChapters: "AI 정리 및 챕터",
        aiSummary: "AI 요약",
        aiProcessing: "AI 처리 중…",
        connectingIg: "Instagram에 연결 중...",
        selectQuality: "화질 선택",
        best: "최고",
        download: "다운로드",
        downloadMp3: "MP3 다운로드",
        fetchingFormats: "포맷 가져오는 중...",
        invalidToken: "잘못된 API 토큰 — 확장 설정을 확인하세요",
        serverBusy: "서버가 바쁩니다 — 잠시 후 다시 시도하세요",
        fetchFailed: "포맷을 가져오지 못했습니다",
        noFfmpeg: "ffmpeg를 찾을 수 없습니다 — 결합된 포맷만 표시됩니다. 모든 화질을 사용하려면 ffmpeg를 설치하세요.",
        video: "비디오",
        audio: "오디오",
        downloading: "다운로드 중...",
        downloadingVideo: "비디오 다운로드 중...",
        downloadingAudio: "오디오 다운로드 중...",
        merging: "병합 중...",
        preparing: "준비 중...",
        connecting: "YouTube에 연결 중...",
        converting: "MP3로 변환 중...",
        finalizing: "거의 완료, 마무리 중...",
        starting: "다운로드 시작...",
        queued: "대기열 — 대기 중...",
        downloadComplete: "다운로드 완료",
        videoReady: "비디오가 준비되었습니다",
        fileReady: "파일이 준비되었습니다",
        showInFolder: "폴더에서 보기",
        close: "닫기",
        downloadFailed: "다운로드 실패",
        subscriptionRequired: "계속하려면 구독이 필요합니다",
        contactSupport: "고객 지원 문의",
        manageSubscription: "구독 관리",
        accountTitle: "지원 및 구독",
        accountDesc: "문의, 결제, 구독 취소 — 도와드리겠습니다.",
        somethingWrong: "문제가 발생했습니다",
        serverBusyDownload: "서버가 바쁩니다 — 다운로드가 너무 많습니다. 나중에 다시 시도하세요",
        dailyLimitReached: "일일 다운로드 한도에 도달했습니다. 내일 다시 시도해 주세요.",
        dailyLimitTitle: "일일 한도 도달",
        dailyLimitUpsell: "오늘의 무료 다운로드를 모두 사용했습니다. 내일 다시 오시거나, 지금 구독하면 무제한으로 다운로드할 수 있습니다.",
        getUnlimited: "무제한 이용하기",
        subscriptionActivating: "구독이 활성화되었습니다 — 설정을 마무리하는 중, 다시 시도합니다…",
        alreadySubscribed: "이미 구독 중이신가요? 로그인",
        serverError: "서버 오류",
        lostConnection: "서버와의 연결이 끊어졌습니다",
        almostDone: "거의 완료",
        etaMinSec: "{m}분 {s}초 남음",
        etaSec: "{s}초 남음",
        settings: "설정",
        serverUrl: "서버 URL",
        apiToken: "API 토큰",
        language: "언어",
        save: "저장",
        settingsSaved: "설정이 저장되었습니다!",
        loading: "로딩 중...",
        clickVideoHint: "다운로드할 동영상을 클릭한 후 확장 프로그램을 다시 여세요.",
        clickTrackHint: "다운로드할 트랙을 클릭한 후 확장 프로그램을 다시 여세요.",
        whatsNewTitle: "새로운 기능",
        whatsNewText: "이제 오디오가 앨범 커버, 태그, 가사와 함께 다운로드됩니다. 재생목록 다운로드와 Shorts 지원이 추가되었습니다.",
        whatsNewTextVideo: "재생목록과 Shorts를 지원합니다. 다운로드 전에 구간을 자르거나 오디오만 MP3로 받을 수 있습니다.",
        downloadPlaylist: "재생목록 다운로드",
        stopQueue: "중지",
        tracksFound: "트랙 {n}개 발견",
        scanningPage: "페이지에서 동영상 검색 중...",
        noVideosFound: "이 페이지에서 동영상을 찾을 수 없습니다",
        videosFound: "{n}개의 동영상을 찾았습니다",
        rateUs: "경험은 어떠셨나요?",
        thanksFeedback: "피드백 감사합니다!",
        welcomeTitle: "환영합니다!",
        welcomeSubtitle: "3가지 간단한 단계를 따라 시작하세요",
        step1Title: "확장 프로그램 고정",
        step1Desc: "브라우저 도구 모음에서 퍼즐 아이콘을 클릭한 다음, 확장 프로그램 이름 옆의 고정 아이콘을 클릭하세요.",
        step2Title: "동영상을 열고 아이콘 클릭",
        step2Desc: "동영상 페이지로 이동한 다음, 도구 모음에서 확장 프로그램 아이콘을 클릭하세요.",
        step3Title: "화질을 선택하고 다운로드",
        step3Desc: "원하는 화질을 선택하고 다운로드를 클릭하세요. 파일이 자동으로 저장됩니다.",
        step3TitleMp3: "MP3 다운로드 클릭",
        step3DescMp3: "확장 프로그램이 자동으로 오디오를 추출합니다. MP3 다운로드를 클릭하면 파일이 저장됩니다.",
        readyTitle: "모든 준비 완료!",
        readyDesc: "동영상을 열고 확장 프로그램 아이콘을 클릭하여 다운로드를 시작하세요.",
        clickHere: "여기를 클릭"
    },
    tr: {
        trimPlaceholder: "dk:sn",
        videoToMp3: "Video'dan MP3'e",
        videoToMp4: "Video'dan MP4'e",
        preparingVideo: "Video hazırlanıyor...",
        preparingAudio: "Ses hazırlanıyor...",
        savingToPC: "Bilgisayarınıza kaydediliyor...",
        waitForPrevious: "Lütfen mevcut indirmenin bitmesini bekleyin",
        format: "Format",
        trimTitle: "Kırp (isteğe bağlı)",
        trimStart: "Başlangıç",
        trimEnd: "Bitiş",
        trimHint: "Tüm parça için boş bırakın",
        trimInvalid: "Geçersiz süre. M:SS veya H:MM:SS kullanın",
        losslessNote: "Kayıpsız — bit hızı geçerli değil",
        suggestFeature: "💡 Özellik öner veya hata bildir",
        whatsNew: "Yenilikler",
        videoDownloader: "Video İndirici",
        instagramDownloader: "Instagram İndirici",
        youtubeToVideo: "Fast Video Saver",
        audioDownloader: "Youtube Music İndirici",
        y2Converter: "Y2mate",
        audioGrabber: "YTMP3",
        youtubeToPdf: "Videodan PDF'e",
        transcriptLanguage: "Transkript dili",
        autoOriginal: "Otomatik (orijinal dil)",
        includeTimestamps: "Zaman damgaları ekle",
        downloadPdf: "PDF indir",
        fetchingTranscript: "Transkript alınıyor...",
        generatingPdf: "PDF oluşturuluyor...",
        openVideoHint: "Transkriptini PDF olarak kaydetmek için bir YouTube videosu açın.",
        pdfReady: "PDF'iniz hazır",
        noTranscript: "Bu videonun transkripti yok — YouTube bu video için altyazı sağlamıyor.",
        pdfTheme: "PDF teması",
        themeLight: "Açık",
        themeDark: "Koyu",
        pdfStyle: "PDF stili",
        styleClassic: "Klasik",
        styleAcademic: "Akademik",
        styleDeveloper: "Geliştirici",
        styleExecutive: "Kurumsal",
        fontSize: "Yazı boyutu",
        fontNormal: "Normal",
        fontLarge: "Büyük",
        clickableTimestamps: "Tıklanabilir zaman damgaları",
        aiCleanChapters: "AI temizleme ve bölümler",
        aiSummary: "AI özeti",
        aiProcessing: "AI işliyor…",
        connectingIg: "Instagram'a bağlanılıyor...",
        selectQuality: "Kalite seçin",
        best: "En iyi",
        download: "İndir",
        downloadMp3: "MP3 İndir",
        fetchingFormats: "Formatlar yükleniyor...",
        invalidToken: "Geçersiz API token — eklenti ayarlarını kontrol edin",
        serverBusy: "Sunucu meşgul — daha sonra tekrar deneyin",
        fetchFailed: "Formatlar alınamadı",
        noFfmpeg: "ffmpeg bulunamadı — yalnızca birleşik formatlar gösterildi. Tüm kaliteler için ffmpeg yükleyin.",
        video: "video",
        audio: "ses",
        downloading: "İndiriliyor...",
        downloadingVideo: "Video indiriliyor...",
        downloadingAudio: "Ses indiriliyor...",
        merging: "Birleştiriliyor...",
        preparing: "Hazırlanıyor...",
        connecting: "YouTube'a bağlanılıyor...",
        converting: "MP3'e dönüştürülüyor...",
        finalizing: "Neredeyse bitti, tamamlanıyor...",
        starting: "İndirme başlatılıyor...",
        queued: "Sırada — bekleniyor...",
        downloadComplete: "İndirme tamamlandı",
        videoReady: "Videonuz hazır",
        fileReady: "Dosyanız hazır",
        showInFolder: "Klasörde göster",
        close: "Kapat",
        downloadFailed: "İndirme başarısız",
        subscriptionRequired: "Devam etmek için abonelik gerekli",
        contactSupport: "Destekle iletişime geçin",
        manageSubscription: "Aboneliği yönet",
        accountTitle: "Destek ve abonelik",
        accountDesc: "Sorular, ödeme veya abonelik iptali — yardıma hazırız.",
        somethingWrong: "Bir şeyler ters gitti",
        serverBusyDownload: "Sunucu meşgul — çok fazla indirme, daha sonra tekrar deneyin",
        dailyLimitReached: "Günlük indirme sınırına ulaşıldı. Yarın tekrar deneyin.",
        dailyLimitTitle: "Günlük sınıra ulaşıldı",
        dailyLimitUpsell: "Bugünkü ücretsiz indirmelerinizi kullandınız. Yarın tekrar gelin — ya da şimdi abone olup sınırsız indirin.",
        getUnlimited: "Sınırsıza geç",
        subscriptionActivating: "Abonelik aktif — kurulum tamamlanıyor, yeniden deneniyor…",
        alreadySubscribed: "Aboneliğiniz var mı? Giriş yapın",
        serverError: "Sunucu hatası",
        lostConnection: "Sunucu bağlantısı kesildi",
        almostDone: "neredeyse bitti",
        etaMinSec: "{m}dk {s}sn kaldı",
        etaSec: "{s}sn kaldı",
        settings: "Ayarlar",
        serverUrl: "Sunucu URL",
        apiToken: "API Token",
        language: "Dil",
        save: "Kaydet",
        settingsSaved: "Ayarlar kaydedildi!",
        loading: "Yükleniyor...",
        clickVideoHint: "İndirmek istediğiniz videoya tıklayın, ardından uzantıyı tekrar açın.",
        clickTrackHint: "İndirmek istediğiniz parçaya tıklayın, ardından uzantıyı tekrar açın.",
        whatsNewTitle: "Yenilikler",
        whatsNewText: "Sesler artık kapak, etiketler ve şarkı sözleriyle indiriliyor. Oynatma listesi indirme ve Shorts desteği eklendi.",
        whatsNewTextVideo: "Artık oynatma listeleri ve Shorts destekleniyor. İndirmeden önce kırpın veya yalnızca sesi MP3 olarak alın.",
        downloadPlaylist: "Oynatma listesini indir",
        stopQueue: "Durdur",
        tracksFound: "{n} parça bulundu",
        scanningPage: "Sayfada video aranıyor...",
        noVideosFound: "Bu sayfada video bulunamadı",
        videosFound: "{n} video bulundu",
        rateUs: "Deneyiminiz nasıldı?",
        thanksFeedback: "Geri bildiriminiz için teşekkürler!",
        welcomeTitle: "Hoş geldiniz!",
        welcomeSubtitle: "Başlamak için bu 3 basit adımı takip edin",
        step1Title: "Uzantıyı sabitleyin",
        step1Desc: "Tarayıcı araç çubuğundaki yapboz simgesine tıklayın, ardından uzantı adının yanındaki pin simgesine tıklayın.",
        step2Title: "Bir videoyu açın ve simgeye tıklayın",
        step2Desc: "Herhangi bir videoya gidin, ardından araç çubuğundaki uzantı simgesine tıklayın.",
        step3Title: "Kaliteyi seçin ve indirin",
        step3Desc: "İstediğiniz kaliteyi seçin ve İndir'e tıklayın. Dosyanız otomatik olarak kaydedilecektir.",
        step3TitleMp3: "MP3 İndir'e tıklayın",
        step3DescMp3: "Uzantı sesi otomatik olarak çıkaracaktır. MP3 İndir'e tıklayın ve dosyanız kaydedilecektir.",
        readyTitle: "Her şey hazır!",
        readyDesc: "Herhangi bir videoyu açın ve indirmeye başlamak için uzantı simgesine tıklayın.",
        clickHere: "buraya tıklayın"
    }
};
function a(e) {
    i = e,
    chrome.storage.sync.set({
        lang: e
    })
}
let i = "en";
function n(t, n) {
    const o = document.createElement("select");
    o.className = "lang-select";
    for (const [t,a] of Object.entries(e)) {
        const e = document.createElement("option");
        e.value = t,
        e.textContent = a,
        t === i && (e.selected = !0),
        o.appendChild(e)
    }
    return o.addEventListener("change", () => {
        a(o.value),
        n ? n() : location.reload()
    }
    ),
    t.appendChild(o),
    o
}
function o() {
    return i
}
function r(e) {
    chrome.storage.sync.get({
        lang: null
    }, t => {
        i = t.lang || s(),
        e && e(i)
    }
    )
}
function s() {
    const t = (navigator.language || "en").split("-")[0].toLowerCase();
    return e[t] ? t : "en"
}
function d(e) {
    return (t[i] || t.en)[e] || t.en[e] || e
}
const l = {
    serverUrl: "https://api.yt-video-to-mp3.club",
    apiToken: "Z3FSP7XfWRgSRfp53dgnOYHJEf8KeLgnTdRZweTg3GE"
}
  , c = {
    id: "youtube-to-mp3",
    mode: "mp3",
    whatsNew: "audio-covers-2026-07",
    uninstallUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdZTAdKqqiBR9b_unxVXnfY_ANV25CtjzxhRULKk0DmQfI-mA/viewform?usp=publish-editor",
    feedbackUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeGSXkxbrxKd6CMjvQRBI0dOWWVfU6CNcqp9VIwi20zL1L9Ag/viewform?usp=publish-editor",
    storeUrl: "https://chromewebstore.google.com/detail/video-to-mp3/ogoimgmekoacpndfanncfplddpjnecjm/reviews",
    featureRequestUrl: "https://videotomp3.featurebase.app/",
    paywall: {
        paywallId: "822",
        apiOrigin: "https://app.yt-video-to-mp3.club"
    }
}
  , u = new URLSearchParams(window.location.search)
  , m = u.get("url")
  , g = u.get("format_id")
  , p = u.get("ext") || ""
  , h = u.get("audio_quality") || "320"
  , v = u.get("start")
  , y = u.get("end")
  , f = u.get("title") || "Video"
  , w = u.get("thumbnail") || ""
  , b = u.get("sub_lang") || ""
  , T = "0" !== u.get("ts")
  , k = u.get("style") || "classic"
  , P = "dark" === u.get("theme") ? "dark" : "light"
  , S = "large" === u.get("fs") ? "large" : "normal"
  , D = "0" !== u.get("tslinks")
  , F = "1" === u.get("ai_summary")
  , C = "1" === u.get("ai_clean")
  , M = document.getElementById("e770b06fb")
  , I = document.getElementById("e8414ef03")
  , x = document.getElementById("e157432e4")
  , z = document.getElementById("e84150845")
  , A = document.getElementById("e47ca0e21")
  , L = document.getElementById("eb7067fb1")
  , E = document.getElementById("ec65486b9")
  , V = document.getElementById("e6f1a1ab5")
  , B = document.getElementById("eaa0b2b4b")
  , q = document.getElementById("ef48ec824")
  , R = document.getElementById("ec6f0ddf9")
  , N = document.getElementById("e842df5aa")
  , U = document.getElementById("e1243f61d")
  , H = document.getElementById("e16ee8100")
  , Y = document.getElementById("e1269cc68")
  , _ = document.getElementById("e17197627")
  , $ = document.getElementById("e242fb286")
  , O = document.getElementById("e400683ce")
  , G = document.getElementById("e44464ad6")
  , K = document.getElementById("efb94d937")
  , j = "ready" === c.paywall?.gateAt;
let Q = l.serverUrl
  , W = l.apiToken
  , X = ""
  , Z = null
  , J = null
  , ee = null;
I.textContent = f,
w ? z.src = w : z.style.display = "none",
r( () => {
    He();
    const t = document.getElementById("e9d9a9eb8")
      , i = document.createElement("select");
    i.className = "lang-select";
    for (const [t,a] of Object.entries(e)) {
        const e = document.createElement("option");
        e.value = t,
        e.textContent = a,
        t === o() && (e.selected = !0),
        i.appendChild(e)
    }
    i.addEventListener("change", () => {
        a(i.value),
        He()
    }
    ),
    t.appendChild(i),
    Ae(),
    ze(),
    chrome.storage.sync.get({
        ...l,
        userId: ""
    }, e => {
        Q = e.serverUrl,
        W = e.apiToken,
        X = e.userId || "";
        const t = u.get("task_id")
          , a = u.get("worker_url");
        t && a ? (J = t,
        ee = a,
        x.textContent = `Task: ${t}`,
        j ? ge = ye().catch( () => {}
        ) : (ae = !0,
        Promise.resolve(window.PaywallSDKReady).then( () => Pe())),
        xe(t, a)) : ve()
    }
    )
}
);
let te = null
  , ae = !1
  , ie = null
  , ne = !1
  , oe = !1
  , re = !1
  , se = 0
  , de = !1
  , le = !1
  , ce = null
  , ue = !1
  , me = !1
  , ge = Promise.resolve();
function pe(e) {
    E.style.width = "100%",
    L.textContent = "100%",
    M.classList.add("state-done"),
    q.classList.add("visible"),
    document.title = `${d("downloadComplete")} — ${f}`,
    e && (N.textContent = e),
    ke()
}
function he(e, t, a, i) {
    const n = (Date.now() - i) / 1e3;
    n <= 0 || a <= 0 || fetch(`${e}/internal/delivery-stats`, {
        method: "POST",
        headers: De(),
        body: JSON.stringify({
            task_id: t,
            bytes: a,
            seconds: n
        })
    }).catch( () => {}
    )
}
function ve() {
    j && Ee(),
    ge = ye().catch( () => {}
    )
}
async function ye() {
    if (await window.PaywallSDKReady,
    Pe()) {
        try {
            const e = await te.getAccess();
            if (ie = {
                access: e.access,
                reason: e.reason
            },
            Ve({
                access: e.access,
                reason: e.reason,
                hasSubscription: e.user?.has_active_subscription ?? null
            }),
            "granted" === e.access && "trial_blocked" !== e.reason)
                return void Ye()
        } catch {
            return Ve({
                access: "error",
                reason: "unreachable"
            }),
            void Ye()
        }
        j || te.open()
    } else
        Ye()
}
function fe() {
    if (!ce || ue)
        return;
    ue = !0;
    const e = ce;
    A.textContent = d("savingToPC"),
    L.textContent = "",
    E.style.width = "0%",
    V.textContent = "",
    B.textContent = "",
    document.title = `${d("savingToPC")} — ${f}`;
    const t = Date.now();
    if (chrome.downloads)
        chrome.downloads.download({
            url: e.url,
            headers: [{
                name: "X-API-Token",
                value: W
            }, {
                name: "X-User-ID",
                value: X
            }, {
                name: "X-Brand",
                value: c.id
            }]
        }, a => {
            Z = a,
            a ? Fe(a, e.name, e.workerUrl, e.taskId, t) : pe(e.name)
        }
        );
    else {
        const t = document.createElement("a");
        t.href = e.url,
        t.download = e.name || "video",
        t.click(),
        pe(e.name)
    }
}
function we() {
    M.classList.remove("state-error"),
    Y.classList.remove("visible"),
    G.classList.remove("visible"),
    K.classList.remove("visible"),
    document.title = `${d("downloading")} ${f}`
}
function be() {
    A.textContent = d("subscriptionRequired"),
    V.textContent = "",
    B.textContent = "",
    j && ce || (L.textContent = "",
    E.style.width = "0%")
}
async function Te() {
    let e;
    try {
        e = await te.getAccess()
    } catch {
        return
    }
    ie = {
        access: e.access,
        reason: e.reason
    },
    !0 === e.user?.has_active_subscription && (re = !0,
    Be(Ve({
        access: e.access,
        reason: e.reason,
        hasSubscription: !0
    }, 1)))
}
function ke() {
    chrome.storage.sync.get({
        downloadCount: 0,
        ratedAt: 0
    }, e => {
        const t = (e.downloadCount || 0) + 1;
        chrome.storage.sync.set({
            downloadCount: t
        });
        const a = (Date.now() - (e.ratedAt || 0)) / 864e5;
        if (t % 5 != 0 || a < 30)
            return;
        const i = document.getElementById("eb4785240")
          , n = document.querySelectorAll("#e46dc4c3c .star")
          , o = document.getElementById("e1ad16023");
        function r(e) {
            n.forEach( (t, a) => t.classList.toggle("lit", a < e))
        }
        i.classList.add("visible"),
        n.forEach(e => {
            e.addEventListener("mouseenter", () => r(parseInt(e.dataset.value))),
            e.addEventListener("mouseleave", () => r(0)),
            e.addEventListener("click", () => {
                const t = parseInt(e.dataset.value);
                r(t),
                o.style.display = "block",
                chrome.storage.sync.set({
                    ratedAt: Date.now()
                }),
                n.forEach(e => {
                    e.style.cursor = "default",
                    e.replaceWith(e.cloneNode(!0))
                }
                ),
                setTimeout( () => {
                    t <= 3 ? $e && window.open($e, "_blank") : Oe && window.open(Oe, "_blank")
                }
                , 800)
            }
            )
        }
        )
    }
    )
}
function Pe() {
    if (te)
        return !0;
    if (!c.paywall || !window.PaywallSDK)
        return !1;
    te = new PaywallSDK({
        paywallId: c.paywall.paywallId,
        apiOrigin: c.paywall.apiOrigin,
        auth: !0
    }),
    te.on("trial_blocked", Ye),
    te.on("purchase_completed", () => {
        qe(),
        re = !0;
        const e = Ve({
            access: "granted",
            reason: "purchase_completed",
            hasSubscription: !0,
            upsell: oe ? 1 : null
        }, 1);
        if (ne)
            return ne = !1,
            void Be(e);
        Ye()
    }
    ),
    te.on("close", () => {
        ae || ne || be(),
        ne = !1,
        le && (le = !1,
        Te())
    }
    );
    let e = !1;
    return te.on("ready", () => {
        e = !0
    }
    ),
    te.on("error", () => {
        e || ae || (Ve({
            access: "error",
            reason: "bootstrap_failed"
        }),
        Ye(),
        te.close())
    }
    ),
    Ke(),
    !0
}
function Se(e) {
    return e > 1e9 ? `${(e / 1e9).toFixed(1)} GB` : e > 1e6 ? `${(e / 1e6).toFixed(1)} MB` : `${(e / 1e3).toFixed(0)} KB`
}
function De() {
    return {
        "Content-Type": "application/json",
        "X-API-Token": W,
        "X-User-ID": X,
        "X-Brand": c.id
    }
}
function Fe(e, t, a, i, n) {
    let o = 0
      , r = Date.now();
    const s = setInterval( () => {
        chrome.downloads.search({
            id: e
        }, e => {
            if (!e || !e.length)
                return;
            const l = e[0];
            if ("in_progress" === l.state) {
                const e = l.bytesReceived || 0
                  , t = l.totalBytes || l.fileSize || 0;
                if (t > 0) {
                    const a = Math.round(e / t * 100);
                    E.style.width = `${a}%`,
                    L.textContent = `${a}%`,
                    document.title = `${a}% — ${f}`;
                    const i = Date.now()
                      , n = (i - r) / 1e3;
                    if (n > .5) {
                        const a = (e - o) / n;
                        if (V.textContent = a > 0 ? Ge(a) : "",
                        o = e,
                        r = i,
                        a > 0 && t > 0) {
                            const i = t - e
                              , n = Math.round(i / a);
                            B.textContent = n > 0 ? _e(n) : d("almostDone")
                        }
                    }
                }
                A.textContent = d("savingToPC")
            } else if ("complete" === l.state)
                clearInterval(s),
                he(a, i, l.totalBytes || l.fileSize || 0, n),
                pe(t);
            else if ("interrupted" === l.state) {
                if (clearInterval(s),
                j && !me && String(l.error || "").startsWith("SERVER_"))
                    return me = !0,
                    ce = null,
                    ue = !1,
                    J = null,
                    je = !1,
                    E.style.width = "0%",
                    L.textContent = "0%",
                    void Ee();
                Re(l.error || d("somethingWrong"))
            }
        }
        )
    }
    , 500)
}
function Ce() {
    try {
        const e = te.billing.getCachedPrices();
        return null === e || e.length > 0
    } catch {
        return !1
    }
}
function Me() {
    ne || (ne = !0,
    oe = "visibility_blocked" === ie?.reason,
    te.open({
        skipVisibility: !0,
        skipTrial: !0
    }))
}
const Ie = {
    "1.0.1": ["Choose audio format — MP3, M4A, OPUS, WAV", "Pick your MP3 bitrate up to 320 kbps", "Trim: download only the part you want"]
};
function xe(e, t) {
    let a = !1
      , i = 0;
    !async function n() {
        if (!a) {
            try {
                const n = await fetch(`${t}/progress/${e}`, {
                    headers: {
                        "X-API-Token": W,
                        "X-User-ID": X
                    }
                })
                  , o = await n.json();
                i = 0;
                const r = Math.round(o.progress);
                if (E.style.width = `${r}%`,
                L.textContent = `${r}%`,
                "queued" === o.status)
                    A.textContent = d("queued"),
                    document.title = `${d("queued")} — ${f}`;
                else if ("downloading" === o.status) {
                    const e = "video" === o.phase ? d("preparingVideo") : "audio" === o.phase ? d("preparingAudio") : "merging" === o.phase ? d("merging") : "converting" === o.phase ? d("converting") : "uploading" === o.phase ? d("finalizing") : "transcript" === o.phase ? d("fetchingTranscript") : "ai" === o.phase ? d("aiProcessing") : "rendering" === o.phase ? d("generatingPdf") : 0 === o.progress ? d("instagram" === c.mode ? "connectingIg" : "connecting") : d("preparing");
                    if (A.textContent = e,
                    V.textContent = o.speed ? Ge(o.speed) : "",
                    B.textContent = "",
                    document.title = `${r}% ${e} — ${f}`,
                    o.format_info) {
                        const e = o.format_info
                          , t = [e.resolution, e.ext].filter(Boolean)
                          , a = [e.has_video ? "video" : "", e.has_audio ? "audio" : ""].filter(Boolean);
                        t.length && (x.textContent = t.join(" · ") + (a.length ? ` (${a.join("+")})` : ""))
                    }
                } else {
                    if ("done" === o.status)
                        return a = !0,
                        je = !0,
                        ce = {
                            url: `${t}/file/${e}`,
                            name: o.download_name || o.filename,
                            size: o.filesize || 0,
                            workerUrl: t,
                            taskId: e
                        },
                        void (!j || ae ? fe() : ge.then(Le));
                    if ("error" === o.status)
                        return a = !0,
                        void ("pdf" === c.mode && /no transcript|no captions/i.test(o.error || "") ? Re(d("noTranscript")) : Re(o.error || d("somethingWrong")))
                }
            } catch {
                return i++,
                i >= 3 ? (a = !0,
                void Re(d("lostConnection"))) : void setTimeout(n, 2e3)
            }
            setTimeout(n, 1e3)
        }
    }()
}
function ze() {
    if (!c.featureRequestUrl)
        return;
    const e = chrome.runtime.getManifest().version
      , t = Ie[e];
    t && t.length && chrome.storage.sync.get({
        changelogSeen: ""
    }, a => {
        if (a.changelogSeen === e)
            return;
        document.getElementById("e81144f2f").textContent = `${d("whatsNew")} · v${e}`;
        const i = document.getElementById("e795204c0");
        i.innerHTML = "",
        t.forEach(e => {
            const t = document.createElement("li");
            t.textContent = e,
            i.appendChild(t)
        }
        ),
        document.getElementById("e4643e163").classList.add("visible");
        const n = document.getElementById("e3df10eb7");
        n?.classList.remove("visible"),
        document.getElementById("e9044e6da").addEventListener("click", () => {
            document.getElementById("e4643e163").classList.remove("visible"),
            c.featureRequestUrl && n?.classList.add("visible")
        }
        ),
        chrome.storage.sync.set({
            changelogSeen: e
        })
    }
    )
}
function Ae() {
    const e = c.featureRequestUrl;
    if (!e)
        return;
    const t = d("suggestFeature")
      , a = document.getElementById("e35f96223")
      , i = document.getElementById("e3df10eb7");
    a && (a.href = e,
    a.textContent = t),
    i && (i.href = e,
    i.textContent = t,
    i.classList.add("visible"))
}
function Le() {
    if (ae)
        fe();
    else if (te && !re) {
        if (E.style.width = "100%",
        L.textContent = "100%",
        V.textContent = "",
        B.textContent = "",
        A.textContent = d("fileReady"),
        document.title = `${d("fileReady")} — ${f}`,
        ce.size) {
            const e = Se(ce.size);
            x.textContent = x.textContent.startsWith("Task:") ? e : `${x.textContent} · ${e}`
        }
        try {
            te.open()
        } catch {
            Ye()
        }
    } else
        Ye()
}
async function Ee() {
    if (!de && !J) {
        de = !0,
        A.textContent = d("starting");
        try {
            const e = {
                url: m,
                format_id: g,
                ext: p,
                audio_quality: h
            };
            null != v && (e.start = parseFloat(v)),
            null != y && (e.end = parseFloat(y)),
            "pdf" === p && (b && (e.sub_lang = b),
            e.pdf_timestamps = T,
            e.pdf_style = k,
            e.pdf_theme = P,
            e.pdf_font_size = S,
            e.pdf_ts_links = D,
            e.pdf_ai_summary = F,
            e.pdf_ai_clean = C);
            const t = await fetch(`${Q}/download`, {
                method: "POST",
                headers: De(),
                body: JSON.stringify(e)
            });
            if (429 === t.status) {
                const e = (await t.json().catch( () => ({}))).detail;
                return void ("daily_limit_reached" === (e && "object" == typeof e ? e.code : null) ? (j && await Promise.race([ge, new Promise(e => setTimeout(e, 5e3))]),
                Ne()) : "string" == typeof e && e.includes("wait") ? Re(d("waitForPrevious")) : Re(d("serverBusyDownload")))
            }
            if (!t.ok)
                throw new Error(d("serverError"));
            const a = await t.json()
              , i = a.worker_url || Q;
            J = a.task_id,
            ee = i,
            x.textContent = `Task: ${a.task_id}`;
            const n = new URLSearchParams(window.location.search);
            n.set("task_id", a.task_id),
            n.set("worker_url", i),
            history.replaceState(null, "", `?${n.toString()}`),
            xe(a.task_id, i)
        } catch (e) {
            Re(e.message)
        } finally {
            de = !1
        }
    }
}
function Ve(e, t=0) {
    const a = te.auth?.getCachedSession?.() ?? null;
    return !a && t > 0 && setTimeout( () => Ve(e, t - 1), 3e3),
    fetch(`${Q}/pw-status`, {
        method: "POST",
        headers: De(),
        body: JSON.stringify({
            pw_user_id: a?.user?.id ?? null,
            pw_email: a?.user?.email ?? null,
            pw_is_anonymous: a?.user?.is_anonymous ?? null,
            pw_access: e.access ?? null,
            pw_reason: e.reason ?? null,
            pw_has_subscription: e.hasSubscription ?? null,
            pw_upsell: e.upsell ?? null
        })
    }).catch( () => {}
    )
}
function Be(e) {
    Promise.race([Promise.resolve(e), new Promise(e => setTimeout(e, 5e3))]).then( () => {
        we(),
        Ee()
    }
    )
}
function qe() {
    document.getElementById("e0ae9f46d").classList.add("visible")
}
function Re(e, t) {
    const a = t || d("downloadFailed");
    M.classList.add("state-error"),
    Y.classList.add("visible"),
    G.classList.remove("visible"),
    K.classList.remove("visible"),
    _.textContent = a,
    $.textContent = e,
    document.title = `${a} — ${f}`
}
function Ne() {
    if (re || "has_subscription" === ie?.reason)
        return void Ue();
    const e = "visibility_blocked" === ie?.reason
      , t = null !== te && null !== ie && Ce();
    Re(d(t && e ? "dailyLimitUpsell" : "dailyLimitReached"), d("dailyLimitTitle")),
    te && (K.textContent = d("alreadySubscribed"),
    K.classList.add("visible")),
    t && (G.textContent = d("getUnlimited"),
    G.classList.add("visible"),
    e ? Ve({
        access: ie.access,
        reason: ie.reason,
        upsell: 1
    }) : Me())
}
function Ue() {
    se >= 2 ? Re(d("dailyLimitReached"), d("dailyLimitTitle")) : (se++,
    Re(d("subscriptionActivating"), d("dailyLimitTitle")),
    setTimeout( () => {
        we(),
        Ee()
    }
    , 4e3))
}
function He() {
    document.title = `${d("downloading")} ${f}`,
    A.textContent = d("preparing"),
    R.textContent = d("downloadComplete"),
    N.textContent = d("pdf" === c.mode ? "pdfReady" : "videoReady"),
    U.textContent = d("showInFolder"),
    H.textContent = d("close"),
    Y.classList.contains("visible") || (_.textContent = d("downloadFailed"),
    $.textContent = d("somethingWrong")),
    G.classList.contains("visible") && (G.textContent = d("getUnlimited")),
    K.classList.contains("visible") && (K.textContent = d("alreadySubscribed")),
    O.textContent = d("close"),
    document.getElementById("eb5d446e7").textContent = d("rateUs"),
    document.getElementById("e1ad16023").textContent = d("thanksFeedback"),
    document.getElementById("e4f6456ff").textContent = d("contactSupport"),
    document.getElementById("e0ae9f46d").textContent = d("manageSubscription")
}
function Ye() {
    ae || (ae = !0,
    j ? ce && fe() : Ee())
}
function _e(e) {
    if ((e = Math.round(e)) <= 0)
        return d("almostDone");
    const t = Math.floor(e / 60)
      , a = e % 60;
    return t > 0 ? d("etaMinSec").replace("{m}", t).replace("{s}", a) : d("etaSec").replace("{s}", a)
}
U.addEventListener("click", () => {
    null !== Z && chrome.downloads && chrome.downloads.show(Z)
}
),
H.addEventListener("click", () => window.close()),
O.addEventListener("click", () => window.close()),
G.addEventListener("click", () => Me()),
K.addEventListener("click", e => {
    e.preventDefault(),
    te && (le = !0,
    te.openSignin())
}
);
const $e = c.feedbackUrl || ""
  , Oe = c.storeUrl || "";
function Ge(e) {
    return e > 1e6 ? `${(e / 1e6).toFixed(1)} MB/s` : e > 1e3 ? `${(e / 1e3).toFixed(0)} KB/s` : `${e} B/s`
}
function Ke() {
    document.getElementById("ea2b1d706").classList.add("visible"),
    document.getElementById("e4f6456ff").addEventListener("click", e => {
        e.preventDefault(),
        te.openSupport()
    }
    ),
    document.getElementById("e0ae9f46d").addEventListener("click", async e => {
        e.preventDefault();
        try {
            const {url: e} = await te.billing.getCustomerPortalUrl();
            chrome.tabs.create({
                url: e
            })
        } catch (e) {
            "identity_required" === e?.code ? te.openSignin() : te.openSupport()
        }
    }
    ),
    te.getAccess().then(e => {
        e.user?.purchases?.length && qe()
    }
    ).catch( () => {}
    )
}
let je = !1;
window.addEventListener("beforeunload", () => {
    if (!J || !ee || je)
        return;
    const e = `${ee}/cancel/${J}?token=${encodeURIComponent(W)}`
      , t = `${Q}/cancel/${J}?token=${encodeURIComponent(W)}&user_id=${encodeURIComponent(X)}`;
    navigator.sendBeacon(e),
    navigator.sendBeacon(t)
}
);
