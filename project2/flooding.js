
$(document).ready(function() {
    addFloodRisk();
    floodDetailsButton();
});

function addFloodRisk() {
    console.log("checking flood risk labels");

    var elmnt = document.getElementsByClassName('mediaImg mediaImgExt propertyDescription pll cols15 srpMultilineDetails');
    // console.log(elmnt);
    $(elmnt).prepend("FLOOD RISK!!! ");
}

function floodDetailsButton() {
    console.log("altering flood risk details button");
    var elmnt = document.getElementsByClassName('btn btnTertiary btnSml phm pdpLink');
    var parent = document.getElementsByClassName('listInline lhs h7 mvn txtR typeEmphasize');
    $(elmnt).append(" on Flood Risks");
    console.log($(parent).children());

}
