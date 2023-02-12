const view_sms_administratoriaus_informavimas = function (
    param_metai,
    param_menesis,
    param_diena,
    param_valanda,
    param_minutes,
    param_kliento_vardas,
    param_kliento_tel_nr,
    param_kliento_pasirinkta_paslauga)
{
    return `EPMC
Administratoriaus informavimas apie patvirtintą rezervaciją:
${param_metai}-${param_menesis}-${param_diena}
${param_valanda}:${param_minutes}
${param_kliento_vardas}
${param_kliento_tel_nr}
${param_kliento_pasirinkta_paslauga}`
}

export default view_sms_administratoriaus_informavimas