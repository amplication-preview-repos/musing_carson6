import { Transcription as TTranscription } from "../api/transcription/Transcription";

export const TRANSCRIPTION_TITLE_FIELD = "status";

export const TranscriptionTitle = (record: TTranscription): string => {
  return record.status?.toString() || String(record.id);
};
