import Vue from 'vue';
import { I18n } from "@/i18n/classes";
import { I18nExtension } from '@/i18n/extension';

declare module 'vue/types/vue' {
    interface Vue {
        $extBase: string;
        $i18n: I18n<I18nExtension>;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        i18n?: I18n<I18nExtension>;
    }
}