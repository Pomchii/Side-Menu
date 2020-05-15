$(function(){
    dropdownAction('btn-cadastro', 'cadastro-dropdown');
    dropdownAction('btn-servico', 'servicos-dropdown');
    dropdownAction('btn-financeiro', 'financeiro-dropdown');
    dropdownAction('btn-relatorios', 'relatorios-dropdown');
    dropdownAction('btn-seguranca', 'seguranca-dropdown');
    //================================Relatorios
    dropdownAction('relatorios-dropdown-cadastros', 'dropdown-relatorios-cadastros');
    dropdownAction('financeiro-dropdown-cadastros', 'dropdown-financeiro-cadastros');
    dropdownAction('servicos-dropdown-cadastros', 'dropdown-servicos-cadastros');
});

function dropdownAction(botao, dropdown){
    let btn = $(`#${botao}`);
    btn.click(()=>{
        event.preventDefault();
        $(`#${dropdown}`).toggle('slow');
        btn.toggleClass('list-style');
    });
}
