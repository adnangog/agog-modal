(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory(root));
    } else if (typeof exports === 'object') {
        module.exports = factory(root);
    } else {
        root.agogModal = factory(root);
    }
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

    'use strict';

    var agogModal = {};
    var supports = !!document.querySelector && !!root.addEventListener;
    var settings;


    // Varsayılan ayarlar
    var defaults = {
        selector: '[data-modal-target]',
        modalClass: "modal",
        closeClass: "modal-close",
        callbackBefore: function () {
            console.log("agogModal başlatışıyor")
        },
        callbackAfter: function () {
            console.log("agogModal bitiriliyor.")
        }
    };


    /**
     * Destroy the current initialization.
     * @public
     */
    agogModal.destroy = function () {
        if (!settings) return;

        agogModal.removeListeners();

        document.querySelectorAll("." + settings.mainClass).forEach(item => item.remove())

        settings = null;

    };

    agogModal.init = function (options) {

        if (!supports) return;

        agogModal.destroy();

        // settings = extend(defaults, options || {});
        settings = Object.assign(defaults, options);

        settings.callbackBefore();

        agogModal.create();

        settings.callbackAfter();

    };


    agogModal.create = function () {
        const modalTriggerButtons = document.querySelectorAll(settings.selector);
        const modals = document.querySelectorAll("." + settings.modalClass);
        const modalCloseButtons = document.querySelectorAll("." + settings.closeClass);

        modalTriggerButtons.forEach(elem => {
            elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target"), event.currentTarget.getAttribute("data-modal-type")));
        });
        modalCloseButtons.forEach(elem => {
            elem.addEventListener("click", event => toggleModal(event.currentTarget.closest("." + settings.modalClass).id));
        });
        modals.forEach(elem => {
            elem.addEventListener("click", event => {
                if (event.currentTarget === event.target) toggleModal(event.currentTarget.id);
            });
        });

        // Close Modal with "Esc"...
        document.addEventListener("keydown", event => {
            if (event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
                toggleModal(document.querySelector(".modal.modal-show").id);
            }
        });

        function toggleModal(modalId, modalType) {
            const modal = document.getElementById(modalId);

            switch (parseInt(modalType)) {
                case 2:
                    modal.classList.add("modal-type-2");
                    break;
                case 3:
                    modal.classList.add("modal-type-3");
                    break;
                case 4:
                    modal.classList.add("modal-type-4");
                    break;
                case 5:
                    modal.classList.add("modal-type-5");
                    break;

                default:
                    break;
            }

            if (getComputedStyle(modal).display === "flex") { // alternatively: if(modal.classList.contains("modal-show"))
                modal.classList.add("modal-hide");
                setTimeout(() => {
                    document.body.style.overflow = "initial";
                    modal.classList.remove("modal-show", "modal-hide");
                    modal.style.display = "none";
                }, 200);
            }
            else {
                document.body.style.overflow = "hidden";
                modal.style.display = "flex";
                modal.classList.add("modal-show");
            }
        }
    };

    agogModal.addListeners = function () {

    };

    agogModal.removeListeners = function () {

    };

    return agogModal;

});