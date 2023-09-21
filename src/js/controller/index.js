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

    this.init();

  }

  init() {

    const todoList = TodoList.getStorage();

    setState('tableItems', todoList);

  }

  setHtml(html) {
    this.innerHTML += html;
  }
}

customElements.define("root-app", RootApp, {extends: 'div'});