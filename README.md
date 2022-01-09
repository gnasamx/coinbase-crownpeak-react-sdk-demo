### Layouts

**Single Column Layout**

```jsx
<SingleColumnLayout>
  <DropZone name="droppable-12">
    <ComponentOne />
    <ComponentTwo />
    <ComponentThree />
  </DropZone>
</SingleColumnLayout>
```

**Sidebar Layout**

```jsx
<SidebarLayout>
  <DropZone name="droppable-12">
    <ComponentOne />
  </DropZone>
  <div>
    <div width="2">
      <DropZone name="droppable-8">
        <ComponentTwo />
        <ComponentThree />
        <ComponentFour />
      </DropZone>
    </div>
    <div width="1">
      <DropZone name="droppable-8">
        <ComponentFive />
      </DropZone>
    </div>
  </div>
</SidebarLayout>
```
