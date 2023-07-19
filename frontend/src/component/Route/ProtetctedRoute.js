import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes} from "react-router-dom";

const ProtectedRoute = ( {element: Element, ...rest }) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
    return(
        <Routes>
        <React.Fragment>
            {!loading && (
                <Route
                    {...rest}
                    render={(props) => {
                        if(!isAuthenticated){
                            return <Navigate to="/login" />;
                        }
                        
                        return <Element {...props} />;
                    }}
                />
            )}
        </React.Fragment>
        </Routes>
    );
}

export default ProtectedRoute;