import React, { useEffect, useMemo, useState } from "react";
import { DataProvider, GlobalActionsProvider } from "@plasmicapp/host";

// These are functions your app should implement.

// Users will be able to set these props in Studio.
interface GraphQLGlobalContextProps {
    // You might use this to override the auth URL to a test or local URL.
    baseUrl?: string;
}

export const GraphQLGlobalContext = ({ children, baseUrl }: React.PropsWithChildren<GraphQLGlobalContextProps>) => {

    // Get current user on mount
    useEffect(() => {
    }, [baseUrl]);

    const actions = useMemo(() => ({
    }), [baseUrl]);

    return (
        <GlobalActionsProvider contextName="GraphQLGlobalContext" actions={actions}>
            <DataProvider name="graphqlBaseUrl" data={baseUrl}>
                {children}
            </DataProvider>
        </GlobalActionsProvider>
    );
}
