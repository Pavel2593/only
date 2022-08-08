import React from 'react'
import { RoutesItem } from '../routes'
import { Navigate, Route, Routes } from 'react-router-dom'
import Auth from '../pages/Auth'

const AppRouter: React.FunctionComponent = () => {
    return (
        <Routes>
            {RoutesItem &&
                RoutesItem.map(({ path, Component }) =>
                    <Route
                        key={path}
                        path={path}
                        element={<Component />}
                    />
                )
            }
            <Route path='*' element={<Auth/>} />
        </Routes>
    );
}

export default AppRouter;
