### Todos

1. Responsive layout components

**Single Column Layout**

```jsx
<SingleColumnLayout>
  <SingleColumnDropZone name="droppable-into-single-column">
    <ComponentOne />
    <ComponentTwo />
    <ComponentThree />
  </SingleColumnDropZone>
</SingleColumnLayout>
```

**Sidebar Layout**

```jsx
<SidebarLayout>
  <SidebarDropZone name="droppable-into-sidebar">
    <div width="2">
      <ComponentOne />
      <ComponentTwo />
    </div>
    <div width="1">
      <ComponentThree />
    </div>
  </SidebarDropZone>
</SidebarLayout>
```

**Nested DropZones (Experimental)**

```jsx
<SidebarLayout>
  <SidebarDropZone name="sidebar-drop-zone">
    <div width="2">
      <SingleColumnDropZone name="single-column-drop-zone">
        <ComponentOne />
        <ComponentTwo />
        <ComponentThree />
      </SingleColumnDropZone>
    </div>
    <div width="1">
      <SingleColumnDropZone>
        <ComponentThree />
      </SingleColumnDropZone>
    </div>
  </SidebarDropZone>
</SidebarLayout>
```

