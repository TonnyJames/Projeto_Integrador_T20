

function tmsCalc(form){
    let val1 = parseFloat(form.msInic.value)
    let val2 = parseFloat(form.msFim.value)
    form.teorMs.value = (val2*100)/val1 + '%'
}

function nsaCalc(form){
    let val1 = parseFloat((form.teorMs.value)/100)
    let val2 = parseFloat(form.catAnimal.value)
    form.nsaResult.value = val2/val1
}

function nudCalc(form){
    let val1 = parseFloat(form.nescDia.value)
    let val2 = parseFloat(form.qtdAnimais.value)
    form.nudResult.value = val2*val1
}

function qspCalc(form){
    let val1 = parseFloat(form.nudResult.value)
    let val2 = parseFloat(form.qtDias.value)
    form.qspResult.value = val2*val1
}