import React from "react";
import { Form, FormGroup, Input} from "reactstrap";

const SearchBar = ({ setSearchTerm, searchTerm }) => {
    return (
        <Form>
            <FormGroup>
                <Input type="text" placeholder="Search by Catagory"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                
            </FormGroup>
        </Form>
    );
};

export default SearchBar;