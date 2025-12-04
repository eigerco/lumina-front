"use client";

import React from "react";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
	SSRMultipartLink,
} from "@apollo/client-integration-nextjs";

function makeClient() {
	const httpLink = new HttpLink({
		uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
		headers: {
			Authorization: `Bearer 0591afcf9fb02880221a183e691ba3`,
		},
	});

	return new ApolloClient({
		cache: new InMemoryCache(),
		link:
			typeof window === "undefined"
				? ApolloLink.from([
					new SSRMultipartLink({
						stripDefer: true,
					}),
					httpLink,
				])
				: httpLink,
	});
}

export const ApolloWrapper = ({ children }) => {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
};
