!function(t) {
    document.addEventListener("click", (function(e) {
        let o = e.target.closest("[data-js-click]");
        if (null !== o) {
            e.preventDefault();
            const n = o.getAttribute("data-js-click");
            t.hasOwnProperty(n) ? t[n](o) : console.log("Mapped Function not found")
        }
    }
    )),
    document.addEventListener("DOMContentLoaded", (function(e) {
        !function(t, e) {
            t.querySelectorAll("[data-js-ready]").forEach((t=>{
                const o = t.getAttribute("data-js-ready");
                e.hasOwnProperty(o) ? e[o](t) : console.log("Mapped Function not found")
            }
            ))
        }(document, t)
    }
    ))
}({
    mobileMenu: function(t) {
        t.classList.toggle("burger-active");
        document.querySelector("[data-mobile-menu]").classList.toggle("mobile-menu-active")
    }
});
