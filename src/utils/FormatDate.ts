import moment from 'moment'
import 'moment/dist/locale/pt-br'

export function formatDate(date: string) {
	moment.locale('pt-br')
	const formattedDate = moment(date).fromNow()
	return formattedDate
}
