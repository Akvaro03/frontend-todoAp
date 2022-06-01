import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

export default function useIcons() {
    const handleIcon = (icon, theme) => {
        console.log(icon)
        
        switch (icon) {
            case "cart":
                return <ShoppingCartIcon style={{ color: theme }} color="action" />;
    
            case "email":
                return <AttachEmailIcon style={{ color: theme }} color="action" />;
    
            case "Business":
                return <BusinessCenterIcon style={{ color: theme }} color="action" />;
            
            case "copie":
                return <AutoAwesomeMotionIcon style={{ color: theme }} color="action" />;
    
            case "stories":
                return <AutoStoriesIcon style={{ color: theme }} color="action" />;
    
            case "books":
                return <BookmarksIcon style={{ color: theme }} color="action" />;
    
            default:
                break;
        }    
    }

    return [handleIcon ]

}
