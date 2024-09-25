'use client';

// Imports
// ------------
import React from 'react';
import Header from '@parts/Header';
import Hero from '@parts/Hero';
import Form from '@parts/Form';
import { LuminaContextProvider } from '@parts/Lumina';

// Component
// ------------
const Page = () => {
	return (
		<LuminaContextProvider>
			<Header />
			<Hero />
			<Form />
		</LuminaContextProvider>
	);
};

export default Page;
