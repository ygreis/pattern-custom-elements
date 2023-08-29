class RootApp extends HTMLDivElement {

  table = null;

  constructor() {
    super();

    this.table = this.find('table');

    this.table.thead = [
      '<th>#</th>',
      '<th>O que preciso fazer?</th>',
      '<th class="w-25">Ação</th>',
    ];

    this.table.tbody = [
      `<tr data-key="1" class="bg-secondary text-decoration-line-through">
        <td><input type="checkbox" name="todo-check" checked/></td>
        <td>Ir ao mercado</td>
        <td class="actions"><button type="button" class="btn btn-outline-light btn-sm">Refazer</button></td>
      </tr>`,
      `<tr data-key="2">
        <td><input type="checkbox" name="todo-check"/></td>
        <td>Ir a academia</td>
        <td class="actions"><button type="button" class="btn btn-sm btn-danger">Excluir</button></td>
      </tr>
      <tr>
        <td></td>
        <td class="p-0"><input type="text" class="form-control w-100 b-none" style="height: 48px !important; box-shadow: none; border: none;"/></td>
        <td class="actions">
          <button type="button" class="btn btn-sm btn-primary">Adicionar</button>
          <button type="button" class="btn btn-sm btn-danger">Excluir</button>
        </td>
      </tr>`,
    ];

  }



  setHtml(html) {
    this.innerHTML += html;
  }
}

customElements.define("root-app", RootApp, {extends: 'div'});