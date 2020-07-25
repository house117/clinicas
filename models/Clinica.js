const mongoose = require("mongoose");
const clinicaSchema = new mongoose.Schema({
        CLUES : {
            type: String
        },
        CLAVE_DE_ESTATUS_DE_OPERACION : {
            type: String
        },
        ESTATUS_DE_OPERACION : {
            type: String
        },
        CLAVE_DE_LA_ENTIDAD : {
            type: String
        },
        NOMBRE_DE_LA_ENTIDAD : {
            type: String
        },
        CLAVE_DE_LA_JURISDICCION : {
            type: String
        },
        NOMBRE_DE_LA_JURISDICCION : {
            type: String
        },
        CLAVE_DEL_MUNICIPIO : {
            type: String
        },
        NOMBRE_DEL_MUNICIPIO : {
            type: String
        },
        CLAVE_DE_LA_LOCALIDAD : {
            type: String
        },
        NOMBRE_DE_LA_LOCALIDAD : {
            type: String
        },
        CLAVE_DE_LA_INSTITUCION : {
            type: String
        },
        CLAVE_CORTA_DE_LA_INSTITUCION : {
            type: String
        },
        NOMBRE_DE_LA_INSTITUCION : {
            type: String
        },
        CLAVE_TIPO_ESTABLECIMIENTO : {
            type: String
        },
        NOMBRE_TIPO_ESTABLECIMIENTO : {
            type: String
        },
        CLAVE_NIVEL_ATENCION : {
            type: String
        },
        NIVEL_ATENCION : {
            type: String
        },
        CLAVE_DE_TIPOLOGIA : {
            type: String
        },
        NOMBRE_DE_TIPOLOGIA : {
            type: String
        },
        CLAVE_DE_SUBTIPOLOGIA : {
            type: String
        },
        NOMBRE_DE_SUBTIPOLOGIA : {
            type: String
        },
        CLAVE_SCIAN : {
            type: String
        },
        DESCRIPCION_CLAVE_SCIAN : {
            type: String
        },
        CONSULTORIOS_DE_MED_GRAL : {
            type: String
        },
        CONSULTORIOS_EN_OTRAS_AREAS : {
            type: String
        },
        TOTAL_DE_CONSULTORIOS : {
            type: String
        },
        CAMAS_EN_AREA_DE_HOS : {
            type: String
        },
        CAMAS_EN_OTRAS_AREAS : {
            type: String
        },
        TOTAL_DE_CAMAS : {
            type: String
        },
        NOMBRE_DE_LA_UNIDAD : {
            type: String
        },
        CLAVE_DE_VIALIDAD : {
            type: String
        },
        TIPO_DE_VIALIDAD : {
            type: String
        },
        VIALIDAD : {
            type: String
        },
        NUMERO_EXTERIOR : {
            type: String
        },
        NUMERO_INTERIOR : {
            type: String
        },
        CLAVE_DEL_TIPO_DE_ASENTAMIENTO : {
            type: String
        },
        TIPO_DE_ASENTAMIENTO : {
            type: String
        },
        ASENTAMIENTO : {
            type: String
        },
        ENTRE_TIPO_DE_VIALIDAD_1 : {
            type: String
        },
        ENTRE_VIALIDAD_1 : {
            type: String
        },
        ENTRE_TIPO_DE_VIALIDAD_2 : {
            type: String
        },
        ENTRE_VIALIDAD_2 : {
            type: String
        },
        OBSERVACIONES_DE_LA_DIRECCION : {
            type: String
        },
        CODIGO_POSTAL : {
            type: String
        },
        TIENE_LICENCIA_SANITARIA : {
            type: String
        },
        NUMERO_DE_LICENCIA_SANITARIA : {
            type: String
        },
        TIENE_AVISO_DE_FUNCIONAMIENTO : {
            type: String
        },
        FECHA_EMISION_AV_FUN : {
            type: String
        },
        RFC_DEL_ESTABLECIMIENTO : {
            type: String
        },
        PROFESION_RESPONSABLE : {
            type: String
        },
        NOMBRE_RESPONSABLE : {
            type: String
        },
        PRIMER_APELLIDO_RESPONSABLE : {
            type: String
        },
        SEGUNDO_APELLIDO_RESPONSABLE : {
            type: String
        },
        RFC_RESPONSABLE : {
            type: String
        },
        CEDULA_PROFESIONAL_RESPONSABLE : {
            type: String
        },
        EMAIL_RESPONSABLE : {
            type: String
        },
        LADA : {
            type: String
        },
        TELEFONO : {
            type: String
        },
        EXTENSION :{
            type: String
        },
        FECHA_DE_CONSTRUCCION : {
            type: String
        },
        FECHA_DE_INICIO_DE_OPERACION : {
            type: String
        },
        UNIDAD_MOVIL_MARCA : {
            type: String
        },
        UNIDAD_MOVIL_MODELO : {
            type: String
        },
        UNIDAD_MOVIL_CAPACIDAD : {
            type: String
        },
        UNIDAD_MOVIL_PROGRAMA : {
            type: String
        },
        UNIDAD_MOVIL_CLAVE_PROGRAMA : {
            type: String
        },
        UNIDAD_MOVIL_TIPO : {
            type: String
        },
        UNIDAD_MOVIL_CLAVE_TIPO : {
            type: String
        },
        UNIDAD_MOVIL_TIPOLOGIA :{
            type: String
        },
        UNIDAD_MOVIL_CLAVE_TIPOLOGIA : {
            type: String
        },
        LONGITUD : {
            type: String
        },
        LATITUD : {
            type: String
        },
        NOMBRE_DE_LA_INS_ADM : {
            type: String
        },
        CLAVE_DE_LA_INS_ADM : {
            type: String
        },
        CLAVE_ESTATUS_ACREDITACION : {
            type: String
        },
        ESTATUS_ACREDITACION : {
            type: String
        },
        ACREDITACIONES : {
            type: String
        },
        SUBACREDITACION : {
            type: String
        },
        CLAVE_ESTRATO_UNIDAD : {
            type: String
        },
        ESTRATO_UNIDAD : {
            type: String
        },
        TIPO_OBRA : {
            type: String
        },
        CLAVE_TIPO_OBRA : {
            type: String
        },
        HORARIO_DE_ATENCION :{
            type: String
        },
        AREAS_Y_SERVICIOS :{
            type: String
        },
        ULTIMO_MOVIMIENTO : {
            type: String
        },
        FECHA_ULTIMO_MOVIMIENTO : {
            type: String
        },
        MOTIVO_BAJA :{
            type: String
        },
        FECHA_EFECTIVA_DE_BAJA :{
            type: String
        },
        CERTIFICACION_CSG : {
            type: String
        },
        TIPO_CERTIFICACION : {
            type: String
        },
        VIGENCIA_CERTIFICACION :{
            type: String
        },
        OBSERVACIONES : {
            type: String
        }
});

module.exports = Clinica = mongoose.model("clues", clinicaSchema);
