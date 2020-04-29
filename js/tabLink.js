$(function(){
    var activeTab = document.querySelector(location.hash);
    console.log(activeTab)
    if (activeTab){
        activeTab.click();
    }
});