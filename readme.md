# Cypress Exercise

We want to add end to end tests for our solution. To achieve this we decide to use **cypress**. Our application is pretty simple by now it just add cards with a simple form.

We have a couple of projects to test our skills on `Cypress`. The [Task App](./task-app) project is a simple for adding and remove tasks from a user, and [Lemoncode Store App](./lcs-app) is simple catalog where users can find products.

## Task App Cypress

1. Add `Cypress` to solution. To make it simple, you can directly add `Cypress` as project dependency on fronte end project.
2. We will divide the the different tests by user case:
   1. I can get access to application as `admin` or `standard` user, when I provide valid credentials
   2. As `admin` user I can see users tasks.
   3. As `admin` user I can filter task by user.
   4. As `standard` user I can create tasks.
      1. Happy path, the task is created
      2. Check that a `Snackbar` appears when user does not feed mandatory fields
   5. As `standard` user I can delete a task.
   6. As `standard` user I can update a task.
      1. Happy path, the task is updated
      2. Check that validation helpers when user does not feed mandatory fields
3. Refactor to use Testing Library

## LCS App Cypress

1. Add `Cypress` to solution. We recomeded to use a segregate project.

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
