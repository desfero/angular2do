import { browser, element, by, protractor } from 'protractor';

export class Angular2TodoListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTodosList() {
    return element(by.css('.todo-list'));
  }

  getFirstTodo() {
    return this.getTodoAtIndex(0);
  }

  getTodoAtIndex(index) {
    return this.getTodosList().$$('li').get(index);
  }

  getTodoDeleteButton(todo) {
    return todo.$('.destroy');
  }

  getTodoToggleButton(todo) {
    return todo.$('.toggle');
  }

  hoverFirstTodo() {
    return browser.actions().mouseMove(this.getFirstTodo()).perform();
  }

  isFirstTodoButtonDisplayed() {
    return this.getTodoDeleteButton(this.getFirstTodo()).isDisplayed();
  }

  getTodosCount() {
    return this.getTodosList().$$('li').count();
  }

  getFirstTodoText() {
    return this.getFirstTodo()
               .$('label')
               .getText();
  }

  removeFirstTodo() {
    this.hoverFirstTodo();
    this.getTodoDeleteButton(this.getFirstTodo()).click();
  }

  addNewTodo(todo) {
    element(by.css('.new-todo')).sendKeys(todo, protractor.Key.ENTER);
  }

  getTodosCountText() {
    return element(by.css('.todo-count')).getText();
  }

  checkFirstTodoAsDone() {
    this.getTodoToggleButton(this.getFirstTodo()).click();
  }

  checkSecondTodoAsDone() {
    this.getTodoToggleButton(this.getTodoAtIndex(1)).click();
  }

  getFilters() {
    return element(by.css('.filters'));
  }

  filterByActive() {
    this.getFilters().$('[filter="active"]').click();
  }

  isActiveUrl() {
    return browser.getCurrentUrl()
                  .then((url:string) => url.endsWith('/active'));
  }

  isCompletedUrl() {
    return browser.getCurrentUrl()
                  .then((url:string) => url.endsWith('/completed'));
  }

  filterByCompleted() {
    this.getFilters().$('[filter="completed"]').click();
  }

  clearCompletedTodos() {
    element(by.css('.clear-completed')).click();
  }
}
