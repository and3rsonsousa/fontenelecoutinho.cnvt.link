import { AppDataType } from "~/types";

export function getAppData() {
	let AppDataType: AppDataType = {
		// name  			=>	nome que ficará no <title></title>
		// className 	=>	classes aplicadas ao compomponent <App></App>
		app: {
			name: "Fontenele Coutinho Odontologia",
			className: "bg-gray-100",
		},

		// Ordem de aparição
		// LOGO | NOME | EXCERT
		header: {
			logo: {
				url: "/logo.png",
				component: undefined,
				className: "w-28 mx-auto mb-8",
			},
			name: {
				title: `<span class="text-3xl text-brand-2">Fontenele Coutinho</span><br/><span class="text-sm uppercase tracking-wider">Odontologia</span>`,
				className: "",
			},
			//texto que fica logo abaixo ao logo
			excerpt: `<span class="font-light">🍃 Seu <span class="font-bold">SORRISO LEVE</span> como deve ser.</span>`,
			// css class for the whole header,
			// className: "",
		},
		// backdrop: {
		// className: "bg-black/20",
		// url: {
		// path: "/backdrop.svg",
		// className: "-mr-32 -mt-56 text-brand-3 -ml-96",
		// className: "opacity-25 scale-150 mt-16 md:scale-125 md:-mt-32 xl:-mt-96",
		// },
		// },
		links: [
			{
				name: `<span class="text-xl font-semibold block -mb-8">Agende sua consulta em</span>`,
			},
			{
				group: [
					{
						name: `Sobral`,
						url: "whatsapp-sobral",
						type: "primary",
						redirect:
							"https://wa.me/5588994694910?text=Oi,%20Alice.%20Gostaria%20de%20marcar%20uma%20consulta.",
					},
					{
						name: `Carnaubal`,
						url: "whatsapp-carnaubal",
						type: "primary",
						redirect:
							"https://wa.me/5588999698851?text=Oi,.%20Gostaria%20de%20marcar%20uma%20consulta.",
					},
				],
			},

			{
				name: "Onde estamos",
				url: "https://goo.gl/maps/bbgvxcq5K6KrEP2u7",
			},
			{
				name: "Nossos Serviços",
				url: "https://www.instagram.com/p/CVNu5bDLvJM/",
			},

			{
				group: [
					{
						name: "Vanessa 👩🏻",
						url: "https://www.instagram.com/p/CUc040qj6HP/",
					},
					{
						name: "Émerson 🧔🏻‍♂️",
						url: "https://www.instagram.com/p/CUpmzDNDscj/",
					},
				],
			},

			{
				name: `<div class"-mb-8"><div class="text-xs uppercase font-semibold tracking-wider text-center">IMERSÃO</div>
				<div class="text-xl font-bold">Clareamento Dental</div>
				</div>`,
			},
			{
				name: "Reserve a sua vaga",
				url: "whatsapp-sobral",
				redirect:
					"https://wa.me/5588994694910?text=Oi,%20Alice.%20Gostaria%20de%20saber%20mais%20sobre%20a%20Imers%C3%A3o%20de%20Clareamento.",
			},

			{
				name: `<div><img src="/flor.png" class="w-20 mt-8 mx-auto" /></div>`,
			},

			//Botões Footer
			{
				icon: "tiktok",
				url: "https://tiktok.com/@fontenelecoutinho",
				footer: true,
			},
			{
				icon: "instagram",
				url: "https://instagram.com/fontenelecoutinho",
				footer: true,
			},
			{
				icon: "facebook",
				url: "https://facebook.com/fontenelecoutinho",
				footer: true,
			},
			{
				icon: "email",
				url: "email",
				redirect: "mailto:fontenelecoutinho@gmail.com",
				footer: true,
			},
		],
	};

	return AppDataType;
}
