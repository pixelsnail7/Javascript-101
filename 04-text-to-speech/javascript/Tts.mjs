export class Tts {
    constructor(text) {
        this.text = text || "Hello World";
        this.lang = "en-US";
        this.pitch = 8;
        this.rate = 1.5;
        this.volume = 0.8;
    }

    set SetText (text) {this.text = text} // set text
    set SetPitch(pitch) {this.pitch = pitch <= 2 ? pitch : 2} // set pitch
    set SetRate(rate) {this.rate = rate <= 10 ? rate : 10} // set rate
    set SetVolume(volume) {this.volume = volume <= 2 ? volume : 2} // set volume

    speak() {
        const utterance = new SpeechSynthesisUtterance(this.text);
        utterance.lang = this.lang;
        utterance.pitch = this.pitch;
        utterance.rate = this.rate;
        utterance.volume = this.volume;
        speechSynthesis.speak(utterance);
    }

    pause() {speechSynthesis.pause();} // pause speaking
    resume() {speechSynthesis.resume();} // resume speaking
    cancel() {speechSynthesis.cancel();} // cancel speaking

    get voices() {return speechSynthesis.getVoices();} // get available voices

    // get current values
    get values() {
        return {
            text: this.text,
            lang: this.lang,
            pitch: this.pitch,
            rate: this.rate,
            volume: this.volume
        };
    }
}