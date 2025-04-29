import NotePreview from "./NotePreview";

export interface Notes {
   id: number,
   title: string,
   description: string,
}

export default function NoteWrapper() {
   const notes: Notes[] = [
      {
         id: 0,
         title: 'Docker',
         description: 'lorem lorem lorem fagsdhsgd,,[ls,l,fpk,dfpk'
      },
      {
         id: 1,
         title: 'Css',
         description: 'lorem lorem lorem fagsdhsgd,,[ls,l,fpk,dfpk'
      },
      {
         id: 2,
         title: 'HTML',
         description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem'
      },
   ];
   
   return (
      <div className={`w-full flex flex-col items-center gap-3 mt-7 mb-4 ${'noteWrapper'}`}>
         {notes.map((el) => 
            <NotePreview 
               key={el.id}
               title={el.title}
               description={el.description}
            />
         )}
      </div>
   )
}
