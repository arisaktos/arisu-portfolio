$("#section-popups").magnificPopup({
    delegate: "a",
    removalDelay: 500,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr("data-effect")
        }
    },
    midClick: !0
});
