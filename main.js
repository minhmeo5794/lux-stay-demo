import OwlCarousel from './owlCarousel.js';
import Render from './render.js';


function Events() {
    // Header navBarLogoSign
    var headerLogoSearch = document.querySelector('.header__logo-and-search');
    var headerLogoSearch_Sign = document.querySelector('.header__logo-and-search-sign');
    // Main
    var mainView = document.querySelector('main#main_view');
    var mainSign = document.querySelector('main#main_sign');
    // Search
    var searchCalendar = document.querySelector('.search__calendar');
    var searchCalendarDropdown = document.querySelector('.search__calendar-dropdown');
    var searchCustomer = document.querySelector('.search__customer');
    var searchCustomerDropdown = document.querySelector('.search__customer-dropdown');
    // Choose-Flag
    var chooseFlagTB_MB = document.querySelector('#header__choose-flag--TB-MB');
    var chooseFlagDropdownTB_MB = document.querySelector('#header__choose-flag-dropdown--TB-MB');
    var chooseFlagPC = document.querySelector('#header__choose-flag--PC');
    var chooseFlagDropdownPC = document.querySelector('#header__choose-flag-dropdown--PC');
    // Nav-Bar Tablet Mobile
    var navBarOut = document.querySelector('.nav-bar__out');
    var navBarBackGround = document.querySelector('.nav-bar__background');
    var navBarFloat = document.querySelector('.nav-bar__float');
    var navBarButton = document.querySelector('.nav-button__options');
    // SignIn SignUp
    var signInButtonList = document.querySelectorAll('.header__list-item-signIn');
    var signUpButtonList = document.querySelectorAll('.header__list-item-signUp');
    var formSignIn = document.querySelector('form.form__sign-in');
    var formSignUp = document.querySelector('form.form__sign-up');
    // NavBar Logo SignUp Button
    var navBarLogoSign = document.querySelector('#nav-bar__logo-sign');
    var headerSearchSign = document.querySelector('#header__search-sign');

    // ----------------------------------------------------------------
    // Search
    document.addEventListener('click', function(event) {
        var chooseFlagPC_Click = chooseFlagPC.contains(event.target);
        var chooseFlagTB_MB_Click = chooseFlagTB_MB.contains(event.target);
        var searchCustomer_Click = searchCustomer.contains(event.target);
        var searchCalendar_Click = searchCalendar.contains(event.target);

        if (chooseFlagPC_Click) {
            if (!chooseFlagDropdownPC.classList.contains('active')) {
                chooseFlagDropdownPC.classList.add('active');
            } else {
                chooseFlagDropdownPC.classList.remove('active');
            }
        }
        else if (chooseFlagTB_MB_Click) {
            if (!chooseFlagDropdownTB_MB.classList.contains('active')) {
                chooseFlagDropdownTB_MB.classList.add('active');
            } else {
                chooseFlagDropdownTB_MB.classList.remove('active');
            }
        }
        else if (searchCustomer_Click) {
            // Click in side
            searchCustomerDropdown.classList.add('active');
            searchCustomer.classList.add('boxShadow');
        }
        else if (searchCalendar_Click) {
            searchCalendarDropdown.classList.add('active');
            searchCalendar.classList.add('boxShadow');
        }
        else {
            // Click out side
            chooseFlagDropdownPC.classList.remove('active');
            chooseFlagDropdownTB_MB.classList.remove('active');
            searchCustomer.classList.remove('boxShadow');
            searchCustomerDropdown.classList.remove('active');
            searchCalendar.classList.remove('boxShadow');
            searchCalendarDropdown.classList.remove('active');
        }
    });


    // Search - Remove each other
    searchCalendar.onclick = function() {
        if (searchCustomerDropdown.classList.contains('active')) {
            searchCustomerDropdown.classList.remove('active');
            searchCustomer.classList.remove('boxShadow');
        }
    }
    searchCustomer.onclick = function() {
        if (searchCalendarDropdown.classList.contains('active')) {
            searchCalendarDropdown.classList.remove('active');
            searchCalendar.classList.remove('boxShadow');
        }
    }


    // SearchCustomer Number
    var customerUp_Button_Adult = document.querySelector('.customer__up-adult');
    var customerUp_Button_Child = document.querySelector('.customer__up-child');
    var customerUp_Button_Infant = document.querySelector('.customer__up-infant');

    var customerDown_Button_Adult = document.querySelector('.customer__down-adult');
    var customerDown_Button_Child = document.querySelector('.customer__down-child');
    var customerDown_Button_Infant = document.querySelector('.customer__down-infant');
    
    var customerInput_Adult = document.querySelector('.customer__quantity-number-adult');
    var customerInput_Child = document.querySelector('.customer__quantity-number-child');
    var customerInput_Infant = document.querySelector('.customer__quantity-number-infant');

    var deleteAll_Button = document.querySelector('.dropdown__delete');

    var customerName = document.querySelector('.search__customer-name');

    // Search Number
    // Disable Down Button l???n ?????u
    if (customerInput_Adult.value <= 0) {
        customerDown_Button_Adult.classList.add('disabled');
    }
    if (customerInput_Child.value <= 0) {
        customerDown_Button_Child.classList.add('disabled');
    }
    if (customerInput_Infant.value <= 0) {
        customerDown_Button_Infant.classList.add('disabled');
    }
    
    // Khai b??o bi???n Pre
    var customerInput_Adult_Value_Pre = 0;
    var customerInput_Child_Value_Pre = 0;
    var customerInput_Infant_Value_Pre = 0;
    var customerInput_Adult_Child_And_Infant_Value_Pre = 0;
    var prevent_Adult_Child = 20;
// -------------- Blur --------------
    /*???????????? Adult */
    customerInput_Adult.onblur = function() {
        var customerInput_Adult_Value = (this.value - 0);
        /*???? TH1: C??c TH b??nh th?????ng */
        if (!isNaN(customerInput_Adult_Value)) {
            var leftOver_Adult = prevent_Adult_Child - customerInput_Child_Value_Pre;
            /*???? TH1-a: Khi x >= prevent_Adult_Child */
            if (customerInput_Adult_Value >= leftOver_Adult) {
                // Ki???m tra khi set >= 100 Down Button c?? b??? disabled ko
                if (customerDown_Button_Adult.classList.contains('disabled')) {
                    customerDown_Button_Adult.classList.remove('disabled');
                }

                // Set gi?? tr???
                this.setAttribute('value', leftOver_Adult);
                this.value = leftOver_Adult;

                // G??n cho bi???n nh???
                customerInput_Adult_Value_Pre = leftOver_Adult;

                // Disabled Up Button
                customerUp_Button_Adult.classList.add('disabled');
                customerUp_Button_Child.classList.add('disabled');
            }

            /*???? TH1-b: Khi x <= 0 */
            else if (customerInput_Adult_Value <= 0) {
                // Ki???m tra khi set <= 0 Up Button Adult c?? b??? disabled ko
                if (customerUp_Button_Adult.classList.contains('disabled')) {
                    customerUp_Button_Adult.classList.remove('disabled');
                }
                // Ki???m tra khi set <= 0 Up Button Child c?? b??? disabled ko
                if (customerUp_Button_Child.classList.contains('disabled') || customerUp_Button_Infant.classList.contains('disabled')) {
                    customerUp_Button_Child.classList.remove('disabled');
                    customerUp_Button_Infant.classList.remove('disabled');
                }

                // Set gi?? tr???
                this.setAttribute('value', 0);
                this.value = 0;

                // Xo?? gi?? tr??? Child v?? Infant, disabled Down Button
                customerInput_Child.setAttribute('value', 0);
                customerInput_Child.value = 0;
                customerInput_Child_Value_Pre = 0;
                if (!customerDown_Button_Child.classList.contains('disabled')) {
                    customerDown_Button_Child.classList.add('disabled');
                }
                customerInput_Infant.setAttribute('value', 0);
                customerInput_Infant.value = 0;
                customerInput_Infant_Value_Pre = 0;
                if (!customerDown_Button_Infant.classList.contains('disabled')) {
                    customerDown_Button_Infant.classList.add('disabled');
                }

                // G??n cho bi???n nh???
                customerInput_Adult_Value_Pre = 0;

                // Disabled Down Button
                customerDown_Button_Adult.classList.add('disabled');
            }

            /*???? TH1-c: Khi (0 < x < prevent_Adult_Child) */
            else {
                // Ki???m tra khi set gi?? tr??? (0 < x < 100) Up, Down Button c?? b??? disabled ko
                if (customerUp_Button_Adult.classList.contains('disabled') || customerDown_Button_Adult.classList.contains('disabled')) {
                    customerUp_Button_Adult.classList.remove('disabled');
                    customerDown_Button_Adult.classList.remove('disabled');
                }
                // Ki???m tra khi set gi?? tr??? (0 < x < 100) Up Button Child c?? b??? disabled ko
                if (customerUp_Button_Child.classList.contains('disabled')) {
                    customerUp_Button_Child.classList.remove('disabled');
                }

                // Set gi?? tr???
                this.setAttribute('value', customerInput_Adult_Value);
                this.value = customerInput_Adult_Value;
    
                // G??n cho bi???n nh???
                customerInput_Adult_Value_Pre = customerInput_Adult_Value;
            }
        }

        /*???? TH2: C??c TH Not A Number */
        else {
            // Set gi?? tr??? l?? bi???n nh??? g???n nh???t
            this.setAttribute('value', customerInput_Adult_Value_Pre);
            this.value = customerInput_Adult_Value_Pre;
        }
        customerInput_Adult_Child_And_Infant_Value_Pre = customerInput_Adult_Value_Pre + customerInput_Child_Value_Pre + customerInput_Infant_Value_Pre;
        customerName.innerText = `${customerInput_Adult_Child_And_Infant_Value_Pre} kh??ch`;

        /*???? Auto Reset Number Customer */
        if (customerInput_Adult_Child_And_Infant_Value_Pre <= 0) {
            customerName.innerText = `S??? kh??ch`;
        }

    }
    /*???????????? Child */
    customerInput_Child.onblur = function() {
        var customerInput_Child_Value = (this.value - 0);
        /*???? TH1: C??c TH b??nh th?????ng */
        if (!isNaN(customerInput_Child_Value)) {
            var leftOver_Child = prevent_Adult_Child - customerInput_Adult_Value_Pre;
            /*???? TH1-a: Khi x >= prevent_Adult_Child */
            if (customerInput_Child_Value >= leftOver_Child) {
                // Ki???m tra khi set >= 100 Down Button c?? b??? disabled ko
                if (customerDown_Button_Child.classList.contains('disabled')) {
                    customerDown_Button_Child.classList.remove('disabled');
                }
                // Ki???m tra Adult xem c?? <= 0 ko, n???u c?? + 1 gi?? tr??? Adult v?? t??? - 1 gi?? tr??? Child
                if (customerInput_Adult_Value_Pre <= 0) {
                    customerInput_Adult.setAttribute('value', 1);
                    customerInput_Adult.value = 1;
                    customerInput_Adult_Value_Pre = 1;
                    if (customerDown_Button_Adult.classList.contains('disabled')) {
                        customerDown_Button_Adult.classList.remove('disabled');
                    }

                    // Set gi?? tr??? v?? tr??? - 1
                    this.setAttribute('value', leftOver_Child - 1);
                    this.value = leftOver_Child - 1;

                    // G??n cho bi???n nh???
                    customerInput_Child_Value_Pre = leftOver_Child - 1;
                }/* N???u Adult > 0 */ else {

                    // Set gi?? tr???
                    this.setAttribute('value', leftOver_Child);
                    this.value = leftOver_Child;
    
                    // G??n cho bi???n nh???
                    customerInput_Child_Value_Pre = leftOver_Child;
                }

                // Disabled Up Button
                customerUp_Button_Child.classList.add('disabled');
                customerUp_Button_Adult.classList.add('disabled');
            }

            /*???? TH1-b: Khi x <= 0 */
            else if (customerInput_Child_Value <= 0) {
                // Ki???m tra khi set <= 0 Up Button c?? b??? disabled ko
                if (customerUp_Button_Child.classList.contains('disabled')) {
                    customerUp_Button_Child.classList.remove('disabled');
                }

                // Set gi?? tr???
                this.setAttribute('value', 0);
                this.value = 0;

                // G??n cho bi???n nh???
                customerInput_Child_Value_Pre = 0;

                // Disabled Down Button
                customerDown_Button_Child.classList.add('disabled');
            }

            /*???? TH1-c: Khi (0 < x < prevent_Adult_Child) */
            else {
                // Ki???m tra khi set gi?? tr??? (0 < x < 100) Up, Down Button c?? b??? disabled ko
                if (customerUp_Button_Child.classList.contains('disabled') || customerDown_Button_Child.classList.contains('disabled')) {
                    customerUp_Button_Child.classList.remove('disabled');
                    customerDown_Button_Child.classList.remove('disabled');
                }
                // Ki???m tra khi set gi?? tr??? (0 < x < 100) Up Button Adult c?? b??? disabled ko
                if (customerUp_Button_Adult.classList.contains('disabled')) {
                    customerUp_Button_Adult.classList.remove('disabled');
                }
                // Ki???m tra Adult xem c?? <= 0 ko, n???u c?? + 1 gi?? tr??? Adult
                if (customerInput_Adult_Value_Pre <= 0) {
                    customerInput_Adult.setAttribute('value', 1);
                    customerInput_Adult.value = 1;
                    customerInput_Adult_Value_Pre = 1;
                    if (customerDown_Button_Adult.classList.contains('disabled')) {
                        customerDown_Button_Adult.classList.remove('disabled');
                    }
                }
                // Set gi?? tr???
                this.setAttribute('value', customerInput_Child_Value);
                this.value = customerInput_Child_Value;

                // G??n cho bi???n nh???
                customerInput_Child_Value_Pre = customerInput_Child_Value;
            }
        }

        /*???? TH2: C??c TH Not A Number */
        else {
            // Set gi?? tr??? l?? bi???n nh??? g???n nh???t
            this.setAttribute('value', customerInput_Child_Value_Pre);
            this.value = customerInput_Child_Value_Pre;
        }
        customerInput_Adult_Child_And_Infant_Value_Pre = customerInput_Adult_Value_Pre + customerInput_Child_Value_Pre + customerInput_Infant_Value_Pre;
        customerName.innerText = `${customerInput_Adult_Child_And_Infant_Value_Pre} kh??ch`;

        /*???? Auto Reset Number Customer */
        if (customerInput_Adult_Child_And_Infant_Value_Pre <= 0) {
            customerName.innerText = `S??? kh??ch`;
        }
    }
    /*???????????? Infant */
    customerInput_Infant.onblur = function() {
        var customerInput_Infant_Value = (this.value - 0);
        /*???? TH1: C??c TH b??nh th?????ng */
        if (!isNaN(customerInput_Infant_Value)) {
            /*???? TH1-a: Khi x >= 15 */
            if (customerInput_Infant_Value >= 15) {
                // Ki???m tra khi set >= 15 Down Button c?? b??? disabled ko
                if (customerDown_Button_Infant.classList.contains('disabled')) {
                    customerDown_Button_Infant.classList.remove('disabled');
                }
                // Ki???m tra Adult xem c?? <= 0 ko, n???u c?? + 1 gi?? tr??? Adult
                if (customerInput_Adult_Value_Pre <= 0) {
                    customerInput_Adult.setAttribute('value', 1);
                    customerInput_Adult.value = 1;
                    customerInput_Adult_Value_Pre = 1;
                    if (customerDown_Button_Adult.classList.contains('disabled')) {
                        customerDown_Button_Adult.classList.remove('disabled');
                    }
                }
                // Set gi?? tr???
                this.setAttribute('value', 15);
                this.value = 15;

                // G??n cho bi???n nh???
                customerInput_Infant_Value_Pre = 15;

                // Disabled Up Button
                customerUp_Button_Infant.classList.add('disabled');
            }

            /*???? TH1-b: Khi x <= 0 */
            else if (customerInput_Infant_Value <= 0) {
                // Ki???m tra khi set <= 0 Up Button c?? b??? disabled ko
                if (customerUp_Button_Infant.classList.contains('disabled')) {
                    customerUp_Button_Infant.classList.remove('disabled');
                }

                // Set gi?? tr???
                this.setAttribute('value', 0);
                this.value = 0;

                // G??n cho bi???n nh???
                customerInput_Infant_Value_Pre = 0;

                // Disabled Down Button
                customerDown_Button_Infant.classList.add('disabled');
            }

            /*???? TH1-c: Khi (0 < x < 15) */
            else {
                // Ki???m tra khi set gi?? tr??? (0 < x < 15) Up, Down Button c?? b??? disabled ko
                if (customerUp_Button_Infant.classList.contains('disabled') || customerDown_Button_Infant.classList.contains('disabled')) {
                    customerUp_Button_Infant.classList.remove('disabled');
                    customerDown_Button_Infant.classList.remove('disabled');
                }
                // Ki???m tra Adult xem c?? <= 0 ko, n???u c?? + 1 gi?? tr??? Adult
                if (customerInput_Adult_Value_Pre <= 0) {
                    customerInput_Adult.setAttribute('value', 1);
                    customerInput_Adult.value = 1;
                    customerInput_Adult_Value_Pre = 1;
                    if (customerDown_Button_Adult.classList.contains('disabled')) {
                        customerDown_Button_Adult.classList.remove('disabled');
                    }
                }
                // Set gi?? tr???
                this.setAttribute('value', customerInput_Infant_Value);
                this.value = customerInput_Infant_Value;
    
                // G??n cho bi???n nh???
                customerInput_Infant_Value_Pre = customerInput_Infant_Value;
            }
        }

        /*???? TH2: C??c TH Not A Number */
        else {
            // Set gi?? tr??? l?? bi???n nh??? g???n nh???t
            this.setAttribute('value', customerInput_Infant_Value_Pre);
            this.value = customerInput_Infant_Value_Pre;
        }
        customerInput_Adult_Child_And_Infant_Value_Pre = customerInput_Adult_Value_Pre + customerInput_Child_Value_Pre + customerInput_Infant_Value_Pre;
        customerName.innerText = `${customerInput_Adult_Child_And_Infant_Value_Pre} kh??ch`;

        /*???? Auto Reset Number Customer */
        if (customerInput_Adult_Child_And_Infant_Value_Pre <= 0) {
            customerName.innerText = `S??? kh??ch`;
        }
    }


// -------------- Click --------------
    /*???????????? Adult Up & Down */
    function Adult_Number_Click() {
        // Up
        customerUp_Button_Adult.onclick = function() {
            var customerInput_Adult_Value = (customerInput_Adult.getAttribute('value') - 0);
            /*???? TH1: Disabled r???i th?? ko click ??c n???a */
            if (customerUp_Button_Adult.classList.contains('disabled'));

            /*???? TH2: C??c TH b??nh th?????ng */
            else {
                // Set gi?? tr???
                customerInput_Adult.setAttribute('value', ++customerInput_Adult_Value);
                customerInput_Adult.value = customerInput_Adult_Value;
                
                // N???u gi?? tr??? >= 100 th?? disable Up Button
                if (customerInput_Adult_Value >= (prevent_Adult_Child - customerInput_Child_Value_Pre)) {
                    customerUp_Button_Adult.classList.add('disabled');
                    customerUp_Button_Child.classList.add('disabled');
                }
                // N???u gi?? tr??? > 0 th?? removeDisabled Down Button
                if (customerDown_Button_Adult.classList.contains('disabled') && customerInput_Adult_Value > 0) {
                    customerDown_Button_Adult.classList.remove('disabled');
                }

                // G??n gi?? tr??? cho bi???n nh???
                customerInput_Adult_Value_Pre = customerInput_Adult_Value;
            }
            customerInput_Adult_Child_And_Infant_Value_Pre = customerInput_Adult_Value_Pre + customerInput_Child_Value_Pre + customerInput_Infant_Value_Pre;
            customerName.innerText = `${customerInput_Adult_Child_And_Infant_Value_Pre} kh??ch`;
        }
        // Down
        customerDown_Button_Adult.onclick = function() {
            var customerInput_Adult_Value = (customerInput_Adult.getAttribute('value') - 0);
            /*???? TH1: Disabled r???i th?? ko click ??c n???a */
            if (customerDown_Button_Adult.classList.contains('disabled'));

            /*???? TH2: C??c TH b??nh th?????ng */
            else {
                // Set gi?? tr???
                customerInput_Adult.setAttribute('value', --customerInput_Adult_Value);
                customerInput_Adult.value = customerInput_Adult_Value;

                // N???u gi?? tr??? <= 0 th?? disable Down Button
                if (customerInput_Adult_Value <= 0) {
                    customerDown_Button_Adult.classList.add('disabled');

                    // Xo?? gi?? tr??? Child v?? Infant, disabled Down Button
                    customerInput_Child.setAttribute('value', 0);
                    customerInput_Child.value = 0;
                    customerInput_Child_Value_Pre = 0;
                    if (!customerDown_Button_Child.classList.contains('disabled')) {
                        customerDown_Button_Child.classList.add('disabled');
                    }
                    customerInput_Infant.setAttribute('value', 0);
                    customerInput_Infant.value = 0;
                    customerInput_Infant_Value_Pre = 0;
                    if (!customerDown_Button_Infant.classList.contains('disabled')) {
                        customerDown_Button_Infant.classList.add('disabled');
                    }
                }

                // N???u gi?? tr??? < 100 th?? removeDisabled Up Button
                if (customerUp_Button_Adult.classList.contains('disabled') && customerInput_Adult_Value < (prevent_Adult_Child - customerInput_Child_Value_Pre)) {
                    customerUp_Button_Adult.classList.remove('disabled');
                    customerUp_Button_Child.classList.remove('disabled');
                }

                // G??n gi?? tr??? cho bi???n nh???
                customerInput_Adult_Value_Pre = customerInput_Adult_Value;
            }
            customerInput_Adult_Child_And_Infant_Value_Pre = customerInput_Adult_Value_Pre + customerInput_Child_Value_Pre + customerInput_Infant_Value_Pre;
            customerName.innerText = `${customerInput_Adult_Child_And_Infant_Value_Pre} kh??ch`;

            /*???? Auto Reset Number Customer */
            if (customerInput_Adult_Child_And_Infant_Value_Pre <= 0) {
                customerName.innerText = `S??? kh??ch`;
            }
        }
    }
    Adult_Number_Click();


    /*???????????? Child Up & Down */
    function Child_Number_Click() {
        // Up
        customerUp_Button_Child.onclick = function() {
            var customerInput_Child_Value = (customerInput_Child.getAttribute('value') - 0);
            /*???? TH1: Disabled r???i th?? ko click ??c n???a */
            if (customerUp_Button_Child.classList.contains('disabled'));

            /*???? TH2: C??c TH b??nh th?????ng */
            else {
                // Set gi?? tr???
                customerInput_Child.setAttribute('value', ++customerInput_Child_Value);
                customerInput_Child.value = customerInput_Child_Value;

                // Ki???m tra Adult xem c?? <= 0 ko, n???u c?? + 1 gi?? tr???
                if (customerInput_Adult_Value_Pre <= 0) {
                    customerInput_Adult.setAttribute('value', 1);
                    customerInput_Adult.value = 1;
                    customerInput_Adult_Value_Pre = 1;
                    if (customerDown_Button_Adult.classList.contains('disabled')) {
                        customerDown_Button_Adult.classList.remove('disabled');
                    }
                }
                
                // N???u gi?? tr??? >= 100 th?? disable Up Button
                if (customerInput_Child_Value >= (prevent_Adult_Child - customerInput_Adult_Value_Pre)) {
                    customerUp_Button_Child.classList.add('disabled');
                    customerUp_Button_Adult.classList.add('disabled');
                }
                // N???u gi?? tr??? > 0 th?? removeDisabled Down Button
                if (customerDown_Button_Child.classList.contains('disabled') && customerInput_Child_Value > 0) {
                    customerDown_Button_Child.classList.remove('disabled');
                }

                // G??n gi?? tr??? cho bi???n nh???
                customerInput_Child_Value_Pre = customerInput_Child_Value;
            }
            customerInput_Adult_Child_And_Infant_Value_Pre = customerInput_Adult_Value_Pre + customerInput_Child_Value_Pre + customerInput_Infant_Value_Pre;
            customerName.innerText = `${customerInput_Adult_Child_And_Infant_Value_Pre} kh??ch`;
        }
        // Down
        customerDown_Button_Child.onclick = function() {
            var customerInput_Child_Value = (customerInput_Child.getAttribute('value') - 0);
            /*???? TH1: Disabled r???i th?? ko click ??c n???a */
            if (customerDown_Button_Child.classList.contains('disabled'));

            /*???? TH2: C??c TH b??nh th?????ng */
            else {
                // Set gi?? tr???
                customerInput_Child.setAttribute('value', --customerInput_Child_Value);
                customerInput_Child.value = customerInput_Child_Value;

                // N???u gi?? tr??? <= 0 th?? disable Down Button
                if (customerInput_Child_Value <= 0) {
                    customerDown_Button_Child.classList.add('disabled');
                }
                // N???u gi?? tr??? < 100 th?? removeDisabled Up Button
                if (customerUp_Button_Child.classList.contains('disabled') && customerInput_Child_Value < (prevent_Adult_Child - customerInput_Adult_Value_Pre)) {
                    customerUp_Button_Child.classList.remove('disabled');
                    customerUp_Button_Adult.classList.remove('disabled');
                }

                // G??n gi?? tr??? cho bi???n nh???
                customerInput_Child_Value_Pre = customerInput_Child_Value;
            }
            customerInput_Adult_Child_And_Infant_Value_Pre = customerInput_Adult_Value_Pre + customerInput_Child_Value_Pre + customerInput_Infant_Value_Pre;
            customerName.innerText = `${customerInput_Adult_Child_And_Infant_Value_Pre} kh??ch`;

            /*???? Auto Reset Number Customer */
            if (customerInput_Adult_Child_And_Infant_Value_Pre <= 0) {
                customerName.innerText = `S??? kh??ch`;
            }
        }
    }
    Child_Number_Click();


    /*???????????? Infant Up & Down */
    function Infant_Number_Click() {
        // Up
        customerUp_Button_Infant.onclick = function() {
            var customerInput_Infant_Value = (customerInput_Infant.getAttribute('value') - 0);
            /*???? TH1: Disabled r???i th?? ko click ??c n???a */
            if (customerUp_Button_Infant.classList.contains('disabled'));

            /*???? TH2: C??c TH b??nh th?????ng */
            else {
                // Set gi?? tr???
                customerInput_Infant.setAttribute('value', ++customerInput_Infant_Value);
                customerInput_Infant.value = customerInput_Infant_Value;

                // Ki???m tra Adult xem c?? b???ng 0 ko, n???u c?? + 1 gi?? tr???
                if (customerInput_Adult_Value_Pre <= 0) {
                    customerInput_Adult.setAttribute('value', 1);
                    customerInput_Adult.value = 1;
                    customerInput_Adult_Value_Pre = 1;
                    if (customerDown_Button_Adult.classList.contains('disabled')) {
                        customerDown_Button_Adult.classList.remove('disabled');
                    }
                }
                
                // N???u gi?? tr??? >= 15 th?? disable Up Button
                if (customerInput_Infant_Value >= 15) {
                    customerUp_Button_Infant.classList.add('disabled');
                }
                // N???u gi?? tr??? > 0 th?? removeDisabled Down Button
                if (customerDown_Button_Infant.classList.contains('disabled') && customerInput_Infant_Value > 0) {
                    customerDown_Button_Infant.classList.remove('disabled');
                }

                // G??n gi?? tr??? cho bi???n nh???
                customerInput_Infant_Value_Pre = customerInput_Infant_Value;
            }
            customerInput_Adult_Child_And_Infant_Value_Pre = customerInput_Adult_Value_Pre + customerInput_Child_Value_Pre + customerInput_Infant_Value_Pre;
            customerName.innerText = `${customerInput_Adult_Child_And_Infant_Value_Pre} kh??ch`;
        }
        // Down
        customerDown_Button_Infant.onclick = function() {
            var customerInput_Infant_Value = (customerInput_Infant.getAttribute('value') - 0);
            /*???? TH1: Disabled r???i th?? ko click ??c n???a */
            if (customerDown_Button_Infant.classList.contains('disabled'));

            /*???? TH2: C??c TH b??nh th?????ng */
            else {
                // Set gi?? tr???
                customerInput_Infant.setAttribute('value', --customerInput_Infant_Value);
                customerInput_Infant.value = customerInput_Infant_Value;

                // N???u gi?? tr??? <= 0 th?? disable Down Button
                if (customerInput_Infant_Value <= 0) {
                    customerDown_Button_Infant.classList.add('disabled');
                }
                // N???u gi?? tr??? < 15 th?? removeDisabled Up Button
                if (customerUp_Button_Infant.classList.contains('disabled') && customerInput_Infant_Value < 15) {
                    customerUp_Button_Infant.classList.remove('disabled');
                }

                // G??n gi?? tr??? cho bi???n nh???
                customerInput_Infant_Value_Pre = customerInput_Infant_Value;
            }
            customerInput_Adult_Child_And_Infant_Value_Pre = customerInput_Adult_Value_Pre + customerInput_Child_Value_Pre + customerInput_Infant_Value_Pre;
            customerName.innerText = `${customerInput_Adult_Child_And_Infant_Value_Pre} kh??ch`;

            /*???? Auto Reset Number Customer */
            if (customerInput_Adult_Child_And_Infant_Value_Pre <= 0) {
                customerName.innerText = `S??? kh??ch`;
            }
        }
    }
    Infant_Number_Click();



// -------------- Delele All Click --------------
    deleteAll_Button.onclick = function() {
        // Xo?? gi?? tr??? Adult, Child v?? Infant, disabled Down Button
        /*???? Adult */
        customerInput_Adult.setAttribute('value', 0);
        customerInput_Adult.value = 0;
        customerInput_Adult_Value_Pre = 0;
        if (!customerDown_Button_Adult.classList.contains('disabled')) {
            customerDown_Button_Adult.classList.add('disabled');
        }
        if (customerUp_Button_Adult.classList.contains('disabled')) {
            customerUp_Button_Adult.classList.remove('disabled');
        }
        /*???? Child */
        customerInput_Child.setAttribute('value', 0);
        customerInput_Child.value = 0;
        customerInput_Child_Value_Pre = 0;
        if (!customerDown_Button_Child.classList.contains('disabled')) {
            customerDown_Button_Child.classList.add('disabled');
        }
        if (customerUp_Button_Child.classList.contains('disabled')) {
            customerUp_Button_Child.classList.remove('disabled');
        }
        /*???? Infant */
        customerInput_Infant.setAttribute('value', 0);
        customerInput_Infant.value = 0;
        customerInput_Infant_Value_Pre = 0;
        if (!customerDown_Button_Infant.classList.contains('disabled')) {
            customerDown_Button_Infant.classList.add('disabled');
        }
        if (customerUp_Button_Infant.classList.contains('disabled')) {
            customerUp_Button_Infant.classList.remove('disabled');
        }
        customerName.innerText = `S??? kh??ch`;
    }



    // Nav-Bar
    navBarOut.onclick = function() {
        navBarBackGround.classList.remove('displayBlock');
        chooseFlagDropdownTB_MB.classList.remove('active');
        navBarFloat.style.transform = 'translateX(-100%)';
        navBarFloat.style.animation = 'navBarSlideOut 0.4s ease';
    }
    navBarBackGround.onclick = function() {
        navBarBackGround.classList.remove('displayBlock');
        chooseFlagDropdownTB_MB.classList.remove('active');
        navBarFloat.style.transform = 'translateX(-100%)';
        navBarFloat.style.animation = 'navBarSlideOut 0.4s ease';
    }
    navBarButton.onclick = function() {
        navBarBackGround.classList.add('displayBlock');
        navBarFloat.style.transform = 'translateX(0)';
        navBarFloat.style.animation = 'navBarSlideIn 0.4s ease';
    }


    // SignIn SignUp
    for (var ItemSignIn of signInButtonList) {
        ItemSignIn.onclick = function(e) {
            e.preventDefault();
            setTimeout(() => {
                mainView.classList.add('displayNone');
                mainSign.classList.add('displayBlock');
                formSignIn.classList.add('displayBlock');
                formSignUp.classList.remove('displayBlock');

                headerLogoSearch.classList.add('displayNone_PC');
                headerLogoSearch_Sign.classList.add('displayBlock_PC');
            }, 300)
    
            navBarBackGround.classList.remove('displayBlock');
            chooseFlagDropdownTB_MB.classList.remove('active');

            navBarFloat.style.transform = 'translateX(-100%)';
            navBarFloat.style.animation = 'navBarSlideOut 0.4s ease';

            navBarLogoSign.classList.add('displayBlock');
            headerSearchSign.classList.add('displayNone');

        }
    }
    for (var ItemSignUp of signUpButtonList) {
        ItemSignUp.onclick = function(e) {
            e.preventDefault();
            setTimeout(() => {
                mainView.classList.add('displayNone');
                mainSign.classList.add('displayBlock');
                formSignUp.classList.add('displayBlock');
                formSignIn.classList.remove('displayBlock');
                
                headerLogoSearch.classList.add('displayNone_PC');
                headerLogoSearch_Sign.classList.add('displayBlock_PC');
            }, 300)
    
            navBarBackGround.classList.remove('displayBlock');
            chooseFlagDropdownTB_MB.classList.remove('active');

            navBarFloat.style.transform = 'translateX(-100%)';
            navBarFloat.style.animation = 'navBarSlideOut 0.4s ease';

            navBarLogoSign.classList.add('displayBlock');
            headerSearchSign.classList.add('displayNone');
        }
    }


}

OwlCarousel();
Render();
Events();