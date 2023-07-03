/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 * 
 * $("#accordion").accordion({
 *  heightStyle: "content"
 * });
 * 
 */
$(document).ready(function () {
    // $('.mega-menu__link.link.mega').mouseover(function () {
    //     megamenuvar = this.id;
    //     $("div.mega-menu__column.mouseover").hide();
    //     $('#menu-' + megamenuvar).show();
    // });
    // $('.mega__two').mouseover(function () {
    //     megamenuvar_two = this.id;
    //     $("div.mega-menu__column.mouseover_two").hide();
    //     $('#menu-' + megamenuvar_two).show();
    // });
    $('.nav-bar__link:first').mouseover(function (){
        $('.mega-menu__inner').css('height', '600px');
    })
    $('.nav-bar__link:not(:first)').mouseover(function() {
        $('.mega-menu__inner').css('height', 'unset');
    })
    $('.mega-menu__link.link.mega').mouseover(function () {
        megamenuvar = this.id;
        console.log(megamenuvar, "mega");
        $('.mouseover_two').hide();
        $("div.mega-menu__column.mouseover").hide();
        $('#menu-' + megamenuvar).show();
    });
    $('.mega__two').mouseover(function () {
        megamenuvar_this = this.id;
        megamenuvar_two = this.closest('.mouseover').id;
        id = megamenuvar_two + '_' + megamenuvar_this;
        console.log(id, 'mega_two')
        $("div.mega-menu__column.mouseover_two").hide();
        $('#' + id).show();
    });
    // $('.mega__two').mouseleave(function() {
    //     megamenuvar_this = this.id;
    //     megamenuvar_two = this.closest('.mouseover').id;
    //     id = megamenuvar_two + '_' + megamenuvar_this;
    //     console.log(id, 'mega_three')
    //     $('#' + id).hide();
    // })

    $("#block-06ebdf98-fab5-42a9-bce0-dce01773a056").append("<div id=\"direct-contact\"><br><br><p><a aria-describedby=\"a11y-new-window-message\" aria-label=\"Share by email\" href=\"mailto:info@eurohomedirect.com\" rel=\"noopener\" target=\"_blank\"><svg class=\"icon icon--bi-email\" focusable=\"false\" role=\"presentation\" viewbox=\"0 0 22 22\"><g fill-rule=\"evenodd\" fill=\"none\"><path d=\"M.916667 10.08333367l3.66666667-2.65833334v4.65849997zm20.1666667 0L17.416667 7.42500033v4.65849997z\" stroke=\"#4b99d3\"></path><path d=\"M4.58333367 7.42500033L.916667 10.08333367V21.0833337h20.1666667V10.08333367L17.416667 7.42500033\" stroke-width=\"2\" stroke=\"#FFFFFF\"></path><path d=\"M4.58333367 12.1000003V.916667H17.416667v11.1833333m-16.5-2.01666663L21.0833337 21.0833337m0-11.00000003L11.0000003 15.5833337\" stroke-width=\"2\" stroke=\"#FFFFFF\"></path><path d=\"M8.25000033 5.50000033h5.49999997M8.25000033 9.166667h5.49999997\" stroke-linecap=\"square\" stroke-width=\"2\" stroke=\"#4b99d3\"></path></g></svg> info@eurohomedirect.com</a></p><p><a aria-describedby=\"a11y-new-window-message\" aria-label=\"Contact us by Whatsapp\" href=\"https://api.whatsapp.com/send/?phone=85259352062\" rel=\"noopener\" target=\"_blank\"><svg class=\"icon icon--bi-phone\" focusable=\"false\" role=\"presentation\" viewbox=\"0 0 24 24\"><g fill-rule=\"evenodd\" fill=\"none\" stroke-linecap=\"square\" stroke-width=\"2\"><path d=\"M17 15l-3 3-8-8 3-3-5-5-3 3c0 9.941 8.059 18 18 18l3-3-5-5z\" stroke=\"#FFFFFF\"></path><path d=\"M14 1c4.971 0 9 4.029 9 9m-9-5c2.761 0 5 2.239 5 5\" stroke=\"#4b99d3\"></path></g></svg> +852 5935 2062 (Whatsapp Only)</a></p></div>");
    $(".footer__block-list").append("<div id=\"direct-contact-mobile\"><br><br><p><a aria-describedby=\"a11y-new-window-message\" aria-label=\"Share by email\" href=\"mailto:info@eurohomedirect.com\" rel=\"noopener\" target=\"_blank\"><svg class=\"icon icon--bi-email\" focusable=\"false\" role=\"presentation\" viewbox=\"0 0 22 22\"><g fill-rule=\"evenodd\" fill=\"none\"><path d=\"M.916667 10.08333367l3.66666667-2.65833334v4.65849997zm20.1666667 0L17.416667 7.42500033v4.65849997z\" stroke=\"#4b99d3\"></path><path d=\"M4.58333367 7.42500033L.916667 10.08333367V21.0833337h20.1666667V10.08333367L17.416667 7.42500033\" stroke-width=\"2\" stroke=\"#FFFFFF\"></path><path d=\"M4.58333367 12.1000003V.916667H17.416667v11.1833333m-16.5-2.01666663L21.0833337 21.0833337m0-11.00000003L11.0000003 15.5833337\" stroke-width=\"2\" stroke=\"#FFFFFF\"></path><path d=\"M8.25000033 5.50000033h5.49999997M8.25000033 9.166667h5.49999997\" stroke-linecap=\"square\" stroke-width=\"2\" stroke=\"#4b99d3\"></path></g></svg> info@eurohomedirect.com</a></p><p><a aria-describedby=\"a11y-new-window-message\" aria-label=\"Contact us by Whatsapp\" href=\"https://api.whatsapp.com/send/?phone=85259352062\" rel=\"noopener\" target=\"_blank\"><svg class=\"icon icon--bi-phone\" focusable=\"false\" role=\"presentation\" viewbox=\"0 0 24 24\"><g fill-rule=\"evenodd\" fill=\"none\" stroke-linecap=\"square\" stroke-width=\"2\"><path d=\"M17 15l-3 3-8-8 3-3-5-5-3 3c0 9.941 8.059 18 18 18l3-3-5-5z\" stroke=\"#FFFFFF\"></path><path d=\"M14 1c4.971 0 9 4.029 9 9m-9-5c2.761 0 5 2.239 5 5\" stroke=\"#4b99d3\"></path></g></svg> +852 5935 2062 (Whatsapp Only)</a></p></div>");

    // $(document).on('change', '#rate-calculator-country', function(){
    //     setTimeout(() => {
    //         $('#rate-calculator-province option:nth-of-type(2)').click();
    //     }, 100);
    // });

    const productThumbnailSlider = document.querySelector('[data-section-id="product-template-regular"] .scroller__inner');

    if (productThumbnailSlider) {
        let mouseDown = false;
        let startX, scrollLeft;

        let startDragging = function (e) {
            mouseDown = true;
            startX = e.pageX - productThumbnailSlider.offsetLeft;
            scrollLeft = productThumbnailSlider.scrollLeft;
        };
        let stopDragging = function (event) {
            mouseDown = false;
        };

        productThumbnailSlider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDown) { return; }
            const x = e.pageX - productThumbnailSlider.offsetLeft;
            const scroll = x - startX;
            productThumbnailSlider.scrollLeft = scrollLeft - scroll;
        });

        // Add the event listeners
        productThumbnailSlider.addEventListener('mousedown', startDragging, false);
        productThumbnailSlider.addEventListener('mouseup', stopDragging, false);
        productThumbnailSlider.addEventListener('mouseleave', stopDragging, false);
    }
    
});

$(document).on('click', '.product-block-list__item--description .card__title', function(){
    const id = '#' + $(this).data('id');
    $('.product-block-list__item--description .card__title').removeClass('active');
    $(this).addClass('active');
    $('.product-block-list__item--description .card').hide();
    $(id).show();
});

$(document).on('click', '.learn_more', function(e){
    e.preventDefault();
    $('.collection-introduction__popup').fadeIn();
});

$(document).on('click', '.collection-popup-close', function(){
    $('.collection-introduction__popup').fadeOut();
});