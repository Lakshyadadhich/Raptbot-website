import type {GatsbyNode} from "gatsby"

export const onCreatePage: GatsbyNode["onCreatePage"] = ({page, actions}) => {
    const {deletePage} = actions

    // Ignore all component folders inside pages
    if (page.path.includes("/components/")) {
        deletePage(page)
    }
}