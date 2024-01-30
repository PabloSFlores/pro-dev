<template>
    <b-form @submit="onSubmit" @reset="onReset">
        <b-row>
            <b-col cols="12" md="6" lg="4">
                <b-form-group label="Nombre:" label-for="name">
                    <b-form-input id="name" v-model="personData.name" type="text" placeholder="Pablo Samuel"
                        :state="validate.name" @input="validateField('name')" trim maxlength="100"></b-form-input>
                    <b-form-invalid-feedback>
                        {{ errors.name }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="6" lg="4">
                <b-form-group label="Apellido paterno:" label-for="surname">
                    <b-form-input id="surname" v-model="personData.surname" type="text" placeholder="Flores"
                        :state="validate.surname" @input="validateField('surname')" trim maxlength="100"></b-form-input>
                    <b-form-invalid-feedback>
                        {{ errors.surname }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="6" lg="4">
                <b-form-group label="Apellido materno:" label-for="lastname">
                    <b-form-input id="lastname" v-model="personData.lastname" type="text" placeholder="Santana"
                        :state="validate.lastname" @input="validateField('lastname')" trim maxlength="100"></b-form-input>
                    <b-form-invalid-feedback>
                        {{ errors.lastname }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="3" lg="4">
                <b-form-group label="Código Postal:" label-for="postalCode">
                    <b-form-input id="postalCode" v-model="personData.postalCode" type="number" placeholder="63876"
                        :state="validate.postalCode" :formatter="formatNumber"
                        @input="validateField('postalCode')"></b-form-input>
                    <b-form-invalid-feedback>
                        {{ errors.postalCode }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="9" lg="8">
                <b-form-group label="Calle:" label-for="street">
                    <b-form-input id="street" v-model="personData.street" type="text" placeholder="Las rosas"
                        :state="validate.street" @input="validateField('street')" trim maxlength="100"></b-form-input>
                    <b-form-invalid-feedback>
                        {{ errors.street }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="3" lg="4">
                <b-form-group label="No. de casa:" label-for="houseNumber">
                    <b-form-input id="houseNumber" v-model="personData.houseNumber" type="number" placeholder="10"
                        :state="validate.houseNumber" :formatter="formatNumber"
                        @input="validateField('houseNumber')"></b-form-input>
                    <b-form-invalid-feedback>
                        {{ errors.houseNumber }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="9" lg="8">
                <b-form-group label="Ciudad:" label-for="city">
                    <b-form-input id="city" v-model="personData.city" type="text" placeholder="Cuernavaca"
                        :state="validate.city" @input="validateField('city')" trim maxlength="100"></b-form-input>
                    <b-form-invalid-feedback>
                        {{ errors.city }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group label="Fecha de nacimiento:">
                    <b-form-datepicker :min="minDate" :max="maxDate" v-model="personData.birthday" locale="es-MX"
                        placeholder="Elige una fecha" :state="validate.birthday" @input="validateField('birthday')"
                        :label-help="null" :label-selected="null" :label-no-date-selected="null"
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: '2-digit' }"></b-form-datepicker>
                    <b-form-invalid-feedback tooltip>
                        {{ errors.endMonth }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group label="Correo electrónico:" label-for="email">
                    <b-form-input id="email" v-model="personData.email" type="text" placeholder="correo@gmail.com"
                        :state="validate.email" @input="validateField('email')" trim maxlength="100"></b-form-input>
                    <b-form-invalid-feedback>
                        {{ errors.email }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group label="No. de Télefono:" label-for="phoneNumber">
                    <b-form-input id="phoneNumber" v-model="personData.phoneNumber" type="number" placeholder="10"
                        :state="validate.phoneNumber" :formatter="formatNumber"
                        @input="validateField('phoneNumber')"></b-form-input>
                    <b-form-invalid-feedback>
                        {{ errors.phoneNumber }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group label="Seleccionar foto:">
                    <b-form-file no-drop placeholder="Seleccionar archivo" v-model="file" accept=".png"
                        @change="handleFileChange" :state="validate.photo" ref="fileInput"
                        :browse-text="'Buscar'"></b-form-file>
                    <b-form-invalid-feedback>
                        {{ errors.photo }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col cols="12" class="mt-5 d-flex flex-row-reverse">
                <b-button class="ml-3" type="submit" variant="success" :disabled="disableSubmitButton()">Enviar</b-button>
                <b-button type="reset" variant="danger">Limpiar</b-button>
            </b-col>
        </b-row>
    </b-form>
</template>

<script>
import Vue from 'vue'
// Desarrollar un formulario por medio de VUE para poner en práctica la validación de valores
// Contenido del formulario:
// Nombre completo (separando nombre y apellidos) - Validar nombre y apellido paterno, el materno no es obligatorio
// Dirección (CP, Calle, número, Ciudad) . 
// Fecha de nacimiento - No es presente ni futura, poner un límte de 18 años
// Correo electrónico - validar por medio de una expresión regular.
// Número telefónico - validar el tamaño de caracteres.
// Fotografía (PNG) - Validar el tamaño del archivo a menos de 3 mb
// Informar al usuario el problema con su formulario cuando haga falta algún dato o formato.
export default Vue.extend({
    name: 'Formulario',
    data() {
        return {
            minDate: null,
            maxDate: null,
            file: null,
            personData: {
                name: null,
                surname: null,
                lastname: null,
                postalCode: null,
                street: null,
                houseNumber: null,
                city: null,
                birthday: null,
                email: null,
                phoneNumber: null,
                photo: null
            },
            errors: {},
            validate: {},
            mandatoryFields: ['name', 'surname', 'postalCode', 'street', 'houseNumber', 'city', 'birthday', 'email', 'phoneNumber', 'photo'],
            optionalFields: ['lastname'],
        }
    },
    methods: {
        handleFileChange(event) {
            const files = event.target.files;
            if (files.length === 0) {
                // No se seleccionó ningún archivo
                return;
            }
            this.file = files[0];
            this.validatePhoto(this.file);
        },
        validatePhoto(file) {
            const maxSize = 3 * 1024 * 1024;
            const fileExtension = file.name.split(".").pop().toLowerCase();
            if (fileExtension != 'png') {
                this.validate['photo'] = false;
                this.errors['photo'] = 'El archivo debe ser png'
                this.clearFile()
            } else if (file.size > maxSize) {
                this.validate['photo'] = false;
                this.errors['photo'] = 'Archivo demasiado grande'
                this.clearFile()
            } else {
                this.validate['photo'] = true;
                this.errors['photo'] = '';
                this.personData.photo = file.name;
            }
        },
        clearFile() {
            this.file = null;
        },
        // Fecha de hace 18 años
        getMinDate() {
            const date = new Date();
            date.setFullYear(date.getFullYear() - 18, 0, 1);
            return this.formatDate(date);
        },
        // Fecha de ayer
        getMaxDate() {
            const date = new Date();
            date.setDate(date.getDate() - 1);
            return this.formatDate(date);
        },
        // https://www.freecodecamp.org/news/javascript-date-format-how-to-format-a-date-in-js/
        formatDate(date) {
            const year = date.getFullYear();
            let month = date.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let day = date.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            return `${year}-${month}-${day}`;
        },
        formatNumber(number) {
            return number ? Math.abs(parseInt(number)) : null
        },
        validateMandatoryField(field) {
            if (!this.personData[field]) {
                this.errors[field] = 'Campo requerido';
                this.validate[field] = false;
            } else {
                this.errors[field] = '';
                this.validate[field] = true;
            }
        },
        validateOptionalField(field) {
            if (!this.personData[field]) {
                this.validate[field] = null;
            } else {
                this.validate[field] = true;
            }
        },
        validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(email)) {
                this.validate['email'] = true;
                this.errors['email'] = '';
            } else {
                this.validate['email'] = false;
                this.errors['email'] = 'Formato inválido';
            }
        },
        // https://stackoverflow.com/questions/56034027/how-to-limit-digit-number-in-vue-input
        validateLength(field, minLength, maxLength) {

            if (String(this.personData[field]).length < minLength) {
                this.errors[field] = `Mínimo ${maxLength} carácteres`;
                this.validate[field] = false
            } else if (String(this.personData[field]).length > maxLength) {
                this.errors[field] = `Máximo ${maxLength} carácteres`;
                this.validate[field] = false
            } else {
                this.errors[field] = '';
                this.validate[field] = true
            }
        },
        validateField(field) {
            if (this.mandatoryFields.includes(field)) this.validateMandatoryField(field)
            if (this.optionalFields.includes(field)) this.validateOptionalField(field)
            if (field === 'email' && this.validate['email']) this.validateEmail(this.personData.email)
            if (field === 'postalCode' && this.validate['postalCode']) this.validateLength(field, 5, 5)
            if (field === 'phoneNumber' && this.validate['phoneNumber']) this.validateLength(field, 10, 10)
            if (field === 'houseNumber' && this.validate['houseNumber']) this.validateLength(field, 1, 3)
        },
        disableSubmitButton() {
            for (const i in this.mandatoryFields) {
                if (!this.validate[this.mandatoryFields[i]]) return true;
            }
            return false;
        },
        onSubmit(event) {
            event.preventDefault()
            if (!Object.values(this.validate).includes(false)) {
                alert(JSON.stringify(this.personData))
            } else {
                alert('Error en el formulario')
            }
        },
        onReset(event) {
            event.preventDefault()
            for (const field in this.personData) {
                this.errors[field] = '';
                this.validate[field] = null;
                this.personData[field] = null;
            }
        }
    },
    mounted() {
        // Restablecer los mensajes y estados de error cuando se carga el componente
        for (const field in this.personData) {
            this.errors[field] = '';
            this.validate[field] = null;
        }
        this.minDate = this.getMinDate();
        this.maxDate = this.getMaxDate();
    }
})
</script>

<style></style>
