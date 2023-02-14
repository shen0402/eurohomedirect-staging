$(document).ready(function(){
    if ($('.block-swatch__item').length > 1) {
        var variants = [];
        var duplicateObj = {};
        $('.block-swatch__item').each(function(index){
            var variantArray = $(this).text().split(',');
            var obj = {};
            variantArray.forEach(item => {
                if (item.split(':').length > 1) {
                    if(item.split(':')[0].trimStart() != 'Item number' && item.split(':')[0].trimStart() != 'Notice'){
                        obj[item.split(':')[0].trimStart()] = item.split(':')[1].trimStart();
                    }
                }
            });
            variants.push(obj);
            if (index == 0) {
                for (const property in obj) {
                    duplicateObj[property] = true;
                }
            } else {
                for (const property in obj) {
                    if (duplicateObj[property] && variants[index - 1][property] != obj[property]) {
                        duplicateObj[property] = false;
                    }
                }
            }
        });

        for (const property in duplicateObj) {
            if (!duplicateObj[property]) {
                var select = `<div class="product-regular__field"><label>${property}</label><select class="product-regular__select">`;
                var values = [];
                variants.forEach(variant => {
                    if (values.indexOf(variant[property]) === -1) {
                        values.push(variant[property]);                    
                        select += `<option value="${variant[property]}">${variant[property]}</option>`
                    }
                });
                select += '</select></div>';

                $('.product-form__variants').append(select);
            }
        }

        function updateVariant() {
            var values = [];
            $('.product-regular__select').each(function(){
                const label = $(this).closest('.product-regular__field').find('label').text().trimStart();
                values.push(`${label}: ${$(this).val()}`);
            });
            $('.block-swatch__item').each(function(index) {
                var checked = true;
                var options = $(this).attr('title');
                values.forEach(value => {
                    if (options.indexOf(value) === -1) {
                        checked = false;
                    }
                });
                if (checked) {
                    $(this).click();
                    $('.product-form__no-product').removeClass('active');
                    return false;
                }
                if (!checked && ($('.block-swatch__item').length - 1) == index) {
                    $('.product-form__no-product').addClass('active');
                }
            });
        }

        $('.product-regular__select').change(function(){
            updateVariant();
        });
    }
});