type Translations = {
	en: { [index: string]: string }
	es: { [index: string]: string }
}

/**
 * SET LOCALE: 'en' or 'es'
 */
const locale: string = 'en'

// Write your own translations
const translations: Translations = {
	en: {
		Welcome: 'Welcome',
		'Log in': 'Log in',
		'Log out': 'Log out',
		Register: 'Register',
		Password: 'Password',
		'Remember me': 'Remember me',
		'Forgot your password?': 'Forgot your password?',
		'forgot-password-message': `No problem.
			Just let us know your email address and we will email you a 
			password reset link that will allow you to choose a new one.`,
		"Don't have an Account?": "Don't have an Account?",
		Name: 'Name',
		Username: 'Username',
		'Confirm password': 'Confirm password',
		'confirm-password-message':
			'Please confirm your password before continuing.',
		Confirm: 'Confirm',
		'Register me': 'Register me',
		'Already registered?': 'Already registered?',
		'Reset password': 'Reset password',
		'Verify email': 'Verify email',
		'Email Verification': 'Email Verification',
		'email-verification-message': `Thanks for signing up! Before getting started, 
			could you verify your email address by clicking on the link we just emailed 
			to you? If you didn't receive the email, we will gladly send you another.`,
		'Resend Verification Email': 'Resend Verification Email',
		'Email password reset link': 'Email password reset link',
		Dashboard: 'Dashboard',
		'My account': 'My account',
		'Profile information': 'Profile information',
		'profile-information-intro': `Update your account's profile information and email address.`,
		Account: 'Account',
		'Delete account': 'Delete account',
		Save: 'Save',
		'Your email address is unverified': 'Your email address is unverified.',
		'email-verify-link': 'Click here to re-send the verification email.',
		'verification-link-sent': `A new verification link has been sent to your email address.`,
		'Update Password': 'Update Password',
		'Current Password': 'Current Password',
		'New Password': 'New Password',
		'password-updated-message': 'The password has been updated.',
		'delete-account-confirmation-title':
			'Are you sure you want to delete your account?',
		'delete-account-confirmation-message': `Once your account is deleted, all of its 
			resources and data will be permanently deleted. Before deleting your account,
			please download any data or information that you wish to retain.`,
		'update-password-description':
			'Ensure your account is using a long, random password to stay secure.',
		'Back to log in page': 'Back to log in page',
		Cancel: 'Cancel',
		Delete: 'Delete',
	},
	es: {
		Welcome: 'Bienvenido',
		'Log in': 'Entrar',
		'Log out': 'Salir',
		Register: 'Registrarse',
		Password: 'Contraseña',
		'Remember me': 'Recordarme',
		'Forgot your password?': '¿Olvidaste tu contraseña?',
		'forgot-password-message': `No te preocupes.
			Escribe el email de tu cuenta. Recibirás un correo con un link 
			para cambiar tu contraseña.`,
		"Don't have an Account?": '¿Aún no tienes una cuenta?',
		Name: 'Nombre',
		Username: 'Nombre de usuario',
		'Confirm password': 'Confirma la contraseña',
		'confirm-password-message':
			'Por favor confirma tu contraseña antes de continuar.',
		Confirm: 'Confirmar',
		'Register me': 'Registrarme',
		'Already registered?': '¿Ya tienes una cuenta?',
		'Reset password': 'Reiniciar contraseña',
		'Verify email': 'Verificar email',
		'Email Verification': 'Verificación de email',
		'email-verification-message': `Gracias por registrarte. Antes de continuar debes 
			verificar tu dirección de email. Si no recibiste el correo de verificación, por 
			favor haz click en el botón abajo y te enviaremos un nuevo link.`,
		'Resend Verification Email': 'Reenviar link de verificación',
		'Email password reset link': 'Enviar link para reiniciar contraseña',
		Dashboard: 'Dashboard',
		'My account': 'Mi cuenta',
		'Profile information': 'Información de perfil',
		'profile-information-intro': `Actualiza los datos de tu cuenta y Email.`,
		Account: 'Mi cuenta',
		'Delete account': 'Delete account',
		Save: 'Guardar',
		'Your email address is unverified': 'Necesitas confirmar tu email.',
		'email-verify-link':
			'Haz click aquí para enviar el correo de verificación.',
		'verification-link-sent': `Te hemos enviado un nuevo link de verificación a tu 
			dirección de correo.`,
		'Update Password': 'Actualizar contraseña',
		'Current Password': 'Contraseña actual',
		'New Password': 'Nueva contraseña',
		'password-updated-message': 'La contraseña ha sido actualizada.',
		'delete-account-confirmation-title':
			'¿Estás seguro de querer eliminar tu cuenta?',
		'delete-account-confirmation-message': `Una vez que tu cuenta haya sido borrada 
			todos los recursos y datos asociados serán eliminados permanentemente. 
			Antes de borrar tu cuenta, asegúrate de copiar o descargar toda la información 
			que quieras mantener.`,
		'update-password-description':
			'Asegúrate de que tu cuenta utiliza una contraseña larga y aleatoria para mantener la seguridad.',
		'Back to log in page': 'Volver al incio de sesión',
		Cancel: 'Cancelar',
		Delete: 'Borrar',
	},
}

/**
 * Function t() allows you to tranlate strings
 * from the translations object at i18n/translations.ts
 * @param str
 * @returns
 */
export const t = (str: string): string => {
	if (!str) return ''
	const translation =
		locale === 'en' ? translations.en[str] : translations.es[str]
	return translation ?? str
}
