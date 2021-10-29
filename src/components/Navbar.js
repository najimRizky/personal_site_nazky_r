import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import logo from "../assets/Logo.png";
const Navbar = () => {
    return ( 
        <Box bg='black' p={20} color="white">
            <Image src={logo} htmlWidth="150px" objectFit="cover" />
        </Box>
    );
}
 
export default Navbar;