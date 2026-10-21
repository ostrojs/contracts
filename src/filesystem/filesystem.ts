/**
 * Interface defining Filesystem Contract.
 */
interface IFilesystem {
    exists(path: string): Promise<boolean>;
    missing(path: string): Promise<boolean>;
    get(path: string): Promise<string>;
    put(path: string, contents: any): Promise<any>;
    replaceInFile(search: any, replace: any, path: string): Promise<any>;
    prepend(path: string, data: any): Promise<any>;
    append(path: string, data: any): Promise<any>;
    chmod(path: string, mode?: any): Promise<any>;
    delete(paths: string | string[]): Promise<boolean>;
    move(path: string, target: string): Promise<void>;
    copy(path: string, target: string): Promise<void>;
    link(target: string, link: string, force?: boolean): Promise<void>;
    relativeLink(target: string, link: string, force?: boolean): Promise<void>;
    name(path: string): string;
    basename(path: string): string;
    dirname(path: string): string;
    extension(path: string): string;
    guessExtension(path: string): string;
    type(path: string): Promise<string>;
    mimeType(path: string): string;
    size(path: string): Promise<number>;
    lastModified(path: string): Promise<number>;
    isDirectory(directory: string): Promise<boolean>;
    isReadable(path: string): Promise<boolean>;
    isWritable(path: string): Promise<boolean>;
    isFile(file: string): Promise<boolean>;
    glob(pattern: string): Promise<string[]>;
    requireOnce(path: string, data?: any[]): Promise<any>;
    files(directory: string, hidden?: boolean): Promise<string[]>;
    allFiles(directory: string, hidden?: boolean): Promise<string[]>;
    directories(directory: string): Promise<string[]>;
    ensureDirectoryExists(path: string, mode?: any, recursive?: boolean): Promise<boolean>;
    makeDirectory(path: string, mode?: any, recursive?: boolean, force?: boolean): Promise<any>;
    moveDirectory(from: string, to: string, overwrite?: boolean): Promise<boolean>;
    copyDirectory(directory: string, destination: string, options?: Record<string, any>): Promise<boolean>;
    deleteDirectory(directory: string, preserve?: boolean): Promise<boolean>;
    deleteDirectories(directory: string): Promise<boolean>;
    cleanDirectory(directory: string): Promise<boolean>;
}

/**
 * Class Filesystem Contract.
 */
class Filesystem implements IFilesystem {
    public async exists(path: string): Promise<boolean> {
        return false;
    }

    public async missing(path: string): Promise<boolean> {
        return true;
    }

    public async get(path: string): Promise<string> {
        return '';
    }

    public async put(path: string, contents: any): Promise<any> {
    }

    public async replaceInFile(search: any, replace: any, path: string): Promise<any> {
    }

    public async prepend(path: string, data: any): Promise<any> {
    }

    public async append(path: string, data: any): Promise<any> {
    }

    public async chmod(path: string, mode?: any): Promise<any> {
    }

    public async delete(paths: string | string[]): Promise<boolean> {
        return true;
    }

    public async move(path: string, target: string): Promise<void> {
    }

    public async copy(path: string, target: string): Promise<void> {
    }

    public async link(target: string, link: string, force: boolean = false): Promise<void> {
    }

    public async relativeLink(target: string, link: string, force: boolean = false): Promise<void> {
    }

    public name(path: string): string {
        return '';
    }

    public basename(path: string): string {
        return '';
    }

    public dirname(path: string): string {
        return '';
    }

    public extension(path: string): string {
        return '';
    }

    public guessExtension(path: string): string {
        return '';
    }

    public async type(path: string): Promise<string> {
        return 'file';
    }

    public mimeType(path: string): string {
        return '';
    }

    public async size(path: string): Promise<number> {
        return 0;
    }

    public async lastModified(path: string): Promise<number> {
        return 0;
    }

    public async isDirectory(directory: string): Promise<boolean> {
        return false;
    }

    public async isReadable(path: string): Promise<boolean> {
        return false;
    }

    public async isWritable(path: string): Promise<boolean> {
        return false;
    }

    public async isFile(file: string): Promise<boolean> {
        return false;
    }

    public async glob(pattern: string): Promise<string[]> {
        return [];
    }

    public async requireOnce(path: string, data: any[] = []): Promise<any> {
    }

    public async files(directory: string, hidden: boolean = false): Promise<string[]> {
        return [];
    }

    public async allFiles(directory: string, hidden: boolean = false): Promise<string[]> {
        return [];
    }

    public async directories(directory: string): Promise<string[]> {
        return [];
    }

    public async ensureDirectoryExists(path: string, mode: any = 0o755, recursive: boolean = true): Promise<boolean> {
        return true;
    }

    public async makeDirectory(path: string, mode: any = 0o755, recursive: boolean = false, force: boolean = false): Promise<any> {
    }

    public async moveDirectory(from: string, to: string, overwrite: boolean = false): Promise<boolean> {
        return false;
    }

    public async copyDirectory(directory: string, destination: string, options: Record<string, any> = {}): Promise<boolean> {
        return false;
    }

    public async deleteDirectory(directory: string, preserve: boolean = false): Promise<boolean> {
        return false;
    }

    public async deleteDirectories(directory: string): Promise<boolean> {
        return false;
    }

    public async cleanDirectory(directory: string): Promise<boolean> {
        return false;
    }
}

export type { IFilesystem };
export default Filesystem;