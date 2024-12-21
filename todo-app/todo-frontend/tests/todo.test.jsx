import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import Todo from "../src/Todos/Todo";

const todo = {
  _id: "675e8c6a7a4eafa70be9496b",
  text: "Learn about containers",
  done: false,
};

test("renders Todo component", async () => {
  const onClickComplete = vi.fn();
  const onClickDelete = vi.fn();

  const { container } = render(
    <Todo
      todo={todo}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
    />
  );

  expect(container).toHaveTextContent(todo.text);
  expect(container).toHaveTextContent("This todo is not done");
});
