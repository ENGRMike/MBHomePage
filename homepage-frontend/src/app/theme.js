import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        mode: "dark",
        
    },
    components: {
        MuiPaper: {
            variants: [
                {
                    props: { variant: "test"},
                    style: {
                        color: "red"
                    }
                }
            ]
        }
    }
})

export default theme