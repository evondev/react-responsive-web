# What is this ?

A simple lib to truncate text with ellipsis

# Installation

`npm install react-responsive-web --save`
Then...

```
import { isMobile } from "react-responsive-web";

{isMobile && <p>Display only on mobile view</p> }

```

# Options

react-responsive-web have a lot of case to check base on standard break-points of responsive like mobile, tablet, large tablet, desktop, large desktop

```
{
  isMobile,
  isTablet,
  isTabletOnly,
  isLargeTablet,
  isLargeTabletOnly,
  isDesktop,
  isDesktopOnly,
  isLargeDesktop
}
```
