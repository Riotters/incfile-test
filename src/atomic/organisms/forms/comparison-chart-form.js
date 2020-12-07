import React, { useRef } from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import Label from "../../molecules/form/label-field-with-child";
import Input from "../../atoms/inputs/input";
import Dropdown from "../../molecules/form/dropdown";
import ButtonAction from "../../molecules/buttons/button-action";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-left-bottom-right.inline.svg";
import { ThankYouContent } from "../../../atomic/partials/thank-you-modal-content";
import { useForm, Controller } from "react-hook-form";
import { postHSForm } from "../../../api/Api";
import { _phoneFormat } from "../../../helpers/input-parsers";
import { isUSPhone, validEmail } from "../../../helpers/form-validate";

const Wrapper = styled(Whitebox)`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 570px;
	padding: 40px;
	position: relative;

	.curve-shape {
		svg {
			transform: scale(-1);
		}
	}
`;

const LightBoxModal = styled.div`
	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.8);
	opacity: ${(props) => (props.visible ? "1" : "0")};
	visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const LightBoxContent = styled.div`
	transition: height 0.5s, max-width 0.5s;

	background-color: #fff;
	width: 100%;
	max-width: 960px;
	position: relative;
	margin: 0 30px;
	max-height: 100vh;
	overflow-y: auto;
	@media screen and (min-width: 769px) {
		height: 95vh;
		padding-top: 0;
		overflow-y: visible;
	}

	&.form-submitted {
		height: 40vh;
		max-width: 500px;
	}
`;

export const thanks_form = {
	header: "Thanks for submitting the form.",
	text: "A link download was sent to your email. Please check your inbox.",
	button: {
		text: "Close",
		url: "#",
	},
};

const BusinessNameSearchForm = ({ className, content }) => {
	const [modalVisible, setModalVisible] = React.useState(false);
	const [formSubmitted, setFormSubmitted] = React.useState(false);
	const pageUrl = typeof window !== "undefined" ? window.location.href : "";
	const hutk =
		typeof window !== "undefined"
			? document.cookie.replace(
					/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/,
					"$1"
			  )
			: "";

	const intentPathRef = useRef();
	const [submittedData, setSubmittedData] = React.useState({});
	const {
		register,
		reset,
		handleSubmit,
		control,
		errors,
		formState,
		setValue,
	} = useForm({
		defaultValues: {
			intent_path: "",
		},
	});
	const { isSubmitting, isSubmitSuccessful } = formState;

	const HandleForm = (data) => {
		const formData = new FormData();
		formData.set("pageTitle", document.title);
		formData.set("pageUrl", pageUrl);
		formData.set("hs_form_id", "42fd5e33-a7fc-4758-aaed-00a5cd6483b4");
		formData.set("hutk", hutk);

		Object.keys(data).forEach((i) => {
			return formData.set(i, data[i]);
		});

		postHSForm(formData).then((json) => {
			setSubmittedData(data);
			setModalVisible(true);
			setFormSubmitted(true);
		});
	};

	const popup = (e) => {
		e.preventDefault();

		if (
			!e.target.className.includes("modal-overlay") &&
			!e.target.className.includes("modal-close") &&
			modalVisible === true
		)
			return;

		setModalVisible(!modalVisible);
	};

	React.useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ ...submittedData });
		}
	}, [isSubmitSuccessful, submittedData, reset]);

	let modalClases = ["lightbox-content"];
	if (formSubmitted) modalClases.push("form-submitted");

	return (
		<Wrapper className={className}>
			<Curve
				className="curve-shape"
				bottom="-25"
				left="-29"
				color={color.blue1}
			>
				<CurveSVG />
			</Curve>
			<form onSubmit={handleSubmit(HandleForm)}>
				<span
					style={{
						display: "block",
						marginBottom: "16px",
						fontSize: "16px",
						lineHeight: "24px",
						fontFamily: "MarkPro",
					}}
				>
					{content.header}
				</span>
				<Label htmlFor="email" content={content.field} bottomMargin="16">
					<Input
						type="email"
						name="email"
						id="email"
						inputRef={register({
							required: `Field can't be empty`,
							validate: (value) => validEmail(value) || `Email is not valid`,
						})}
					/>
					{errors.email && (
						<span className="error__info">{errors.email.message}</span>
					)}
				</Label>
				<Label htmlFor="first-name" content={content.field2} bottomMargin="16">
					<Input
						name="firstname"
						id="first-name"
						inputRef={register({ required: `Field can't be empty` })}
					/>
					{errors.firstname && (
						<span className="error__info">{errors.firstname.message}</span>
					)}
				</Label>
				<Label htmlFor="last-name" content={content.field3} bottomMargin="16">
					<Input
						name="lastname"
						id="last-name"
						inputRef={register({ required: `Field can't be empty` })}
					/>
					{errors.lastname && (
						<span className="error__info">{errors.lastname.message}</span>
					)}
				</Label>
				<Label htmlFor="phone" content={content.field4} bottomMargin="16">
					<Input
						name="phone"
						id="phone"
						onChange={(e) => setValue("phone", _phoneFormat(e.target.value))}
						inputRef={register({
							required: `Field can't be empty`,
							validate: (value) =>
								isUSPhone(value) || `Should be formatted like xxx-xxx-xxxx`,
						})}
					/>
					{errors.phone && (
						<span className="error__info">{errors.phone.message}</span>
					)}
				</Label>
				<Label htmlFor="intent_path" content={content.field5} bottomMargin="32">
					<Controller
						control={control}
						name="intent_path"
						rules={{ required: `Field can't be empty` }}
						onFocus={() => intentPathRef.current?.focus()}
						render={() => (
							<Dropdown
								inputRef={intentPathRef}
								className={errors.intent_path ? "invalid" : ""}
								options={content.dropdown}
								onChange={(option) => {
									setValue("intent_path", option.value, {
										shouldValidate: true,
									});
								}}
								placeholder="Select"
							/>
						)}
					/>
					{errors.intent_path && (
						<span className="error__info">{errors.intent_path.message}</span>
					)}
				</Label>
				<ButtonAction
					disabled={isSubmitting}
					content={content.button}
					type="submit"
					theme="primary56"
					arrow
					marginSM="0 auto"
				/>
			</form>

			<LightBoxModal
				visible={modalVisible}
				onClick={popup}
				className="modal-overlay"
			>
				<LightBoxContent
					style={{ pointerEvents: "all" }}
					class={modalClases.join(" ")}
				>
					<ThankYouContent content={thanks_form} modalExit={popup} />
				</LightBoxContent>
			</LightBoxModal>
		</Wrapper>
	);
};

export default BusinessNameSearchForm;
