/* =====================================================================
   CONFIG: edit this object to customise the whole site.
   Nothing else needs to change for everyday updates.
   ===================================================================== */
const CONFIG = {
  theme: "light",            // "light" | "dark" | "system"  (visitor's toggle choice is remembered)
  layout: "minimal",         // "minimal" | "cards" | "editorial"
  radius: "20px",            // corner radius for cards, e.g. "8px", "28px"
  contentWidth: "1120px",    // max width on large screens
  animations: true,          // false = no motion at all

  profile: {
    name: "JC Muñiz",
    handle: "JOHN CRISTOPHER L. MUÑIZ",   // "" to hide
    bio: "AdOps Specialist - Launcher/Backender," +""+""+""+ " and an Aspiring Full Stack Developer.",
    location: "Davao City, Philippines", // "" to hide
    status: "Available for new projects", // "" to hide
    badge: true,             // small decorative check mark (NOT a platform verification)
    photo: "assets/profile1.jpg",               // e.g. "assets/profile.jpg". Empty = initials placeholder
    photoAlt: "Portrait of Your Name",
    shape: "circle"          // "circle" | "rounded" | "square"
  },

  background: {
    mode: "plain",           // "plain" | "gradient" | "photo" | "none"
    image: "", // used only when mode is "photo"
    opacity: 0.35,           // photo strength 0 to 1 (only the photo fades, never the content)
    blur: 6,                 // px
    brightness: 1,           // 1 = unchanged, 0.8 = darker
    position: "center top",  // CSS background-position
    size: "cover",           // "cover" | "contain" | "auto"
    fixed: true,             // true = stays put while scrolling
    overlayColor: "auto",    // "auto" follows the theme, or any colour, e.g. "#000"
    overlayOpacity: 0.4      // 0 to 1, raise for easier reading
  },

  /* Order here = order on the page. show:false hides a section. */
  sections: [
    { id: "about",    show: false, title: "About" },
    { id: "links",    show: true,  title: "Find me online" },
    { id: "contact",  show: true,  title: "Contact" },
    { id: "payments", show: true,  title: "E-Wallets / FinTechs" },
    { id: "banks",    show: true,  title: "BANKS" },
    { id: "featured", show: false, title: "Featured" },
    { id: "interests",show: false, title: "Interests" },
    { id: "faq",      show: false, title: "Questions" }
  ],

  /* icon: a built-in name (globe mail phone chat play at code camera music send briefcase link),
     or an image path ("assets/icons/ig.svg"), a data: URL, or pasted <svg ...> markup (wrap in backticks).
     Add iconColor: true to keep a custom icon's own colours (default: black icons turn white in dark mode).
     Move items up or down to reorder. show:false hides one. group:"" is optional grouping. */
  socials: [
    { name: "Facebook",  user: "JC Muñiz (ジョン)",url:"https://www.facebook.com/USSS00024", label:"", group:"", show: true, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>facebook</title><path fill="currentColor" d="M11 12H8v2h3v6h2v-6h4v-2h-4V6h4V4h-4V2h6v6h-4v2h4v6h-4v6H9v-6H6v-6h3V6h2zm2-6h-2V4h2z"/></svg>',
    },
    
    { name: "Instagram", user: "@Джон",url:"https://www.instagram.com/usss_00024/?hl=en", label:"", group:"", show: true, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>instagram</title><path fill="currentColor" d="M18 22H6v-2h12zM6 20H4v-2h2zm14 0h-2v-2h2zM4 18H2V6h2zm18 0h-2V6h2zm-8-2h-4v-2h4zm-4-2H8v-4h2zm6 0h-2v-4h2zm-2-4h-4V8h4zm4-2h-2V6h2zM6 6H4V4h2zm14 0h-2V4h2zm-2-2H6V2h12z"/></svg>',
    },
    
    { name: "TikTok",    user: "@munizujon_06",url: "https://www.tiktok.com/@munizujon_06", label:"", group:"", show: true, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>tiktok</title><path fill="currentColor" d="M15 22H7v-2h8zm-8-2H5v-2h2zM17 8h2V6h2v4h-4v10h-2V6h2zM5 18H3v-6h2zM17 4h-4v14H9v-2h2v-2H9v-2h2v-2H7V8h4V2h6zM9 16H7v-2h2zm-2-4H5v-2h2zm12-6h-2V4h2z"/></svg>', 
    },

    { name: "Discord",   user: "itzme_jc",url: "https://discord.com/users/595820723260489728", label:"", group:"", show: true, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>discord</title><path fill="currentColor" d="M9 21H5v-2h4zm10 0h-4v-2h4zM5 19H3v-2h2zm12-2h-2v2h-2v-2h-2v2H9v-2H7v-2h10zm4 2h-2v-2h2zM3 17H1V7h2zm20 0h-2V7h2zm-12-4H8v-3h3zm5 0h-3v-3h3zM5 7H3V5h2zm10 0H9V5h6zm6 0h-2V5h2zM9 5H5V3h4zm10 0h-4V3h4z"/></svg>', 
    },
         
    { name: "Telegram",  user: "@BST067",url: "https://t.me/BST067", label:"", group:"", show: true, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>telegram</title><path fill="currentColor" d="M19 23H5v-2h14zM5 21H3v-2h2zm16 0h-2v-2h2zM3 19H1V5h2zm14 0h-2v-2h-4v-2h4V7h-3V5h5zm6 0h-2V5h2zm-10-8v2h-2v2H9v2H7v-4h2v-2zm-6 2H4v-2h3zm2-2H7V9h2zm3-2H9V7h3zM5 5H3V3h2zm16 0h-2V3h2zm-2-2H5V1h14z"/></svg>',
    },
    
    { name: "WhatsApp",  user: "@jcmuniz29",url: "https://wa.me/jcmuniz29", label:"", group:"", show: true,  
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>whatsapp</title><path fill="currentColor" d="M4 20h14v2H2V6h2zm16 0h-2v-2h2zm-9-9H9v2h2v2h2v-2h4v5h-7v-1H9v-2H7v-1H6V7h5zm11 7h-2V6h2zM6 6H4V4h2zm14 0h-2V4h2zm-2-2H6V2h12z"/></svg>', 
    },
      
    { name: "LINE",      user: "jc2629",url: "https://line.me/ti/p/jRATy278hn", label:"", group:"", show: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><title>email-mail-chat</title><path fill="currentColor" d="M22.1 15.24v1.52h-3.05v1.53H9.91v1.52h4.57v1.52H16v1.53h1.53v1.52h6.09v1.52h1.53v1.53h1.52v1.52h1.52v-6.09h1.53v-1.53h1.52v-6.09h-1.52v-1.53h-1.53v-1.52h-3.04V7.62h-1.53v7.62zm0-9.15h1.52v1.53H22.1Z"/><path fill="currentColor" d="M17.53 10.67h3.04v3.04h-3.04Zm1.52-6.1h3.05v1.52h-3.05Zm-7.62 6.1h3.05v3.04h-3.05Zm-3.05 9.14h1.53v1.52H8.38ZM6.86 3.05h12.19v1.52H6.86Zm0 15.24H5.34v6.09h1.52v-1.52h1.52v-1.53H6.86zm-1.52-7.62h3.04v3.04H5.34Zm-1.53-6.1h3.05v1.52H3.81Zm0 12.19h1.53v1.53H3.81Zm-1.52-1.52h1.52v1.52H2.29Zm0-9.15h1.52v1.53H2.29ZM.76 7.62h1.53v7.62H.76Z"/></svg>', 
    },

    { name: "GitHub",    user: "JC-0729",url: "https://github.com/JC-0729", label:"", group:"", show: true, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>github</title><path fill="currentColor" d="M5 2h4v2H7v2H5zm0 10H3V6h2zm2 2H5v-2h2zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2zm0 0v2H7v-2zm6-12v2H9V4zm4 2h-2V4h-2V2h4zm0 6V6h2v6zm-2 2v-2h2v2zm-2 2v-2h2v2zm0 2h-2v-2h2zm0 0h2v4h-2z"/></svg>', 
    },

    { name: "Portolio Website",   user: "portfolio-jcm.vercel.app ",url: "https://portfolio-jcm.vercel.app/", label:"", group:"", show: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><title>web</title><g fill="none" stroke="currentColor" stroke-width="3"><path stroke-linejoin="round" d="M3 24a21 21 0 1 0 42 0a21 21 0 1 0-42 0"/><path stroke-linejoin="round" d="M15 24a9 21 0 1 1 18 0a9 21 0 1 1-18 0"/><path stroke-linecap="round" d="M4.5 31h39m-39-14h39"/></g></svg>', 
    },


    { name: "X",         user: "@yourhandle",url: "https://x.com/yourhandle", label:"", group:"", show: false,  
      icon: "at",  },

    { name: "LinkedIn",  user: "Your Name",url: "https://linkedin.com/in/yourname", label:"", group:"", show: false,  
      icon: "briefcase", }
  ],

  /* href:  mailto:, tel:, or a normal https link */
  contacts: [
    { label: "ProtonMail", value: "jcm_a24@proton.me",  href: "mailto:jcm_a24@proton.me", show: true, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>protonmail-logo-2-solid</title><path fill="currentColor" fill-rule="evenodd" d="M0 20.09V9.867l5.869 5.191l.005.006a2.75 2.75 0 0 0 3.574.024l2.81-2.37q.054-.04.106-.084l3.886-3.331v12.88H2.095A2.095 2.095 0 0 1 0 20.09m17.75 2.095h2.155A2.095 2.095 0 0 0 22 20.088V4.375l-4.25 3.643zM6.86 13.932L0 7.865v-3.49l9.636 8.26q.1.086.209.157l-1.364 1.15a1.25 1.25 0 0 1-1.622-.009Z" clip-rule="evenodd"/></svg>',
    },
    { label: "Phone", value: "+63 954-152-7663",  href: "tel:+639541527663", show: true, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>phone</title><path fill="currentColor" d="M4 1h5v2H4zm5 2h2v4H9zM7 7h2v4H7zm-3 5h2v2H4zM2 3h2v9H2zm7 8h2v2H9zm2 2h2v2h-2zm2 2h4v2h-4zm4-2h4v2h-4zm4 2h2v5h-2zM6 14h2v2H6zm2 2h2v2H8zm2 2h2v2h-2zm2 2h9v2h-9z"/></svg>',
    },

    { label: "Gmail", value: "johncristopher56@gmail.com", href: "mailto:johncristopher56@gmail.com",   show: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>gmail</title><path fill="currentColor" d="M20 20H4v-2h16zM4 18H2V6h2zm18 0h-2V6h2zM8 10h2v2H8v4H6V8h2zm10 6h-2v-4h-2v-2h2V8h2zm-4-2h-4v-2h4zm6-8H4V4h16z"/></svg>',
     },

     { label: "Gmail", value: "jcmuniz0067@gmail.com", href: "mailto:jcmuniz0067@gmail.com",   show: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>gmail</title><path fill="currentColor" d="M20 20H4v-2h16zM4 18H2V6h2zm18 0h-2V6h2zM8 10h2v2H8v4H6V8h2zm10 6h-2v-4h-2v-2h2V8h2zm-4-2h-4v-2h4zm6-8H4V4h16z"/></svg>',
     },
  ],

  /* Placeholders. Replace with your real details. A number containing "X" disables Copy. */
  payments: [
    { provider: "GCash", holder: "JOHN CRISTOPHER MUNIZ", number: "09541527663", qr: "assets/payment-qr/gcash.JPG", link: "https://",
      note: "", show: true,
      icon: '<svg width="256px" height="256px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#4a4a4a" stroke-width="0.384"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.376" d="M84 96h36c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36c9.941 0 18.941 4.03 25.456 10.544"></path><path fill="#000000" d="M145.315 66.564a6 6 0 0 0-10.815 5.2l10.815-5.2ZM134.5 120.235a6 6 0 0 0 10.815 5.201l-10.815-5.201Zm-16.26-68.552a6 6 0 1 0 7.344-9.49l-7.344 9.49Zm7.344 98.124a6 6 0 0 0-7.344-9.49l7.344 9.49ZM84 152c-30.928 0-56-25.072-56-56H16c0 37.555 30.445 68 68 68v-12ZM28 96c0-30.928 25.072-56 56-56V28c-37.555 0-68 30.445-68 68h12Zm106.5-24.235C138.023 79.09 140 87.306 140 96h12c0-10.532-2.399-20.522-6.685-29.436l-10.815 5.2ZM140 96c0 8.694-1.977 16.909-5.5 24.235l10.815 5.201C149.601 116.522 152 106.532 152 96h-12ZM84 40c12.903 0 24.772 4.357 34.24 11.683l7.344-9.49A67.733 67.733 0 0 0 84 28v12Zm34.24 100.317C108.772 147.643 96.903 152 84 152v12a67.733 67.733 0 0 0 41.584-14.193l-7.344-9.49Z"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.376" d="M161.549 58.776C166.965 70.04 170 82.666 170 96c0 13.334-3.035 25.96-8.451 37.223"></path></g><g id="SVGRepo_iconCarrier"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.719999999999999" d="M84 96h36c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36c9.941 0 18.941 4.03 25.456 10.544"></path><path fill="#000000" d="M145.315 66.564a6 6 0 0 0-10.815 5.2l10.815-5.2ZM134.5 120.235a6 6 0 0 0 10.815 5.201l-10.815-5.201Zm-16.26-68.552a6 6 0 1 0 7.344-9.49l-7.344 9.49Zm7.344 98.124a6 6 0 0 0-7.344-9.49l7.344 9.49ZM84 152c-30.928 0-56-25.072-56-56H16c0 37.555 30.445 68 68 68v-12ZM28 96c0-30.928 25.072-56 56-56V28c-37.555 0-68 30.445-68 68h12Zm106.5-24.235C138.023 79.09 140 87.306 140 96h12c0-10.532-2.399-20.522-6.685-29.436l-10.815 5.2ZM140 96c0 8.694-1.977 16.909-5.5 24.235l10.815 5.201C149.601 116.522 152 106.532 152 96h-12ZM84 40c12.903 0 24.772 4.357 34.24 11.683l7.344-9.49A67.733 67.733 0 0 0 84 28v12Zm34.24 100.317C108.772 147.643 96.903 152 84 152v12a67.733 67.733 0 0 0 41.584-14.193l-7.344-9.49Z"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.719999999999999" d="M161.549 58.776C166.965 70.04 170 82.666 170 96c0 13.334-3.035 25.96-8.451 37.223"></path></g></svg>'
      
    },
    { provider: "Maya", holder: "JOHN CRISTOPHER L MUNIZ", number: "09541527663", qr: "assets/payment-qr/maya.JPG", link: "https://",
      note: "@jcmuniz", show: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><title>maya</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.722 25.227v2.982a2.21 2.21 0 0 1-3.771 1.563"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.722 21.581v3.646a2.21 2.21 0 0 1-4.419 0V21.58M9.5 23.79a2.21 2.21 0 0 1 4.419 0v3.646M9.5 21.581v5.855m4.419-3.646a2.21 2.21 0 0 1 4.419 0v3.646m6.695-2.209a2.21 2.21 0 0 1-4.419 0V23.79a2.21 2.21 0 1 1 4.419 0m0 3.646v-5.855M38.5 25.227a2.21 2.21 0 0 1-4.419 0V23.79a2.21 2.21 0 1 1 4.419 0m0 3.646v-5.855"/></svg>',
    },
    { provider: "PayPal", copyLabel: "Copy username", holder: "JOHN CRISTOPHER MUNIZ", number: "JCM2629", qr: "assets/payment-qr/paypal.JPG", link: "https://www.paypal.com/paypalme/jcm2629",
      note: "@09541527663 · jcm_a24@proton.me", show: true, 
      icon: '<svg s="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><title>paypal-dark</title><path d="M430.1 130.1c-.5 3-1 6.1-1.6 9.3c-21 107.8-92.8 145-184.5 145h-46.7c-11.2 0-20.7 8.1-22.4 19.2L151 455.2l-6.8 43c-1.1 7.3 4.5 13.8 11.8 13.8h82.8c9.8 0 18.1-7.1 19.7-16.8l.8-4.2l15.6-98.9l1-5.4c1.5-9.7 9.9-16.8 19.7-16.8H308c80.2 0 143-32.6 161.4-126.8c7.7-39.4 3.7-72.3-16.6-95.4c-6.2-7.1-13.8-12.9-22.7-17.6" opacity=".5"/><path d="M408.1 121.3c-3.2-.9-6.5-1.8-9.9-2.5s-6.9-1.4-10.5-2c-12.6-2-26.4-3-41.2-3H221.8c-3.1 0-6 .7-8.6 2c-5.8 2.8-10 8.2-11.1 14.9l-26.5 168.1l-.8 4.9c1.7-11.1 11.2-19.2 22.4-19.2H244c91.7 0 163.5-37.2 184.5-145c.6-3.2 1.2-6.3 1.6-9.3c-5.3-2.8-11.1-5.2-17.3-7.3c-1.5-.6-3.1-1.1-4.7-1.6"/><path d="M202.1 130.6c1-6.7 5.3-12.1 11.1-14.9c2.6-1.3 5.5-2 8.6-2h124.7c14.8 0 28.6 1 41.2 3c3.6.6 7.1 1.2 10.5 2s6.7 1.6 9.9 2.5c1.6.5 3.2 1 4.7 1.5c6.2 2.1 11.9 4.5 17.3 7.3c6.2-39.8-.1-66.9-21.6-91.5C384.8 11.6 341.9 0 287.1 0H128c-11.2 0-20.8 8.1-22.5 19.2L39.2 439.4c-1.3 8.3 5.1 15.8 13.5 15.8H151l24.7-156.5z" opacity=".72"/></svg>',
    },
    { provider: "Wise", holder: "JOHN CRISTOPHER MUNIZ", number: "XXX XXX XXXX", qr: "", link: "https://",
      note: "", show: true, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>wise</title><path fill="currentColor" d="M7.401 8.204L2 14.544h9.667l1.096-2.975H8.614l2.544-2.935v-.078L9.516 5.738h7.397L11.159 21.51h3.913L22 2.489H4.114z"/></svg>',
    },
    { provider: "AirTM", holder: "JOHN CRISTOPHER MUNIZ", number: "XXX XXX XXXX", qr: "", link: "https://",
      note: "", show: true, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><title>airtm</title><path fill="none" stroke="currentColor" stroke-dashoffset="3" stroke-linecap="round" stroke-linejoin="round" d="M41.896 20.99L9.622 40.69c-2.063 1.26-4.342-.957-3.236-3.236L20.855 7.648c.894-1.841 3.035-1.411 3.72 0l16.487 33.928"/></svg>',
    },
  ],

  /* BANKS: only what a sender needs. Never add PINs, passwords, card numbers or security codes.
     bank, holder, number, type (e.g. "Savings"), branch, swift (for international), note, qr, link, show.
     icon: "bank" is the placeholder; use "assets/icons/bdo.svg" (or a data URL / pasted SVG) for a logo, plus iconColor: true to keep its colours.
     A number containing "X" is treated as a placeholder (Copy stays disabled). Copy a line to add more banks. */
  banks: [
     { bank: "MariBank", holder: "JOHN CRISTOPHER MUNIZ", number: "1998 6489 663", type: "", branch: "", swift: "LAUIPHM2 / LAUIPHM2XXX", note: "", link: "https://", 
      show: true, qr: "assets/payment-qr/maribank.PNG",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><title>lappli-m</title><circle cx="24" cy="24" r="17.902" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.846 13.997l2.976-2.024m-1.318 5.093l3.312-1.408m-3.173 14.936l3.312 1.408m-6.507 3.816l2.767 2.3M24 41.902V45.5M9.428 39.808l2.416-2.665m-4.95-.12l2.863-2.179M3.354 30l3.43-1.093M19.124 3.06l.952 3.474m12.222 1.603l1.691-3.175M17.344 30.64V17.345L24 30.656l6.656-13.292v13.292"/></svg>',
     },

    { bank: "BDO - UNIBANK", holder: "JOHN CRISTOPHER MUNIZ", number: "0106 1025 4820", type: "", branch: "SM DAVAO CITY ANNEX", swift: "BNORPHMM / BNORPHMMXXX", note: "", link: "https://", 
      show: true, qr: "assets/payment-qr/bdo.JPG",
       icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><title>bdo-digital-banking</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.595 29.413V18.587h2.436a4.736 4.736 0 0 1 4.736 4.736v1.354a4.736 4.736 0 0 1-4.736 4.736zM14.966 24a2.707 2.707 0 0 1 0 5.413H10.5V18.587h4.466a2.707 2.707 0 0 1 0 5.413m0 0H10.5"/><rect width="7.172" height="10.826" x="30.328" y="18.587" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.586" ry="3.586"/></svg>',
    },

    { bank: "BPI", holder: "JOHN CRISTOPHER MUNIZ", number: "XXXX XXXX XXXX", type: "Savings", branch: "", swift: "",  note: "", link: "https://", 
      show: true, qr: "",
      icon: '<svg width="256px" height="256px" viewBox="0 0 48.00 48.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="1.056" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.576"><defs><style>.a{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><path class="a" d="M24,43.5l12.1878-8.7055a2.1868,2.1868,0,0,0,.8841-2.1493L34.4838,17.5664A80.5627,80.5627,0,0,0,24,16.7694"></path><path class="a" d="M24,14.44a45.9975,45.9975,0,0,1,7.5716.49"></path><path class="a" d="M25.81,14.4626c2.5127-1.31,6.4977-6.2458-1.81-7.3493"></path><path class="a" d="M27.4026,14.44c2.9429-.2759,4.8434-1.5634,4.8434-3.4027s-2.8508-2.9823-4.8434-2.9823"></path><path class="a" d="M24,43.5,11.8122,34.7945a2.1868,2.1868,0,0,1-.8841-2.1493l2.5881-15.0788A80.5627,80.5627,0,0,1,24,16.7694"></path><path class="a" d="M24,14.44a45.9975,45.9975,0,0,0-7.5716.49"></path><path class="a" d="M22.19,14.4626c-2.5127-1.31-6.4977-6.2458,1.81-7.3493"></path><path class="a" d="M20.5974,14.44c-2.9429-.2759-4.8434-1.5634-4.8434-3.4027s2.8508-2.9823,4.8434-2.9823"></path><circle class="a" cx="24" cy="5.5346" r="1.0346"></circle><line class="a" x1="24" y1="14.4397" x2="24" y2="6.5692"></line><line class="a" x1="24" y1="16.7694" x2="24" y2="43.5"></line></g><g id="SVGRepo_iconCarrier"><defs><style>.a{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><path class="a" d="M24,43.5l12.1878-8.7055a2.1868,2.1868,0,0,0,.8841-2.1493L34.4838,17.5664A80.5627,80.5627,0,0,0,24,16.7694"></path><path class="a" d="M24,14.44a45.9975,45.9975,0,0,1,7.5716.49"></path><path class="a" d="M25.81,14.4626c2.5127-1.31,6.4977-6.2458-1.81-7.3493"></path><path class="a" d="M27.4026,14.44c2.9429-.2759,4.8434-1.5634,4.8434-3.4027s-2.8508-2.9823-4.8434-2.9823"></path><path class="a" d="M24,43.5,11.8122,34.7945a2.1868,2.1868,0,0,1-.8841-2.1493l2.5881-15.0788A80.5627,80.5627,0,0,1,24,16.7694"></path><path class="a" d="M24,14.44a45.9975,45.9975,0,0,0-7.5716.49"></path><path class="a" d="M22.19,14.4626c-2.5127-1.31-6.4977-6.2458,1.81-7.3493"></path><path class="a" d="M20.5974,14.44c-2.9429-.2759-4.8434-1.5634-4.8434-3.4027s2.8508-2.9823,4.8434-2.9823"></path><circle class="a" cx="24" cy="5.5346" r="1.0346"></circle><line class="a" x1="24" y1="14.4397" x2="24" y2="6.5692"></line><line class="a" x1="24" y1="16.7694" x2="24" y2="43.5"></line></g></svg>'
      
      ,},
  ],

  // about: ["Write a few sentences about yourself here."],
  // interests: ["Design", "Photography", "Coffee"],
  // featured: [{ title: "Featured project", desc: "One line about it.", url: "https://example.com", icon: "link" }],
  // faq: [{ q: "What is the best way to reach you?", a: "Email is the fastest." }]
};

/* ===================== Engine (no need to edit below) ===================== */
const ICONS = {
  // globe:"M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z",
  // mail:"M4 6h16v12H4zM4 7l8 6 8-6", 
  // phone:"M7 3h10v18H7zM11 18h2", 
  // chat:"M4 5h16v11H9l-5 4z",
  // play:"M3 7h18v10H3zM10 9.5v5l4.5-2.5z", 
  // at:"M16 12a4 4 0 11-8 0 4 4 0 018 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-3.5 7.1",
  // code:"M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14", 
  // camera:"M4 8h3l1.5-2h7L17 8h3v11H4zM12 16.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z",
  // music:"M9 18V6l10-2v12M9 18a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm10-2a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
  // send:"M21 4L3 11l6 2.5L11.5 20zM9 13.5L21 4", 
  // briefcase:"M4 8h16v11H4zM9 8V5h6v3",
  // link:"M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1",
  copy:"M9 9h11v11H9zM5 15V5h10", 
  check:"M5 12l5 5 9-10", chev:"M6 9l6 6 6-6", wallet:"M4 7h16v12H4zM4 7l12-3v3M16 13h2", bank:"M3 10l9-6 9 6zM5 10v8M9 10v8M15 10v8M19 10v8M3 20h18", 
  pin:"M12 21s6-5.5 6-11a6 6 0 10-12 0c0 5.5 6 11 6 11zM12 12a2 2 0 100-4 2 2 0 000 4z",
  moon:"M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z",
  sun:"M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"
};
const NS = "http://www.w3.org/2000/svg";
const IMG_RE = /^(data:|https?:|\/|\.\/|\.\.\/|assets\/)|\.(svg|png|jpe?g|webp|gif)$/i;
/* icon(): built-in name, image path, data: URL, or pasted <svg> markup. keepColor=true keeps an image's own colours. */
const icon = (n, cls = "ic", keepColor = false) => {
  if (typeof n === "string" && /^\s*<svg/i.test(n)) { /* pasted markup becomes a data URL (an SVG used as an image cannot run scripts) */
    const m = /xmlns=/i.test(n) ? n : n.replace(/^\s*<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"');
    n = "data:image/svg+xml;utf8," + encodeURIComponent(m.trim()); }
  if (typeof n === "string" && !ICONS[n] && IMG_RE.test(n)) {
    const i = document.createElement("span"); i.className = cls + " img" + (keepColor ? " color" : ""); i.setAttribute("aria-hidden", "true");
    i.style.setProperty("--src", 'url("' + n.replace(/"/g, "%22").replace(/\s+/g, " ") + '")');
    const t = new Image(); /* if the file is missing or invalid, show a generic link icon and explain in the console (F12) */
    t.onerror = () => { console.warn("Icon not found or invalid:", n.slice(0, 80)); i.replaceWith(icon("link")); }; t.src = n; return i; }
  const s = document.createElementNS(NS, "svg"), p = document.createElementNS(NS, "path");
  s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("class", cls); s.setAttribute("aria-hidden", "true");
  p.setAttribute("d", ICONS[n] || ICONS.link); s.append(p); return s; };
/* Builds DOM safely: all text goes through textContent, never innerHTML */
const el = (tag, props = {}, kids = []) => { const n = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) { if (v == null || v === false || v === "") continue;
    if (k === "text") n.textContent = v; else if (k.startsWith("on")) n.addEventListener(k.slice(2), v); else n.setAttribute(k, v); }
  for (const c of [].concat(kids)) if (c) n.append(c); return n; };
const safeUrl = (u) => { try { const x = new URL(u, location.href); return ["https:", "http:", "mailto:", "tel:"].includes(x.protocol) ? x.href : null; } catch { return null; } };
const extAttrs = (href) => /^https?:/.test(href) && new URL(href).origin !== location.origin ? { target: "_blank", rel: "noopener noreferrer" } : {};
const shown = (a) => (a || []).filter((i) => i && i.show !== false);

function linkEl({ icon: ic, title, sub, href, tag, color }) {
  const url = safeUrl(href); if (!url) return null;
  return el("a", { class: "link", href: url, ...extAttrs(url) }, [
    el("span", { class: "ico" }, icon(ic, "ic", color)),
    el("span", { class: "txt" }, [el("b", { text: title }), el("small", { text: sub })]),
    tag ? el("span", { class: "tag", text: tag }) : null ]);
}
const sec = (id, title, body) => el("section", { class: "panel", id, "aria-labelledby": id + "-h" }, [el("h2", { id: id + "-h", text: title }), body]);

function toast(msg) { const t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2200); }
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch {}
  try { const a = el("textarea", { readonly: "", style: "position:fixed;opacity:0" }); a.value = text; document.body.append(a); a.select();
    const ok = document.execCommand("copy"); a.remove(); return ok; } catch { return false; }
}

/* Shared card builder for e-wallets and banks */
function payList(items, defIcon, copyLabel) { if (!items.length) return null; const w = el("div");
  items.forEach((p, idx) => { const name = p.provider || p.bank || "Account", raw = (p.number || "").trim(), textual = !/^[\dx\s+\-()]*$/i.test(raw), /* textual = a username, copied as written */
      digits = textual ? raw : raw.replace(/[^\d+]/g, ""), placeholder = !digits || (!textual && /x/i.test(raw)),
      label = p.copyLabel || copyLabel, what = label.replace(/^copy\s+/i, "");
    const pay = safeUrl(p.link), actions = el("div", { class: "pay-actions" });
    const btn = el("button", { class: "btn primary", type: "button", disabled: placeholder ? "disabled" : null,
      title: placeholder ? "Add your real number in script.js" : null, "aria-label": "Copy " + name + " " + what,
      onclick: async () => toast((await copyText(digits)) ? what.charAt(0).toUpperCase() + what.slice(1) + " copied." : "Could not copy. Select the number and copy it manually.") }, [icon("copy"), label]);
    actions.append(btn); if (pay) actions.append(el("a", { class: "btn", href: pay, ...extAttrs(pay), text: "Open " + name }));
    let qrBox = null;
    if (p.qr) { /* QR stays hidden until the visitor taps the toggle button. Add qrOpen: true to start expanded. */
      const open = !!p.qrOpen, id = "qr-" + name.replace(/\W+/g, "-").toLowerCase() + "-" + idx;
      const img = el("img", { class: "qr", src: p.qr, alt: name + " QR code for " + p.holder, loading: "lazy" });
      qrBox = el("div", { class: "qr-wrap", id, hidden: open ? null : "hidden" }, img);
      const label = el("span", { text: open ? "Hide QR code" : "Show QR code" });
      const tg = el("button", { class: "btn qr-toggle", type: "button", "aria-expanded": String(open), "aria-controls": id }, [label, icon("chev")]);
      tg.addEventListener("click", () => { const show = qrBox.hidden; qrBox.hidden = !show; tg.setAttribute("aria-expanded", String(show)); label.textContent = show ? "Hide QR code" : "Show QR code"; });
      img.addEventListener("error", () => { qrBox.remove(); tg.remove(); }); /* image missing: remove the toggle too */
      actions.append(tg); }
    const meta = [p.type, p.branch, p.swift && "SWIFT/BIC " + p.swift].filter(Boolean).join(" · ");
    w.append(el("article", { class: "pay" }, [
      el("div", { class: "pay-head" }, [el("span", { class: "ico" }, icon(p.icon || defIcon, "ic", p.iconColor)),
        el("span", { class: "txt" }, [el("b", { text: name }), el("small", { text: p.holder })])]),
      el("div", { class: "num", text: p.number }),
      meta ? el("p", { text: meta }) : null,
      p.note ? el("p", { text: p.note }) : null,
      actions, qrBox ])); });
  return w; }

const BUILD = {
  about: (c) => c.about.length && el("div", { class: "about" }, c.about.map((t) => el("p", { text: t }))),
  links: (c) => { const items = shown(c.socials); if (!items.length) return null; const wrap = el("div", { class: "links" });
    const groups = [...new Set(items.map((i) => i.group || ""))];
    groups.forEach((g) => { if (g) wrap.append(el("h3", { text: g }));
      items.filter((i) => (i.group || "") === g).forEach((i) => { const a = linkEl({ icon: i.icon, title: i.name, sub: i.user, href: i.url, tag: i.label, color: i.iconColor }); if (a) wrap.append(a); }); });
    return wrap.children.length ? wrap : null; },
  contact: (c) => { const w = el("div", { class: "links" }); shown(c.contacts).forEach((i) => { const a = linkEl({ icon: i.icon, title: i.label, sub: i.value, href: i.href }); if (a) w.append(a); }); return w.children.length ? w : null; },
  payments: (c) => payList(shown(c.payments), "wallet", "Copy number"),
  banks: (c) => payList(shown(c.banks), "bank", "Copy account number"),
  featured: (c) => { const w = el("div", { class: "links" }); c.featured.forEach((i) => { const a = linkEl({ icon: i.icon, title: i.title, sub: i.desc, href: i.url }); if (a) w.append(a); }); return w.children.length ? w : null; },
  interests: (c) => c.interests.length && el("ul", { class: "chips" }, c.interests.map((t) => el("li", { text: t }))),
  faq: (c) => c.faq.length && el("div", {}, c.faq.map((f) => el("details", {}, [el("summary", { text: f.q }), el("p", { text: f.a })])))
};

function renderProfile(p) {
  const root = document.getElementById("profile"); root.textContent = "";
  const initials = (p.name || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  const av = el("div", { class: "avatar " + (p.shape === "circle" ? "" : p.shape || "") }, initials);
  if (p.photo) { const im = new Image(); im.alt = p.photoAlt || p.name; im.onload = () => { av.textContent = ""; av.append(im); }; im.src = p.photo; }
  const badge = p.badge ? (() => { const s = icon("check", "badge ic"); s.setAttribute("style", "stroke-width:3;width:.5em;height:.5em"); return s; })() : null;
  root.append(av, el("h1", {}, [el("span", { text: p.name }), badge]));
  if (p.handle) root.append(el("p", { class: "handle", text: p.handle }));
  if (p.bio) root.append(el("p", { class: "bio", text: p.bio }));
  const meta = el("div", { class: "meta" });
  if (p.location) meta.append(el("span", {}, [icon("pin"), p.location]));
  if (p.status) meta.append(el("span", {}, [el("i", { class: "dot", "aria-hidden": "true" }), p.status]));
  if (meta.children.length) root.append(meta);
}

function setBackground(b) {
  const body = document.body, root = document.documentElement.style; body.dataset.bg = b.mode;
  if (b.mode !== "photo" || !b.image) return;
  const t = new Image(); /* only show the photo if it really loads; otherwise the solid colour stays */
  t.onload = () => { root.setProperty("--bg-image", 'url("' + encodeURI(b.image) + '")'); root.setProperty("--bg-opacity", b.opacity);
    root.setProperty("--bg-blur", b.blur + "px"); root.setProperty("--bg-brightness", b.brightness); root.setProperty("--bg-pos", b.position);
    root.setProperty("--bg-size", b.size); root.setProperty("--ov-color", b.overlayColor === "auto" ? "var(--bg)" : b.overlayColor);
    root.setProperty("--ov-opacity", b.overlayOpacity); document.getElementById("bg").style.position = b.fixed ? "fixed" : "absolute";
    body.classList.add("has-photo"); };
  t.src = b.image;
}

function initTheme(pref) {
  const btn = document.getElementById("theme-toggle"), mq = matchMedia("(prefers-color-scheme: dark)");
  let saved = null; try { saved = localStorage.getItem("theme"); } catch {}
  let theme = saved || pref;
  const apply = () => { const dark = theme === "dark" || (theme === "system" && mq.matches);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    btn.textContent = ""; btn.append(icon(dark ? "sun" : "moon")); btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    document.querySelector('meta[name="theme-color"]').content = dark ? "#0c0c0d" : "#f5f5f7"; };
  btn.addEventListener("click", () => { theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; try { localStorage.setItem("theme", theme); } catch {} apply(); });
  mq.addEventListener("change", apply); apply();
}

(function init() {
  const c = CONFIG, root = document.documentElement.style;
  document.body.dataset.layout = ["minimal", "cards", "editorial"].includes(c.layout) ? c.layout : "minimal";
  if (!c.animations) document.body.dataset.motion = "off";
  root.setProperty("--radius", c.radius); root.setProperty("--width", c.contentWidth);
  document.title = c.profile.name; const d = document.querySelector('meta[name="description"]');
  document.querySelectorAll('meta[property="og:title"]').forEach((m) => (m.content = c.profile.name)); if (c.profile.bio) { d.content = c.profile.bio; document.querySelector('meta[property="og:description"]').content = c.profile.bio; }
  initTheme(c.theme); setBackground(c.background); renderProfile(c.profile);
  const main = document.getElementById("content");
  c.sections.filter((s) => s.show).forEach((s) => { const body = BUILD[s.id] && BUILD[s.id](c); if (body) main.append(sec(s.id, s.title, body)); });
  document.getElementById("footer").textContent = "© " + new Date().getFullYear() + " " + c.profile.name;
})();
