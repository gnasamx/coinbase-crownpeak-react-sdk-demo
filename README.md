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
      <DropZone name="droppable-4">
        <ComponentFive />
      </DropZone>
    </div>
  </div>
</SidebarLayout>
```

```json
// demo.json
[
  {
    "path": "/",
    "exact": true,
    "component": "SingleColumnLayout",
    "cmsassetid": 33389
  },
  {
    "path": "/crypto-basics/how-to-donate-crypto",
    "exact": true,
    "component": "SidebarLayout",
    "cmsassetid": 33390
  },
  {
    "path": "/crypto-basics/how-to-set-up-a-crypto-wallet",
    "exact": true,
    "component": "SidebarLayout",
    "cmsassetid": 33391
  },
  {
    "path": "/crypto-basics/when-is-the-best-time-to-invest-in-crypto",
    "exact": true,
    "component": "SidebarLayout",
    "cmsassetid": 33392
  },
  {
    "path": "/crypto-basics/an-investor-who-got-in-when-bitcoin-was-$10",
    "exact": true,
    "component": "SidebarLayout",
    "cmsassetid": 33393
  },
  {
    "path": "/crypto-basics/bitcoin",
    "exact": true,
    "component": "SidebarLayout",
    "cmsassetid": 33395
  }
]
```

```json
// internal.json
[
  {
    "path": "/",
    "exact": true,
    "component": "SingleColumnLayout",
    "cmsassetid": 33047
  },
  {
    "path": "/crypto-basics/how-to-donate-crypto",
    "exact": true,
    "component": "SidebarLayout",
    "cmsassetid": 33048
  },
  {
    "path": "/crypto-basics/how-to-set-up-a-crypto-wallet",
    "exact": true,
    "component": "SidebarLayout",
    "cmsassetid": 33049
  },
  {
    "path": "/crypto-basics/when-is-the-best-time-to-invest-in-crypto",
    "exact": true,
    "component": "SidebarLayout",
    "cmsassetid": 33050
  },
  {
    "path": "/crypto-basics/an-investor-who-got-in-when-bitcoin-was-$10",
    "exact": true,
    "component": "SidebarLayout",
    "cmsassetid": 33051
  },
  {
    "path": "/crypto-basics/bitcoin",
    "exact": true,
    "component": "SidebarLayout",
    "cmsassetid": 33058
  }
]
```
