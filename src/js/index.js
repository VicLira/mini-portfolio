
// passo 1 -dar um jeito de pegar os elementos que representam as abas no HTML
const tabs = document.querySelectorAll(".tab");

console.log(tabs)

tabs.forEach(tab => {
    // passo 2 - dar um jeito de identificar o clique no elemento da aba
    tab.addEventListener("click", function() {

        if(tab.classList.contains("selected")){
            return;
        }

        selectTab(tab);

        showInfoTab(tab)
    })
})

function selectTab(tab) {
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const selectedTab = document.querySelector(".tab.selected");

    selectedTab.classList.remove("selected");

    // passo 4 - marcar a aba clicada como selecionado
    tab.classList.add("selected");
}

function showInfoTab(tab) {
     // passo 5 - esconder o conteúdo anterior

     const selectedInfo = document.querySelector(".info.selected")

     selectedInfo.classList.remove("selected");
     

     // passo 6 - mostrar o conteúdo da aba selecionada

     const idElementInfoTabs = `info-${tab.id}`

     const showInfo = document.getElementById(idElementInfoTabs)

     showInfo.classList.add("selected")
}





