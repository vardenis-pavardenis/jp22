const view_sms_kliento_informavimas = function(
    param_metai,
    param_menesis,
    param_diena,
    param_valanda,
    param_minutes,
    param_kliento_pasirinkta_paslauga)
{
 return `EPMC
Rezervacija patvirtinta:
${param_metai}-${param_menesis}-${param_diena}
${param_valanda}:${param_minutes}
${param_kliento_pasirinkta_paslauga}`
}

export default view_sms_kliento_informavimas