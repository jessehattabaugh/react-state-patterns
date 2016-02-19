# Patterns for managing state in a React app

## Stateful React Components

`$ npm run react`

Each component is the source of it's own state. When a component's state is based on another component, callbacks are used to keep them synced.

| Pros | Cons |
| --- | --- |
| No flux dependencies  | Syncing state requires boilerplate  |

## Reflux with components connected to stores

`$ npm run reflux`

Components get their state by listening to Stores. User actions are communicated between components by Actions.

| Pros | Cons |
| --- | --- |
| State is synced with little extra effort | Components require knowledge of Actions and Stores |

## Avoid using Reflux Stores

`not yet implemented`

Components are the source of their own state. User actions are communicated between components by Actions.

## Reflux with store only connected to the root component

`not yet implemented`

The root component gets it's state from a Store, all other components get their state from props. Actions trigger Store updates, which updates the root component and state trickles down.

| Pros | Cons |
| --- | --- |
| Root component is only one with state | Components still require knowledge of Actions |
| Components don't require knowledge of Stores |  |

## Redux

`$ npm run redux`

With Redux, there is only one Store. Components are always stateless. Components get their props connected to action creators and the Store's state using Container Components.

| Pros | Cons |
| --- | --- |
| Stateless components | Container Components add extra cognitive load and code |
| Presentation Components don't require knowledge of Stores or Actions |  |
