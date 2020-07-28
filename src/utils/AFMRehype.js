/**
 *  Copyright 2020 Adobe. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 */

import { createElement } from "react"
import rehypeReact from "rehype-react"

import {
  Alert,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  List,
  Paragraph,
  Table,
  TBody,
  Th,
  Td,
  THead,
  Tr,
} from "@adobe/parliament-ui-components"
// import { TabView, Tab } from "@react/react-spectrum/TabView"
// import { TabView, Tab } from "../components/Tabs"
import IncludeMarkdown from "../components/IncludeMarkdown"
import Hero from "../components/Hero"

const renderAst = new rehypeReact({
  createElement: createElement,
  components: {
    alert: Alert,
    hero: Hero,
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6,
    includemarkdown: IncludeMarkdown,
    // tab: Tab,
    // tabview: TabView,
    table: Table,
    tbody: TBody,
    th: Th,
    td: Td,
    thead: THead,
    tr: Tr,
    p: Paragraph,
    ul: List,
  },
}).Compiler

export default renderAst
