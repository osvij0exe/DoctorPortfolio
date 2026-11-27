export interface DoctorResume {
    id: string;
    prefix: string;
    givenName: string;
    familyName: string;
    specialty: string;
    heading: string;
    subHeading: string;
    paragraph: string;
    secondParagraph: string;
}

export const doctorResumes: DoctorResume[] = [
    {
        id: '1',
        prefix: 'Dra.',
        givenName: 'Jessica Jocelyn ',
        familyName: 'Amdor Cuenca',
        specialty: 'cardio-oncología',
        heading: 'Corazón y esperanza:',
        subHeading: 'atención especializada en cardio-oncología.',
        paragraph: 'Médica especialista en Cardiología, con experiencia profesional en reconocidas instituciones hospitalarias públicas y privadas de la Ciudad de México. Cuenta con formación especializada en Cardio-oncología y diagnóstico cardiovascular por imagen, incluyendo ecocardiografía, tomografía y resonancia magnética cardíaca.',
        secondParagraph: 'Su práctica médica se distingue por un enfoque integral, basado en la evidencia científica, la actualización continua y el compromiso con una atención personalizada, humana y de calidad.'
    },

];