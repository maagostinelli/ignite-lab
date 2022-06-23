import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

interface LessonProps {
    title: string,
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){
    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {locale: ptBr,})

    return (
        <a className="w-[300px]">
            <span className="text-base text-gray-300">
                {availableDateFormatted}
            </span>
            <div className="w-full p-4 mt-2 border border-gray-600 rounded">
                <header className="flex align-center justify-between h-6">
                    {isLessonAvailable ? 
                    (<span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                        <CheckCircle size={20} />
                        Conteúdo liberado
                    </span> ): 
                    (<span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                        <Lock size={20} />
                        Em breve
                    </span>)
                    }
                    <span className="text-xs px-2 py-0.5 rounded border border-green-300 text-white">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="text-base text-gray-200 mt-6 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}