# Patterns for managing state in a React + Reflux app

## The React way

State flows from parent components to children through props. User actions are communicated between components with callback props.

## The Reflux way

Components get their state by listening to Stores. User actions are communicated between components by Actions.

## Avoid Stores

Componenents are the source of their own state. User actions are communicated between componenets by Actions

## Avoid Reflux

Creating Stores for every piece of state is burdensome. Components are the source of their own state, and user actions are communicated between components by callbacks, until that becomes burdensome, then use Reflux.
