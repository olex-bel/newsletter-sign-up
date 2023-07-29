
import { Button } from "@mui/material";

export default function CustomButton({ text, type, onClick }) {
    return (
        <Button 
            variant="contained" 
            color="darkBlue" 
            type={type? type : 'button'} 
            size='large'
            fullWidth
            onClick={onClick? onClick : undefined}
            sx={
                {
                    height: '60px',
                    borderRadius: 2,
                    "&:hover,:active": {
                        background: "linear-gradient(to right, #FF3366, #FF9933)",
                    }
                }
            }
        >
            {text}
        </Button>
    )
}