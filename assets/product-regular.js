$(document).ready(function(){
    if ($('.block-swatch__item').length > 1) {
        var variants = [];
        var duplicateObj = {};
        var changeOption = false;
        $('.block-swatch__item').each(function(index){
            var variantArray = $(this).text().split(',');
            var obj = {};
            variantArray.forEach(item => {
                if (item.split(':').length > 1) {
                    if(item.split(':')[0].trim() != 'Item number' && item.split(':')[0].trim() != 'Notice'){
                        obj[item.split(':')[0].trim()] = item.split(':')[1].trim();
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

        function getSelectedOption() {
            return $('.block-swatch__radio:checked').val();
        }

        function updateSpecification() {
            $('.product-specifications__list').empty();
            let options = getSelectedOption();
            options = options.split(',');
            const half = options.length / 2;
            let specificationList = '<div class="product-specifications__list-column">';
            options.forEach((option, index) => {
                if (index < half) {
                    specificationList += `<div class="product-specifications__item"><div class="product-specifications__item-header">${option.split(':')[0].trim()}:</div><div class="product-specifications__item-body">${option.split(':')[1].trim()}</div></div>`;
                }
            });
            specificationList += '</div>';

            specificationList += '<div class="product-specifications__list-column">';
            options.forEach((option, index) => {
                if (index >= half) {
                    specificationList += `<div class="product-specifications__item"><div class="product-specifications__item-header">${option.split(':')[0].trim()}:</div><div class="product-specifications__item-body">${option.split(':')[1].trim()}</div></div>`;
                }
            });
            specificationList += '</div>';

            $('.product-specifications__list').append(specificationList);
        }

        function selectOptions() {
            changeOption = true;
            const options = getSelectedOption();
            $('.product-regular__select').find('option').each(function(){
                const value = `${$(this).closest('.product-regular__field').find('label').text().trim()}: ${$(this).attr('value').trim()}`;
                if (options.indexOf(value) > -1) {
                    $(this).prop('selected', true);
                }
            });
            changeOption = false;

            updateSpecification();
        }

        function updateVariant(currentValue) {
            var values = [];
            $('.product-regular__select').each(function(){
                const label = $(this).closest('.product-regular__field').find('label').text().trim();
                values.push(`${label}: ${$(this).val().trim()}`);
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
                    updateSpecification()
                    return false;
                }
                if (!checked && ($('.block-swatch__item').length - 1) == index) {
                    $('.block-swatch__item').each(function(index) {
                        var options = $(this).attr('title');
                        if (options.indexOf(currentValue) > -1) {
                            $(this).click();
                            selectOptions();
                            return false;
                        }
                    });
                }
            });
        }

        $('.product-regular__select').change(function(){
            if (!changeOption) {
                const currentValue = `${$(this).closest('.product-regular__field').find('label').text().trim()}: ${$(this).val().trim()}`;
                updateVariant(currentValue);
            }
        });

        selectOptions();
    }
});