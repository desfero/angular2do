import { Angular2TodoListPage } from './home.po';

describe('Home page', function() {
  let page: Angular2TodoListPage;

  beforeEach(() => {
    page = new Angular2TodoListPage();

    page.navigateTo();
  });

  it('should display todos header', () => {
    expect(page.getParagraphText()).toEqual('todos');
  });

  it('should add new todo', () => {
    const newTodo = 'new todo';

    page.addNewTodo(newTodo);
    const firstTodo = page.getFirstTodoText();

    expect(firstTodo).toEqual(newTodo);
  });

  it('should display delete icon on first todo hover', () => {
    page.addNewTodo('new todo');

    page.hoverFirstTodo();

    expect(page.isFirstTodoButtonDisplayed()).toEqual(true);
  });

  it('should remove todo', () => {
    page.addNewTodo('todo');

    page.removeFirstTodo();

    expect(page.getTodosCount()).toEqual(0);
  });

  it('should show correct number in counter', () => {
    page.addNewTodo('todo one');
    page.addNewTodo('todo two');
    page.addNewTodo('todo three');
    page.addNewTodo('todo four');

    page.checkFirstTodoAsDone();

    expect(page.getTodosCountText()).toEqual('3 items left');
  });

  it('should navigate to active todos by clicking on filter', () => {
    page.filterByActive();

    expect(page.isActiveUrl()).toEqual(true);
  });

  it('should show only active todos by clicking on filter', () => {
    page.addNewTodo('todo one');
    page.addNewTodo('todo two');
    page.addNewTodo('todo three');

    page.checkFirstTodoAsDone();
    page.filterByActive();

    expect(page.getTodosCount()).toEqual(2);
  });

  it('should navigate to completed todos by clicking on filter', () => {
    page.filterByCompleted();

    expect(page.isCompletedUrl()).toEqual(true);
  });

  it('should show only completed todos by clicking on filter', () => {
    page.addNewTodo('todo one');
    page.addNewTodo('todo two');
    page.addNewTodo('todo three');

    page.checkFirstTodoAsDone();
    page.filterByCompleted();

    expect(page.getTodosCount()).toEqual(1);
  });

  it('should show only completed todos by clicking on filter', () => {
    page.addNewTodo('todo one');
    page.addNewTodo('todo two');
    page.addNewTodo('todo three');

    page.checkFirstTodoAsDone();
    page.checkSecondTodoAsDone();
    page.clearCompletedTodos();

    expect(page.getFirstTodoText()).toEqual('todo three');
    expect(page.getTodosCount()).toEqual(1);
  });

});
